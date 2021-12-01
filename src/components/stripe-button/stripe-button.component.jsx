import React  from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51K1uHBLwxMrjSdvUnNAeuFHNHbLuvmmHR7Ns344a6BlLa8SMj3XAyLTg33Vxtc0DgHyIwd5sDeRQmCnJX4jxXzEP004OIoaxbV"
    
    const onToken = token => {
        console.log(token);
        alert("Payment Succesful")
    }

    return(
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://www.svgrepo.com/show/113164/credit-card.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton