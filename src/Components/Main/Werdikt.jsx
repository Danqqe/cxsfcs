import {Card, Stack} from 'react-bootstrap';
import './AllCards.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';


function AllCards(props,{addToFav}) {
  const [addFavorite,setFavorite]=useState(false)
  function clickAddToFav(newFav){
    setFavorite(!addFavorite)
    props.addToFav(newFav)
    

  }
  
    return (
    <>
    
        <div className="MainContent">
        <Navbar className='mainHeader'>
      <Container>
        <h3 href="#home" className="navtext">Блог рецептов  </h3>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Signed in as: <a href="#login">Mark Otto</a> */}
            <h3 className="navtext1">Вы Авторизированны</h3>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div className='MainContent'>
          <h2 className='textofglav'>Наши рецепты</h2>
    <br></br>  
      <CardGroup >
        <Card className='you'>
          <Card.Img variant="top" src='https://w.forfun.com/fetch/24/24b55ad18e660908f00cdcefe9a84a9c.jpeg' className='photo'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Пирог с Клубникой</Card.Title>
            </div>
            <Card.Text>
            <Link to="/Kompirog">
              <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img2' />
            </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='you'>
          <Card.Img variant="top" src='https://avatars.dzeninfra.ru/get-zen_doc/9759668/pub_645541f832e3665fb212d146_64554346f20fcc6a45ddc5cd/scale_1200'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Паста Карбонара</Card.Title>
            </div>
            <Card.Text>
              <Link to="/Kompasta">
                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img2'></img>
                </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='you'>
          <Card.Img variant="top" src='https://sizo-11-noginsk.fsin-marketplace.ru/upload/iblock/4a0/33hav8pylaka3zitarmui4eai1ms2473.jpg'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Борщ </Card.Title>
            </div>
            <Card.Text>
              <Link to="/komsup">
                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img2'></img>
                </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup >
      <CardGroup className='group'>
        <Card className='you'>
          <Card.Img variant="top" src='https://w.forfun.com/fetch/f4/f444456806e8d31b42c8591037405c37.jpeg'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Лазанья с Говядиной</Card.Title>
            </div>
            <Card.Text>
              <Link to="/komlaz">
                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img2'></img>
                </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='you'>
          <Card.Img variant="top" src='https://это-важно.рф/upload/iblock/267/59.jpg'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Оливье на Сметане</Card.Title>
            </div>
            <Card.Text>
              <Link to="/Komoli">
                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img2'></img>
                </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='you'>
          <Card.Img variant="top" src='http://klublady.ru/uploads/posts/2022-02/1644978651_1-klublady-ru-p-tort-tiramisu-foto-1.jpg'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Тирамису </Card.Title>
            </div>
            <Card.Text>
              <Link to="/komtir">
                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img2'></img>
                </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
      
      
      </>
    )
  }
  
  export default AllCards;