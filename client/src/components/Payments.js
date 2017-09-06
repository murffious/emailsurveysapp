import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends Component {
  
  render() {
    // Also use fro stripe key process.env.REACT_APP_STRIPE_KEY
    const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    // use live key if going live 
    ? 'pk_test_4B4s8op5y7UbFFmNrG7IoLGi'
    : 'pk_test_4B4s8op5y7UbFFmNrG7IoLGi';
    
    return (
      <StripeCheckout
        name="Bright Ideas"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={STRIPE_PUBLISHABLE}
        
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);