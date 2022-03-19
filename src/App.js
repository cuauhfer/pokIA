import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { store } from './store/store';
import { MapCreator } from './components/mapCreator';

import './App.css';

function App() {
    return (
        <Provider store = { store }>
            <Router>
                <div className='mainContainer'>
                    <nav className='navMenu'>
                        <ul>
                            <li>
                                <Link to='/map'><i className="fas fa-map-marked-alt"></i> Map</Link>
                            </li>
                            <li>
                                <Link to='/character'><i className="fas fa-dragon"></i> Character</Link>
                            </li>
                            <li>
                                <Link to='/game'><i className="fas fa-gamepad"></i> Game</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/map" element={ <MapCreator/> } />
                        <Route path="/character" />
                        <Route path="/game" />
                        <Route path="/" element={ <MapCreator /> } />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
