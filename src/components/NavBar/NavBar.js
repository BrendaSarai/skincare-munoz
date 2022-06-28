import './NavBar.css';
import logo from './logo-blanco.webp';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
              <li className='pag'><CartWidget/></li>
          </ul>
          
        </div>
    </nav>
    </div>
  );
};

export default NavBar;