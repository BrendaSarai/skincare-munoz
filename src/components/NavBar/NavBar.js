import './NavBar.css';
import logo from './logo-blanco.webp';
import CartWidget from '../CartWidget/CartWidget';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const NavBar = () => {
  const { totalProducts } = useContext(CartContext);
  let n = totalProducts();
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <ul className="left">
            <img src={logo} width="80px" alt="SkinCare" />
            <Link to='/' className="brand-logo">SkinCare</Link>
          </ul>
          <ul className="right">
              <Link to="category/lipstick" className='pag'>Labiales</Link>
              <Link to="category/powder" className='pag'>Maquillaje</Link>
              <Link to="category/highlighter" className='pag'>Iluminadores</Link>
              <Link to="cart/"><CartWidget/></Link>
          </ul>
          
        </div>
    </nav>
    </div>
  );
};

export default NavBar;