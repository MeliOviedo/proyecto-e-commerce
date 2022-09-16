import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';

export default function Cards({product, productSearch}) {
  
  const [cart, setCart]= useContext(CartContext);

  function addToCart(e){
    const addedProduct= productSearch(e.target.id);
    setCart([...cart, addedProduct]);
    showAlert();
  }
  function showAlert(){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto añadido al carrito :)',
            showConfirmButton: false,
            timer: 1500
          });
  }
  return (
    <Col sm={6} style={{ width: '15rem' }} className='d-flex justify-content-between align-content-between flex-wrap'>
        <Card className="py-3">
        <Card.Img variant="bottom" className="img-fluid img-size" src={product.image} />
        <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="dark" onClick={addToCart} id={product.id}>
        Comprar</Button>
        </Card.Body>
        </Card>
    </Col>
  )
}
