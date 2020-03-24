import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors.js'
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';
import './checkout.styles.scss'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component.jsx';
const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-blocks'>
                <span>
                    Product
                </span>
            </div>
            <div className='header-blocks'>
                <span>
                    Description
                </span>
            </div>
            <div className='header-blocks'>
                <span>
                    Quantity
                </span>
            </div>
            <div className='header-blocks'>
                <span>
                    Price
                </span>
            </div>
            <div className='header-blocks'>
                <span>
                    Remove
                </span>
            </div>
        </div>
        {
            cartItems.map(
                cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }

        <div className='total'>
            <span>TOTAL : ${total}</span>
        </div>
        <StripeCheckoutButton price={total} />
        <div className='test-warning'>
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242 - exp : currentmonth/currentyear - CVV 123
        </div>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);