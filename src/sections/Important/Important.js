import React from 'react';
import './Important.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamation} from '@fortawesome/free-solid-svg-icons';

const Important = () => {
    return (
        <section className="important-card-container">
            <div className="important-title-container">
                <h4>IMPORTANT</h4>
            </div>
            <div className="important-img">
                <FontAwesomeIcon icon={faExclamation}/>
            </div>
            <div className="important-content">
                <h3>Tax report</h3>
                <p>Prepare your yearly tax report.</p>
            </div>
        </section>
    )
}

export default Important;