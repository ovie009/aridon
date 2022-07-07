import '../CSS/Gateway.css';
import { useState } from 'react';

const Gateway = ({handleGateway}) => {

    const [customized, setCustomized] = useState(false);

    const handleCustomized = () => {
        setCustomized(!customized);
    }

    return (
        <div className="gateway">
            <div className="close-gateway-wrapper">
                <button type="button" onClick={handleGateway}>
                    <ion-icon id="close-icon" name="close-outline"></ion-icon>
                </button>
            </div>
            <div className="gateway-wrapper">
                <h3>Proceed to Payment Page</h3>
                <p>
                    Click on "make payment" to proceed to payment page
                </p>
                <p className='customize-notice'> 
                    *click on the check box below to order for the a customized version
                </p>
                <div className="customize-wrapper">
                    <input type="checkbox" name="customize" id="customize" onClick={handleCustomized} />
                    <label htmlFor="customize">customized?</label>
                </div>
                { customized ? 
                    <a className="proceed-payment" href='https://paystack.com/pay/customized-urukpe'>Make Payment</a>
                    : 
                    <a className="proceed-payment" href='https://paystack.com/pay/urukpe'>Make Payment</a>
                }
            </div>
        </div>
    );
}
 
export default Gateway;