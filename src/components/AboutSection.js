import '../CSS/AboutSection.css';
import bird from '../images/birds/humming-bird1.png';

const AboutSection = () => {
    return (  
        <section className="about-section">
            <div className="about-section-image-wrapper">
            </div>
            <div className="about-section-text-wrapper">
                <h2 className="about-section-heading">
                    About Aridón
                    <span></span>
                    <img src={bird} alt="humming bird" id="about-bird"/>
                </h2>
                <p  className="about-section-paragraph">
                    Aridon is a contemporary yet traditional design studio working across product design Interior. 
                    Blending together patience, perfection and the pursuit of beauty to create sustainable design.
                </p>
            </div>
        </section>
    );
}
 
export default AboutSection;