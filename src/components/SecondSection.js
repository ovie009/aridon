import '../CSS/SecondSection.css';
import secondBird from '../images/birds/humming-bird1.png';
import motif from '../images/motifs/motif2.png';

const SecondSection = () => {
    return (  
        <section className="second-section">
            <div className="second-section-image-wrapper">
            </div>
            <div className="second-section-text-wrapper">
                <h2 className="second-section-heading">
                    About Urúkpé
                    <span></span>
                    <img src={secondBird} alt="humming bird" id="second-bird"/>
                </h2>
                <p  className="second-section-paragraph">
                    As our first product, Urúkpé is significant and inspiring to us.
                    Venturing into the dark unknown caves of creativity, we at ARIDÓN needed a light(Urúkpé) to guide our wild willing legs to a place of ceaseless wonders; 
                    soothing warmth and swe'tened scents.
                </p>
                <div className="motif">
                    <img src={motif} alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default SecondSection;