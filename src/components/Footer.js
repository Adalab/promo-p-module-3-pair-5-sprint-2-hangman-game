import { NavLink } from 'react-router-dom';
import '../styles/components/Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <nav>
        <ul>
          <li className='footer__menu-item'>
            <NavLink
              className={`footer__menu-link ${(isActive) =>
                'active' + (!isActive ? ' unselected' : '')}`}
              to='/'
            >
              A jugar
            </NavLink>
          </li>
          <li className='footer__menu-item'>
            <NavLink
              className={`footer__menu-link ${(isActive) =>
                'active' + (!isActive ? ' unselected' : '')}`}
              to='/instructions'
            >
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className='footer__menu-item'>
            <NavLink
              className={`footer__menu-link ${(isActive) =>
                'active' + (!isActive ? ' unselected' : '')}`}
              to='/options'
            >
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className='footer__copy'>© Adalab</small>
    </footer>
  );
}

export default Footer;
