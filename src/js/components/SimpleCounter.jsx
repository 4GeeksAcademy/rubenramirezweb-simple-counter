import React from 'react';
import PropTypes from 'prop-types'

function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {

    return (
        <>
            <div className="bigCounter">
                <div className="calendar">
                    <i className="far fa-clock"></i>
                </div>
                <div className="four">{digitFour % 10}
                    <div className="hours">Hours</div>
                </div>
                <div className="three">{digitThree % 10}
                    <div className="minutes">Minutes</div>
                </div>
                <div className="two">{digitTwo % 10}
                    <div className="minutes">Minutes</div>
                </div>
                <div className="one">{digitOne % 10}
                    <div className="seconds">Seconds</div>
                </div>
            </div>
            <div className="Author">By RubenRamirezWeb</div>
        </>
    );
}

SimpleCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
}

export default SimpleCounter