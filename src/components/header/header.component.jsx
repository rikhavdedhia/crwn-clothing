import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crwn.svg';
import {auth} from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import {selectCurrentUSer} from '../../redux/user/user.selector.js'
import {selectCartHidden} from '../../redux/cart/cart.selectors.js'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo-container' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {/* <Link className='shop' to='/shop'>
                
            </Link> */}
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>:
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUSer,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);