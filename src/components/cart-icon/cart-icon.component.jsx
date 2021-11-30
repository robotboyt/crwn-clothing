import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/card.action'
import { selectCartItemCount } from '../../redux/cart/cart.selector'

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

const mapSteteToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapSteteToProps, mapDispatchToProps)(CartIcon)