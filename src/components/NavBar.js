import { NavItems } from './NavItems';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h1 className='nav-logo'>Bakery <i className='fa-solid fa-cupcake' /></h1>
      <div className='nav-icon'>

      </div>
      <ul>
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;