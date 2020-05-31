import React, { Fragment, useEffect, useState } from "react";
import "../../../css/PaymentForm.css";
import { setPayment, ChargeCustomer } from "../../../actions/PaymentAction";
import { connect } from "react-redux";
import Axios from "axios";
import loadStripe from "./Stripe/loadStripe";
import CreditCard from "./CreditCard";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import OrderGuide from "./Order/OrderGuide";
const Payment = ({
  Payment: { cardNumber, cardHolder, Expires, CVC },
  GuideProfile,
  setPayment,
  ChargeCustomer,
}) => {
  useEffect(() => {
    localStorage.removeItem("persist:root");
  }, []);
  let Stripe = loadStripe();
  // State
  const [brandFound, setbrandFound] = useState(false);
  const [cardBrandImage, setCardBrandImage] = useState("Credit-Card.png");
  const [cardIcon, setCardIcon] = useState("validcard.svg");
  const [isSlash, setisSlash] = useState(false);
  const [focus, setFocus] = useState("");
  const [brandSVG, setBrandSVG] = useState([
    { visa: "visa.svg" },
    { mastercard: "MasterCard.svg" },
    { amex: "AmericanExpress.svg" },
    { diners: "diners.svg" },
    { jcb: "jcb.svg" },
    { maestro: "maestro.svg" },
    { unionpay: "UnionPay.svg" },
    { discover: "discover.svg" },
  ]);
  const [CVCPattern, setCVCPattern] = useState(`[0-9]{1,3}`);
  const [CardBrand, setCardBrand] = useState("");
  const [isCardValid, setisCardValid] = useState(true);
  const [Amount, setAmount] = useState(0);
  useEffect(() => {
    if (CardBrand === "amex") {
      // alert("Exe");
      setCVCPattern(`[0-9]{1,4}`);
      document.getElementById("CVC").setAttribute("pattern", `[0-9]{1,4}`);
    } else {
      document.getElementById("CVC").setAttribute("pattern", `[0-9]{1,3}`);
      setPayment({
        name: "CVC",
        value: CVC.substring(0, 3),
      });
      setCVCPattern(`[0-9]{1,3}`);
      setAmount(Days * serviceCharges);
    }
  }, []);
  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "Expires") {
      if (value.length >= 6 || isSlash) {
        return;
      }
    }
    if (!e.target.validity.valid) return;

    if (name === "cardNumber") {
      if (CardBrand === "amex") e.target.value = CardNumber_format_alt(e);
      else e.target.value = CardNumber_format(value);
    }

    setPayment({
      name,
      value: e.target.value,
    }).then(() => {
      if (name === "cardNumber") CheckBrand(value);
    });
    // alert(value);
    if (value.length === 19) {
      // alert(value.length);
      let valid = value.replace(/\s/g, "");
      // let regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/;
      var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      // alert("MAtch=" + valid.match(cardno));
      if (cardno.exec(valid)) {
        // alert("valid=" + valid);
        // alert("Valid Credit Card");
      } else {
        // alert("Not Valid");
      }
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    ChargeCustomer({ cardNumber, cardHolder, Expires, CVC, Stripe, Amount });
  };
  const CheckBrand = (value) => {
    if (value === "") {
      setbrandFound(false);
      setCardIcon("validcard.svg");
    }
    if (value === "4") {
      setbrandFound(true);
      setCardIcon("visa.svg");
      setCardBrand("visa");
      return "visa";
    } else if (value.length <= 1) {
      return;
    }

    for (let brand in CreditCard) {
      let Prefixes = CreditCard[brand].prefixes;
      for (let prefix of Prefixes) {
        if (prefix.toString().indexOf(value.toString()) === 0) {
          setCardBrand(brand);
          setbrandFound(true);
          for (let icon of brandSVG) {
            let key = Object.keys(icon);
            let image = Object.values(icon);
            if (key[0] === brand) {
              setCardIcon(image[0]);
            }
          }
        }
      }
    }
  };
  const handleInputFocus = (e) => {
    let name = e.target.name;
    switch (name) {
      case "cardNumber": {
        var element = document.getElementsByClassName("rccs__card")[0];
        if (element) element.classList.remove("rccs__card--flipped");
        setFocus("number");
        break;
      }
      case "cardHolder": {
        var element = document.getElementsByClassName("rccs__card")[0];
        if (element) element.classList.remove("rccs__card--flipped");
        setFocus("name");
        break;
      }
      case "Expires": {
        var element = document.getElementsByClassName("rccs__card")[0];
        if (element) element.classList.remove("rccs__card--flipped");
        setFocus("expiry");
        break;
      }

      case "CVC": {
        var element = document.getElementsByClassName("rccs__card")[0];
        if (element) element.classList.add("rccs__card--flipped");

        setFocus("cvc");
        break;
      }
      default:
        break;
    }
  };
  const CardNumber_format_alt = (e) => {
    if (CardBrand !== "amex") {
      if (e.keyCode === 8) {
        document.getElementById("cardNumberInavalid").style.display = "none";
        document.getElementById("CardNumber").style.color = "#FFFFFF";
      }
      return;
    }
    let value = document.getElementById("CardNumber").value;
    var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length === 15) {
      if (luhnCheck(v)) {
        // alert("valid");
        document.getElementById("cardNumberInavalid").style.display = "none";
        document.getElementById("CardNumber").style.color = "#FFFFFF";
      } else {
        // alert("invalid");
        document.getElementById("cardNumberInavalid").style.display = "";
        document.getElementById("CardNumber").style.color = "#FA755A";
      }
    }
    if (e.keyCode === 8) {
      document.getElementById("cardNumberInavalid").style.display = "none";
      document.getElementById("CardNumber").style.color = "#FFFFFF";
      if (value && value.length < 1) return;
      // alert(value.length);
      if (value.length === 5 || value.length === 12)
        value = value.substring(0, value.length - 1);
      document.getElementById("CardNumber").value = value;
      return;
    }
    let CardLength = CardBrand === "amex" ? 17 : 16;
    if (e.target.value.length >= CardLength) {
      e.target.value = e.target.value.substring(0, CardLength);
      return e.target.value;
    }
    if (e.target.value.length === 4) {
      e.target.value = e.target.value + " ";
    }
    if (e.target.value.length === 11) {
      e.target.value = e.target.value + " ";
    }
    return e.target.value;
  };
  const CardNumber_format = (value) => {
    var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length === 16) {
      if (luhnCheck(v)) {
        document.getElementById("cardNumberInavalid").style.display = "none";
        document.getElementById("CardNumber").style.color = "#FFFFFF";
      } else {
        document.getElementById("cardNumberInavalid").style.display = "";
        document.getElementById("CardNumber").style.color = "#FA755A";
      }
    }
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };
  const Expiry_format = (event) => {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    if (code === 191) {
      setisSlash(true);
      return;
    } else {
      setisSlash(false);
    }
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }

    event.target.value = event.target.value
      .replace(
        /^([1-9]\/|[2-9])$/g,
        "0$1/" // 3 > 03/
      )
      .replace(
        /^(0[1-9]|1[0-2])$/g,
        "$1/" // 11 > 11/
      )
      .replace(
        /^1([3-9])$/g,
        "01/$1" // 13 > 01/3 //UPDATED by NAVNEET
        // ).replace(
        //   /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
      )
      .replace(
        /^0\/|0+$/g,
        "0" // 0/ > 0 and 00 > 0 //UPDATED by NAVNEET
      )
      .replace(
        /[^\d|^\/]*/g,
        "" // To allow only digits and `/` //UPDATED by NAVNEET
      )
      .replace(
        /\/\//g,
        "/" // Prevent entering more than 1 `/`
      );
  };
  const luhnCheck = (value) => {
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0,
      bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    }

    return nCheck % 10 == 0;
  };
  let { startDate, endDate } = GuideProfile;
  let SD = new Date(startDate);
  let ED = new Date(endDate);
  const date1 = new Date(
    SD.getMonth() + 1 + "/" + SD.getDate() + "/" + SD.getFullYear()
  );
  const date2 = new Date(
    ED.getMonth() + 1 + "/" + ED.getDate() + "/" + ED.getFullYear()
  );
  const diffTime = Math.abs(date2 - date1);
  let Days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  Days = Days + 1;
  let serviceCharges =
    GuideProfile.GuideItemProfile.UserProfile[0].serviceCharges;
  console.log(diffTime);
  console.log(Days);
  return (
    <Fragment>
      <div id='paymentBackground'>
        {" "}
        <div className='container PaymentFormcontainer mt-5 pt-5'>
          <div className='window'>
            <div className='order-info'>
              <div className='order-info-content'>
                <h2 className='H2PaymentForm'>Booking Summary</h2>
                <OrderGuide GuideProfile={GuideProfile} />
                <div className='total'>
                  <div className='line'></div>
                  <span style={{ float: "left" }}>
                    <div className='thin dense'>Days</div>
                    <div className='thin dense'>Bill X per day</div>
                    TOTAL
                  </span>
                  <span style={{ float: "right", textAlign: "right" }}>
                    <div className='thin dense'>{Days}</div>
                    <div className='thin dense'>
                      Rs.{Days}X{serviceCharges}
                    </div>
                    Rs.{Days * serviceCharges}
                  </span>
                </div>
              </div>
            </div>
            <div className='credit-info'>
              <div className='credit-info-content'>
                <div id='credit-card-details'>Credit Card Details</div>
                <div id='PaymentForm'>
                  <Cards
                    cvc={CVC}
                    expiry={Expires}
                    focus={focus}
                    name={cardHolder}
                    number={cardNumber}
                    // focused={"cvc"}
                  />
                </div>
                Card Number
                <div className='cardnumberContainer'>
                  <input
                    pattern='[ 0-9\b]*'
                    id='CardNumber'
                    className='input-field'
                    name='cardNumber'
                    onChange={onChange}
                    onFocus={handleInputFocus}
                    value={cardNumber}
                    onKeyDown={CardNumber_format_alt}
                  />
                  <img
                    src={require(`../../../images/CreditCardSVG/${cardIcon}`)}
                    id='CreditCardIcon'
                  />
                  <div id='cardNumberInavalid' style={{ display: "none" }}>
                    Your Card Number is Invalid
                  </div>
                </div>
                Card Holder
                <input
                  pattern='[ a-zA-z\b]*'
                  className='input-field'
                  name='cardHolder'
                  onChange={onChange}
                  onFocus={handleInputFocus}
                  value={cardHolder}
                />
                <table className='half-input-table'>
                  <tr>
                    <td>
                      {" "}
                      Expires
                      <div id='ExpiresContainer'>
                        <input
                          pattern='^[\d]*[\/]?[\d]*$'
                          className='input-field'
                          name='Expires'
                          id='Expires'
                          onChange={onChange}
                          onFocus={handleInputFocus}
                          value={Expires}
                          onKeyDown={(e) => {
                            Expiry_format(e);
                            onChange(e);
                          }}
                          type='text'
                        />
                        <img
                          id='CalenderImage'
                          src={require("../../../images/Payment/calendar.svg")}
                        />
                      </div>
                    </td>
                    <td>
                      CVC
                      <input
                        id='CVC'
                        pattern={
                          CardBrand === "amex" ? `[0-9]{1,4}` : `[0-9]{1,3}`
                        }
                        className='input-field'
                        name='CVC'
                        onChange={onChange}
                        onFocus={(e) => handleInputFocus(e)}
                        value={
                          CardBrand !== "amex"
                            ? CVC.length === 4
                              ? CVC.substring(0, 3)
                              : CVC
                            : CVC
                        }
                        type='text'
                      />
                    </td>
                  </tr>
                </table>
                <button className='pay-btn' onClick={onSubmit} type='button'>
                  <img
                    src={require("../../../images/Payment/icons8-shopping-cart-30.png")}
                    style={{ width: "30px", height: "30px" }}
                  />
                  &nbsp; Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const MapStateToProps = (state) => ({
  Payment: state.Payment,
  GuideProfile: state.GuideProfile,
});
export default connect(MapStateToProps, { setPayment, ChargeCustomer })(
  Payment
);
