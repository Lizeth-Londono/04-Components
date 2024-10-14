import React from 'react';
import './index.css';  // Se importa el CSS
import CounterComponent from './CounterComponent';

function App() {
    return (
        <div className="App">
            <CounterComponent value={10} />
        </div>
    );
}

export default App;

