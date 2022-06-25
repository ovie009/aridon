import '../CSS/LeadSection.css';
import {Link} from 'react-router-dom';
import displayImage from '../images/display/display3.png';
import image1 from '../images/display/display1.png';
import image2 from '../images/display/display2.png';
import image3 from '../images/display/display3.png';
import image4 from '../images/display/display4.png';
import image5 from '../images/display/display5.png';
import orange from '../images/display/orange.png';
 
const LeadSection = () => {

    return ( 
        <section className="lead">
            <div className="lead-text-wrapper">
                <div className="product-details-wrapper">
                    <div className="product-text-wrapper">
                        <h1>
                            Urukpe
                        </h1>
                        <p>
                            Urukpe is a custom chopping board with woven leather handle and adorned with art.
                            Crafted to be beautiful, functional and durable.
                        </p>
                    </div>
                    <Link to='/' className='product-order'>Order Now</Link>
                </div>
                <div className="preview-details-wrapper">
                    <span className='preview-text'>Ceaseless Wonders</span>
                </div>
                <div className="display-image">
                    <img src={displayImage} alt="" id='displayed-image' />
                </div>
                <img src={orange} alt="slice of orange" className='orange' />
            </div>
            <div className="slide-container">
                <div className="slider">
                    <div className="slide">
                        <img src={image1} className="slide-image" alt="Urukpe Chopping Board"/>
                    </div>
                    <div className="slide">
                        <img src={image2} className="slide-image" alt="Urukpe Chopping Board"/>
                    </div>
                    <div className="slide">
                        <img src={image3} className="slide-image" alt="Urukpe Chopping Board"/>
                    </div>
                    <div className="slide">
                        <img src={image4} className="slide-image" alt="Urukpe Chopping Board"/>
                    </div>
                    <div className="slide">
                        <img src={image5} className="slide-image" alt="Urukpe Chopping Board"/>
                    </div>
                </div>
                <div className="lead-content-wrapper">
                    <div className="text-wrapper">
                        <h1>
                            Urukpe
                        </h1>
                        <p>
                            Urukpe is a custom chopping board with woven leather handle and adorned with art.
                            Crafted to be beautiful, functional and durable.
                        </p>
                    </div>
                    <Link to='/' className='order'>Order Now</Link>
                </div>
            </div>
        </section>
    );
}
 
export default LeadSection;