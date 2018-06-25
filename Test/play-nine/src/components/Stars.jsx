import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import range from 'lodash/range';
import './Stars.css'

const Stars = (props) => {
    return (
        <div className="col-5">
            {range(props.numberOfStars).map(i => 
                <FontAwesomeIcon key={i} icon="star" />
            )}
        </div>
    );
}

export default Stars;