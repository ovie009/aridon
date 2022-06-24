import '../CSS/Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    return (  
        <nav className="navbar">
            <div className="navbar-wrapper">
                <Link to="/" className="logo">
                    aridon
                </Link>
                <button type="button" className='open-sidenav' onClick={handleSidebar}>
                    <ion-icon id="menu-icon" name="menu-outline"></ion-icon>
                </button>
            </div>
            <div className="sidebar" style={{
                top: `${sidebar ? '0vh' : '-100vh'}`
            }}>
                <div className="sidebar-wrapper">
                    <Link to="/" className="sidebar-logo">
                        aridon
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