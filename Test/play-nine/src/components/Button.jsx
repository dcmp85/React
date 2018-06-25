import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
    let button;
    switch(props.answerIsCorrect){
        case true:
            button = 
                <button type="button" className="btn btn-success" onClick={props.acceptAnswer}>
                    <FontAwesomeIcon icon="check" />
                </button>;
            break;
        case false:
            button = 
                <button type="button" className="btn btn-danger">
                    <FontAwesomeIcon icon="times" />
                </button>;
            break;
        default:
            button = 
                <button type="button" className="btn btn-primary" onClick={props.checkAnswer} disabled={props.selectedNumbers.length === 0}>
                    =
                </button>;
            break;
    }
    return (
        <div className="col-2">
            <div className="btn-group" role="group">
                {button}
                <button type="button" className="btn btn-warning" onClick={props.redraw}>
                    <FontAwesomeIcon icon="sync" />
                </button>
            </div>
        </div>
    );
}

export default Button;