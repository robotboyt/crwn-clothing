import { createContext } from "react";

const CartContext = createContext({
    hidde: true,
    toggleHidden: () => {}
})

export default CartContext