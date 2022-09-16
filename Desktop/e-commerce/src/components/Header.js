import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FiShoppingCart } from 'react-icons/fi';
// import Cart from './Cart';

export default function Header({ setIsOpen, isOpen }) {
  return (
    <header>
          <Row className='bg-dark'>
            
              <Col className='d-flex justify-content-center'>
                <h1 className='text-center text-light logo-header'>FUN.</h1>
              </Col>
              <Col className='d-flex align-items-center'>
               <Button onClick={() => setIsOpen(!isOpen)} className='bg-dark offset-8'><FiShoppingCart/></Button>
              </Col>
                   
          </Row>
          </header>
  )
}
