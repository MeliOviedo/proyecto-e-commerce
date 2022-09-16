import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getProducts } from '../firebase';
import Cards from './Cards';
import Header from './Header';
import Cart from './Cart';
import CartProvider from '../context/CartContext';


// import { BrowserRouter } from "react-router-dom";

function Products() {
  const [products, setProducts]= useState ([]);
  const [isOpen, setIsOpen] = useState(false);
  
  function productSearch (id){
    const productFound= products.find(product => product.id ===id);
    return productFound;
  }

  async function waitProducts(){
    const dbProducts = await getProducts();
    setProducts(dbProducts);
  }

  useEffect(() => {
    waitProducts();
  }, []);

  return (
    <CartProvider>
    <>
      <Container fluid>
          <Header setIsOpen={setIsOpen} isOpen={isOpen}/>
          <Row xs={6} md={3}  className=' mt-5 mx-5'>
            {products.map(product => <Cards product={product} key={product.id} productSearch={productSearch}/>)}
          </Row>
      </Container>
      <Cart isOpen={isOpen}/>
    </>
    </CartProvider>
      );
}

export default Products;

