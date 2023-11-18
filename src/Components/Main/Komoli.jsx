import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Card, Stack} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Komms.css';



import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBSwitch,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Unread(props,{addToFav,AddedCart}) {
  const [addFavorite,setFavorite]=useState(false)
  const [addedCart, SetAddedCart] = useState(false)
  function clickAddToFav(newFav){
    setFavorite(!addFavorite)
    props.addToFav(newFav)
    

  }
  function clickAddButton(newProd){
    SetAddedCart(!addedCart)
    props.addProdToCart(newProd)
  }
  
  
  return (
    <>
    <div className="MainContent">
        <Navbar className='mainHeader'>
      <Container>
        <Link to="/werdikt">
        <h3 href="#home" className="navtext">Блог рецептов  </h3>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Signed in as: <a href="#login">Mark Otto</a> */}
            <h3 className="navtext1">Вы Авторизированны</h3>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Card className='youuu'>
          <Card.Img variant="top" src='https://это-важно.рф/upload/iblock/267/59.jpg' className='photo'/>
          <Card.Body>
            <div className='yourr'>
            <Card.Title className='glavv'><h3>Оливье на Сметане</h3></Card.Title>
            </div>
            <Card.Text>
            <img className="img123" src={addFavorite ? 'https://cdn-icons-png.flaticon.com/128/2589/2589175.png' : 'https://cdn-icons-png.flaticon.com/128/2589/2589197.png'} onClick={()=> clickAddToFav({id:props.id,name:props.name,cost:props.cost,img:props.img}) } />
            </Card.Text>
          </Card.Body>
    </Card>
        
    <Card className="cardsfloat">
      <Card.Body className="textcards">Рецепт: Картофель - 5 шт.
Морковь - 1 шт. (крупная)
Огурцы солёные (бочковые) - 4-5 шт.
Горошек зеленый консервированный - 5-6 ст. л.
Колбаса вареная (докторская) - 200 г
Яйца - 4 шт.
Майонез - 150 г
Сметана - 50 г
Соль - по вкусу
Перец черный молотый - по вкусу
</Card.Body>
    </Card>
    <div className="container">
          <div className="row">
                <div className="form-group text-right" >
                  <Link to='/Komo'>
                      <Button variant="primary"  className="button1">Добавить Комментарий</Button>
                  </Link>
                </div>
            </div>
          </div>
    <div className="container1123">
      {/* <Link to="Download">
      <img src={addedCart ? 'https://cdn-icons-png.flaticon.com/128/1933/1933005.png' : 'https://cdn-icons-png.flaticon.com/128/1933/1933005.png'}  className ='telegram1'onClick={() => clickAddButton({id:props.id,name:props.name,cost:props.cost,img:props.img})} />
      </Link> */}
    </div>
    </div>
    </>
  );
}
<script src="Comment.js"></script>