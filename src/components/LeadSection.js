import '../CSS/LeadSection.css';
import image1 from '../images/mobile/001.jpg';
import image2 from '../images/mobile/002.jpg';
import image3 from '../images/mobile/003.jpg';
import image4 from '../images/mobile/004.jpg';
import image5 from '../images/mobile/005.jpg';
import {Link} from 'react-router-dom';
 
const LeadSection = () => {

    return ( 
        <section className="lead">
            <div className="slide-container">
                <div className="slider">
                    <div className="slide">
                        <img src={image1} alt="" className="slide-image" />
                    </div>
                    <div className="slide">
                        <img src={image2} alt="" className="slide-image" />
                    </div>
                    <div className="slide">
                        <img src={image3} alt="" className="slide-image" />
                    </div>
                    <div className="slide">
                        <img src={image4} alt="" className="slide-image" />
                    </div>
                    <div className="slide">
                        <img src={image5} alt="" className="slide-image" />
                    </div>
                </div>
                <div className="lead-content-wrapper">
                    <div className="text-wrapper">
                        <h1>
                            Order Urkpe
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