import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


// index.css'
import '../styles/index.css'

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));


setInterval(() => {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
    

    root.render(
        <React.StrictMode>
                <Home />
        </React.StrictMode>
    );

}, 1000);




