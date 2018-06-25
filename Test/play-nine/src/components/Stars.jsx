import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import range from 'lodash/range';
import './Stars.css'

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);

    return (
        <div className="col-5">
            {range(numberOfStars).map(i => 
                <FontAwesomeIcon key={i} icon="star" />
            )}
        </div>
    );
}

export default Stars;