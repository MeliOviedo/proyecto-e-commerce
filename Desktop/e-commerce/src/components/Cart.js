import React, {useContext} from 'react'
import { motion} from 'framer-motion/dist/framer-motion';
import NoItemsCart from './NoItemsCart';
import ItemsCart from './ItemsCart';
import { CartContext } from '../context/CartContext';

export default function Cart({isOpen}) {

  const [cart, setCart]= useContext(CartContext);

  const variants = {
    open: { opacity: 1, x: "35vw"},
    closed: { opacity: 0, x: "-35vw" },
  }
  function deleteProduct(name){
    const removeCart = cart.filter(item => item.name !== name);
    setCart(removeCart);
  }
  return (
  <>
  <motion.div className="visualCart"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{bounce:0}}
  >
    {cart.length > 0 ? <ItemsCart deleteProduct={deleteProduct}/> : <NoItemsCart/>}
  </motion.div>
  </>
  )
}
