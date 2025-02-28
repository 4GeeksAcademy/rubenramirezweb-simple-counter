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

    root.render(
        <React.StrictMode>
                <Home />
        </React.StrictMode>
    );





