import React, { useState, useEffect } from 'react';
import SimpleCounter from './SimpleCounter';
import PropTypes from 'prop-types';

function Home() {
    const [counter, setCounter] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 100);
        }

        // Limpiar el intervalo
        return () => clearInterval(timer);
    }, [isActive]);

    // Función para iniciar el contador
    const startCounter = () => {
        setIsActive(true);
    };

    // Función para pausar el contador
    const pauseCounter = () => {
        setIsActive(false);
    };

    // Función para continuar el contador
    const continueCounter = () => {
        setIsActive(true);
    };

    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;

    return (
        <div className="text-center">
            <SimpleCounter 
                digitOne={one} 
                digitTwo={two} 
                digitThree={three} 
                digitFour={four} 
            />
            <div className="mt-4">
                <button className="btn btn-success me-2" onClick={startCounter}>Iniciar</button>
                <button className="btn btn-warning me-2" onClick={pauseCounter}>Pausar</button>
                <button className="btn btn-primary" onClick={continueCounter}>Continuar</button>
            </div>
        </div>
    );
}

Home.propTypes = {
    startFrom: PropTypes.number.isRequired
};

export default Home;
