import '../CSS/Footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-form-wrapper">
                <p className="footer-preview">
                    ALREADY JOINED?
                </p>
                <h2 className="footer-heading">
                    Stay up-to-date with what we're doing
                </h2>
                <form>
                    <input type="email" name="email" id="email" placeholder='Enter your email address'/>
                    <button type="button" className="form-submit">Contact us</button>
                </form>
            </div>
            <div className="footer-base-wrapper">
                <ul className="footer-list">
                    <li className="footer-list-items">
                        <span className="footer-logo">
                            Aridon
                        </span>
                    </li>
                    <li className="footer-list-items">
                        PRODUCTS
                    </li>
                    <li className="footer-list-items">
                        ABOUT
                    </li>
                    <li className="footer-list-items">
                        CONTACT
                    </li>
                </ul>
                <ul className="socials-list">
                    <li className="footer-list-items">
                        <Link to='https://instagram.com/aridon_design?igshid=YmMyMTA2M2Y='>
                            <ion-icon id="facebook-icon" name="logo-instagram"></ion-icon>
                        </Link>
                    </li>
                    <li className="footer-list-items">
                        <Link to='https://wa.me/%2B2347061753946'>   
                            <ion-icon id="whatsapp-icon" name="logo-whatsapp"></ion-icon>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;