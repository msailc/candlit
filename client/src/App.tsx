// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
            <Footer />
        </div>
    );
}

export default App;
