import "./Header.css"
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className="MainContent">
    <Navbar className='mainHeader'>
      <Container>
        <h3 href="#home" className="navtext">Блог рецептов  </h3>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header
