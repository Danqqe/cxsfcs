import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button,Card} from 'react-bootstrap';
import Header from './Components/Header/Header';
import "./index.css"
import AllCards from './Components/Main/AllCards';
import Footer from './Components/Main/Footer';
import { Route,Routes, BrowserRouter as Router,} from 'react-router-dom';
import Komms from './Components/Main/Komms';
import Download from './Components/Main/Download';
import Vxod from './Components/Main/Vxod';
import Werdikt from './Components/Main/Werdikt'
import Kompirog from './Components/Main/Kompirog';
import Kompasta from './Components/Main/Kompasta';
import Komsup from './Components/Main/Komsup';
import Komlaz from './Components/Main/Komlaz';
import Komoli from './Components/Main/Komoli';
import Komtir from './Components/Main/Komtir';
import Komp from './Components/Main/Komp';
import Komb from './Components/Main/Komb';
import Koml from './Components/Main/Koml';
import Komo from './Components/Main/Komo';
import Komt from './Components/Main/Komt';
import Kompp from './Components/Main/Kompp';
import Kombb from './Components/Main/Kombb';
import Komll from './Components/Main/Komll';
import Komoo from './Components/Main/Komoo';
import Komtt from './Components/Main/Komtt';


function App() {
  const[favor,setFavor]=useState([])
  const [cart,setCart]=useState([])
  function addToFav(newFav){
    let alreadyAdded1 = false
    for (let b = 0; b < favor.length; b++) {
      if (favor[b]['id'] === newFav.id) {
          alreadyAdded1 = true
      }
    }
    if (!alreadyAdded1) {
      setFavor(prev => [...prev, newFav])
  }
  else {
      setFavor(favor.filter(p => p.id !== newFav.id));
  }

  }
  function addProdToCart(newProd){
    
    let alreadyAdded = false
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]['id'] === newProd.id) {
          alreadyAdded = true
      }
    }
    if (!alreadyAdded) {
      setCart(prev => [...prev, newProd])
    } 
    else {
      setCart(cart.filter(p => p.id !== newProd.id));
    }

    
  }
  
  
  

  return(
  <>
  {/* <Header /> */}
  
  {/* <Komms/> */}
  {/* <Download/> */}
  
  <Routes>
  <Route path='/' element={<AllCards/>}></Route>
  {/* <Route path="/" element={<AllCards/>}></Route> */}
  <Route path="/komms" element={<Komms />}></Route>
  <Route path="/komms/download" element={<Download/>}></Route>
  <Route path='/vxod' element={< Vxod/>}></Route>
  <Route path="/werdikt" element={<Werdikt/>}></Route>
  <Route path='/kompirog' element={<Kompirog/>}></Route>
  <Route path='kompasta' element={<Kompasta/>}></Route>
  <Route path='komsup' element={<Komsup/>}></Route>
  <Route path='komlaz' element={<Komlaz/>}></Route>
  <Route path='komoli' element={<Komoli/>}></Route>
  <Route path='komtir' element={<Komtir/>}></Route>
  <Route path='download' element={<Download/>}></Route>
  <Route path='komp' element={<Komp/>}></Route>
  <Route path='komb' element={<Komb/>}></Route>
  <Route path='koml' element={<Koml/>}></Route>
  <Route path='komo' element={<Komo/>}></Route>
  <Route path='komt' element={<Komt/>}></Route>
  <Route path='kompp' element={<Kompp/>}></Route>
  <Route path='kombb' element={<Kombb/>}></Route>
  <Route path='komll' element={<Komll/>}></Route>
  <Route path='komoo' element={<Komoo/>}></Route>
  <Route path='komtt' element={<Komtt/>}></Route>
  </Routes> 
  <Footer/>
  
  
    </>
  )
  ;

}

export default App;
