import React, { useState, useEffect } from 'react';
import SimpleCounter from './SimpleCounter';
import PropTypes from 'prop-types';

function CountdownTimer({ startFrom }) {
    const [counter, setCounter] = useState(startFrom);

    useEffect(() => {
        if (counter > 0) {
            const timer = setInterval(() => {
                setCounter(prevCounter => prevCounter - 1);
            }, 10);

            // Limpiar el intervalo cuando el componente se desmonte
            return () => clearInterval(timer);
        }
    }, [counter]);

    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;

    return (
        <div className={`bigCounter ${counter === 0 ? 'zero' : ''}`}>
            <SimpleCounter 
                digitOne={one} 
                digitTwo={two} 
                digitThree={three} 
                digitFour={four} 
            />
        </div>
    );
}

CountdownTimer.propTypes = {
    startFrom: PropTypes.number.isRequired
}

export default CountdownTimer;
