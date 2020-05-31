import React from "react";

const loadStripe = () => {
  if (!window.document.getElementById("stripe-script")) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://js.stripe.com/v2/";
    s.onload = () => {
      window["Stripe"].setPublishableKey(
        "pk_test_E4kJlHrPZzpKcJzBXxf1KywE00ItkELuMe"
      );
    };
    window.document.body.appendChild(s);
  }

  return window.Stripe;
};

export default loadStripe;
