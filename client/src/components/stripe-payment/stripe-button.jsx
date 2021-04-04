import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishalekey = "pk_test_51HYyfdJMfSOHTdDUg6ClG16nPHGQwev7bzYfwnokCEew5cNYw5CHwH77AkwlGSUomMkw7nw3YIPyBEYYMx5pVfif00mLcpVzCL";

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(res => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error))
      alert(
        'There was an issue processing your payment. Please make sure to use the provided credit card'
      )
    })
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='Splendor Luxeel'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishalekey}
    />
  )
}

export default StripeCheckoutButton