import './NavBar.css';
import logo from './logo-blanco.webp';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <ul className="left">
            <img src={logo} width="80px" alt="SkinCare" />
            <li className="brand-logo">SkinCare</li>
          </ul>
          <ul className="right">
              <li>Rostro</li>
              <li>Labios</li>
              <li>Cabello</li>
              <li><CartWidget/></li>
          </ul>
          
        </div>
    </nav>
    </div>
  );
};

export default NavBar;