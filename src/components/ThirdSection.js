import '../CSS/ThirdSection.css';
import bird from '../images/birds/humming-bird2.png';

const ThirdSection = () => {
    return (  
        <section className="third-section">
            <div className="third-section-image-wrapper">
            </div>
            <div className="third-section-text-wrapper">
                <h2 className="third-section-heading">
                    The Design
                    <span></span>
                    <img src={bird} alt="humming bird" id='third-bird'/>
                </h2>
                <p  className="third-section-paragraph">
                    We can gracefully hoist our flags as a power house in contemporary Nigerian design. 
                    Creating a piece that is completely customizable to suit different artistic taste.
                    Perfect as a functional kitchen art
                </p>
            </div>
        </section>
    );
}
 
export default ThirdSection;