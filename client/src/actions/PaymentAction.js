import { SET_PAYMENT } from "./types";
import FormData from "form-data";
import axios from "axios";
import Swal from "sweetalert2";
import loadStripe from "../components/Payment/customer/Stripe/loadStripe";
import stripe from "stripe";
import setAuthToken from "../components/utils/setAuthToken";

// Set Hotel Profile
export const setPayment = (data) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: SET_PAYMENT, payload: data });
  } catch (err) {
    console.log(err);
  }
};
// Charge Customer
export const ChargeCustomer = (data) => async (dispatch) => {
  try {
    console.log(data);
    let cardNumber = data.cardNumber;
    let Expires = data.Expires.split("/");
    let exp_month = parseInt(Expires[0]);
    let exp_year = parseInt(Expires[1]);
    let CVC = data.CVC;
    // let Stripe = new stripe("pk_test_E4kJlHrPZzpKcJzBXxf1KywE00ItkELuMe");
    let Stripe = data.Stripe;
    let amount = data.Amount;
    // alert(amount);
    // console.clear();
    console.log("CardNumer=" + cardNumber);
    console.log("exp_month=" + exp_month);
    console.log("exp_year=" + exp_year);
    console.log("CVC=" + CVC);

    Stripe.card.createToken(
      {
        number: cardNumber,
        exp_month: exp_month,
        exp_year: exp_year,
        cvc: CVC,
      },
      async (status, response) => {
        console.log(status);
        console.log(response);
        const config = {
          header: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };
        if (localStorage.token) {
          setAuthToken(localStorage.token);
        }
        //Get logged in User
        axios.get("/auth").then(async (LoggedInUser) => {
          console.log("Logged in User=");
          LoggedInUser = LoggedInUser.data;
          console.log(LoggedInUser);
          //Check if Customer exits
          axios
            .post(
              "/payment/checkcustomer",
              { CustomerEmail: LoggedInUser.email },
              config
            )
            .then(async (CustomerExists) => {
              let Customer = null;
              let CustomerID = null;
              console.log("CHECKED CUSTOMER=");
              console.log(CustomerExists);
              CustomerExists = CustomerExists.data;
              if (CustomerExists.hasOwnProperty("NOTFOUND")) {
                // Create a Customer
                Customer = await axios.post(
                  "/payment/createCustomer",
                  {
                    name: LoggedInUser.name,
                    email: LoggedInUser.email,
                    description: "Customer" + LoggedInUser.name + "was Created",
                  },
                  config
                );
                CustomerID = Customer.data;
              } else {
                // Customer Exits
                Customer = CustomerExists;
                console.log("THE CURRENT CUSTOMER=");
                console.log(Customer);
                CustomerID = Customer.id;
              }

              console.log("CUSTOMERS FUCKING ID=");
              console.log(CustomerID);

              // Charge Customer
              const res = await axios.post(
                "/payment/charge",
                {
                  TokenID: response.id,
                  CustomerID,
                  Amount: amount,
                },
                config
              );
              console.log(res);
            })
            .catch((error) => {
              console.error(error);
            });
        });

        Swal.fire({
          icon: "success",
          title: "Payment Succeeded",
          text: "Payment has been succeeded",
        });
      }
    );
  } catch (error) {
    console.log("Error Occured");
    console.log(error);
  }
};
