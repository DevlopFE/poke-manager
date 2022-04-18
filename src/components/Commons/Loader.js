import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Loader({large = false}) {
    return (
        <div className="container">
            <div className="loading"><FontAwesomeIcon icon={faSpinner} spin />{ large && ' Loading...' }</div>
        </div>
    )
}

export default Loader
