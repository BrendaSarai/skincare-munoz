import './NavBar.css';
import logo from './logo-blanco.webp';
const NavBar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <ul class="left">
            <img src={logo} width="80px" alt="SkinCare" />
            <li class="brand-logo">SkinCare</li>
          </ul>
          <ul class="right">
              <li>Rostro</li>
              <li>Cuerpo</li>
              <li>Cabello</li>
          </ul>
          
        </div>
    </nav>
    </div>
  );
};

export default NavBar;