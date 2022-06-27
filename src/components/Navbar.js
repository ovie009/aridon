import '../CSS/Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../images/logo/logo-light.png';
import logoDark from '../images/logo/logo-dark.png';


const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    return (  
        <nav className="navbar">
            <div className="navbar-wrapper">
                <Link to="/" className="logo">
                    <img src={logoLight} alt="Aridon log" className='light-logo' />
                    <img src={logoDark} alt="Aridon log" className='dark-logo' />
                </Link>
                <button type="button" className='open-sidenav' onClick={handleSidebar}>
                    <ion-icon id="menu-icon" name="menu-outline"></ion-icon>
                </button>
                <ul className="navlist">
                    <li className="navlist-items">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="navlist-items">
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className="navlist-items">
                        <Link to='/conatacts'>contacts</Link>
                    </li>
                    <li className="navlist-items">
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar" style={{
                top: `${sidebar ? '0vh' : '-100vh'}`
            }}>
                <div className="sidebar-wrapper">
                    <Link to="/" className="sidebar-logo">
                        <img src={logoLight} alt="Aridon log" className='light-logo' />
                    </Link>
                    <button type="button" className='close-sidebar' onClick={handleSidebar}>
                        <ion-icon id="close-icon" name="close-outline"></ion-icon>
                    </button>
                </div>
                <ul className='sidebar-list'>
                    <li className="sidebar-list-items">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="sidebar-list-items">
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className="sidebar-list-items">
                        <Link to='/conatacts'>contacts</Link>
                    </li>
                    <li className="sidebar-list-items">
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;