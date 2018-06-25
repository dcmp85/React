import React from 'react';
import range from 'lodash/range';

const Numbers = (props) => {
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) => 
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
}

Numbers.list = range(1, 10);

export default Numbers;