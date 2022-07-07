import '../CSS/LeadSection.css';
import displayImage from '../images/display/display3.png';
import image1 from '../images/display/display3.png';
import orange from '../images/display/orange.png';
import { useState } from 'react';
import Gateway from './Gateway'; 

const LeadSection = () => {

    const [gateway, setGateway] = useState(false);

    const handleGateway = () => {
        setGateway(!gateway);
    }

    return ( 
        <section className="lead">
            { gateway && <Gateway handleGateway={handleGateway} />}
            <div className="lead-text-wrapper">
                <div className="product-details-wrapper">
                    <div className="product-text-wrapper">
                        <h1>
                            Urúkpé
                        </h1>
                        <p>
                            Urukpe is a custom chopping board with woven leather handle and adorned with art.
                            Crafted to be beautiful, functional and durable.
                        </p>
                    </div>
                    <button onClick={handleGateway} className='product-order'>Order Now</button>
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
                <div className="slider-wrapper">
                    <div className="slider">
                        <div className="slide">
                            <img src={image1} className="slide-image" alt="Urukpe Chopping Board"/>
                        </div>
                    </div>
                </div>
                <div className="lead-content-wrapper">
                    <div className="text-wrapper">
                        <h1 id='main-heading'>
                            Urúkpé
                        </h1>
                        <p>
                            Urukpe is a custom chopping board with woven leather handle and adorned with art.
                            Crafted to be beautiful, functional and durable.
                        </p>
                    </div>
                    <button onClick={handleGateway} className='order'>Order Now</button>
                </div>
            </div>
        </section>
    );
}
 
export default LeadSection;