import '../CSS/LeadSection.css';
import {Link} from 'react-router-dom';
 
const LeadSection = () => {

    return ( 
        <section className="lead">
            <div className="slide-container">
                <div className="slider">
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                </div>
                <div className="lead-content-wrapper">
                    <div className="text-wrapper">
                        <h1>
                            Order Urukpe
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