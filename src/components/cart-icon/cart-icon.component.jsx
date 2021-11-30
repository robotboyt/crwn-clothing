import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/card.action'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './card-icon.styles.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapSteteToProps = ({cart: {cartItems} }) => {
    console.log("i am being called");
    return({
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => 
    accumalatedQuantity + cartItem.quantity, 
    0 
    )
})
}

export default connect(mapSteteToProps, mapDispatchToProps)(CartIcon)