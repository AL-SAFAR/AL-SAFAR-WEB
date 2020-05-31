const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_hqcxEpMNto862mGujgGpONho004USKiy2K");

router.get("/", async (req, res) => {
  res.json({ msg: "Payment is Running" });
});

router.post("/checkcustomer", async (req, res) => {
  try {
    console.log("CHECK CUSTOMER REQ BODY=");
    console.log(req.body);
    let { CustomerEmail } = req.body;
    stripe.customers.list(function (err, customers) {
      // asynchronously called
      console.log("THE ERROR=");
      console.log(err);
      let data = customers.data;
      let found = false;
      let FoundCustomer = null;
      data.map((customer) => {
        if (customer.email === CustomerEmail) {
          found = true;
          FoundCustomer = customer;
        }
      });
      if (found) {
        console.log("FOUND CUSTOMER=");
        console.log(FoundCustomer);
        return res.json(FoundCustomer);
      } else {
        return res.json({ NOTFOUND: "NOTFOUND" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/charge", async (req, res) => {
  const { TokenID, CustomerID, Amount } = req.body;
  console.log(req.body);
  let PaymentAmount = Amount * 100;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: PaymentAmount,
      currency: "PKR",
      description: "We did it boss",
      payment_method_data: {
        type: "card",
        card: {
          token: TokenID,
        },
      },
      receipt_email: "jenny.rosen@example.com",
      customer: CustomerID,
      confirm: true,
    });

    console.log(payment);

    return res.status(200).json({
      confirm: "abc123",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/createCustomer", async (req, res) => {
  const { name, email, description } = req.body;
  console.log(req.body);
  try {
    let customer = await stripe.customers.create({
      name,
      email,
      description,
    });
    // console.log({ customer });
    console.log("Customer ID=");
    // console.clear();
    console.log(customer.id);
    res.json(customer.id);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
