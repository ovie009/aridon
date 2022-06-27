import '../CSS/ThirdSection.css';
import bird from '../images/birds/humming-bird2.png';
import motif from '../images/motifs/motif3.png';

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
                    Designing URÚKPÉ was born out of the need to make simple everyday product unique. 
                    The Idea that functional kitchen accessories can be Graceful, Combining Form, Fun and Function,  URÚKPÉ was crafted to be beautiful and durable.
                    <br />
                    A perfect fit for every cooking space
                </p>
                <div className="motif">
                    <img src={motif} alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default ThirdSection;