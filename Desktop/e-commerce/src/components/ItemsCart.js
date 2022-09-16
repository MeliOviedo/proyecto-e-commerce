import React, { useEffect, useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';

export default function ItemsCart({deleteProduct}) {

  const [cart, setCart]= useContext(CartContext);
  const [total, setTotal]= useState(0);

  function getTotal(){
    cart.forEach(item => setTotal(total + item.price));
  }

  useEffect(() => {
    getTotal();
  }, [cart]);

  
function removeCartShopping(e) {
  const deleteCart = cart.indexOf(e.target.value)
  cart.splice(0, cart.length);
  setCart(deleteCart);
  showAlert();
}

function showAlert(){
    Swal.fire(
      'COMPRA EXITOSA!',
      'Gracias por tu compra!',
      'success'
    );
}
function removeCart(e) {
  const deleteCart = cart.indexOf(e.target.value)
  cart.splice(0, cart.length);
  setCart(deleteCart);
  showAlertDelete();
}
  function showAlertDelete(){
        Swal.fire(
          'Carrito vacío!',
          'Tu carrito de compras ha sido eliminado.',
          'warning'
        );
}

  return (
    <Container fluid>
        <Row className='mt-3'>
            <h2>Tu carrito de compras</h2>
            <h3 className='text-center'>Subtotal : $ {total}</h3>
        </Row>
        {cart.map(item => {
        return(
            <Row key={item.name} className='mt-3 border-bottom py-3 d-flex justify-content-center'>
                <img src={item.image} alt={item.name} className='col-4'></img>
                <div>
                <p className='text-light'>{item.name}</p>
                <p className='text-light'>${item.price}</p>
                </div>
                <Button variant='danger' className='col-1 offset-2' onClick={() => deleteProduct(item.name)}>X</Button>
            </Row>
        );
        })}
        <Row className='mt-3 d-flex justify-content-center'>
            <Button className='col-6' onClick={removeCartShopping}>Finalizar compra</Button>
        </Row>
        <Row className='mt-3 d-flex justify-content-center'>
            <Button className='col-6' onClick={removeCart}>Vaciar carrito</Button>
        </Row>
    </Container>
  )
}
