import React from 'react';
import './index.css';  // Aseg�rate de importar el CSS
import CounterComponent from './CounterComponent';

function App() {
    return (
        <div className="App">
            <CounterComponent value={10} />
        </div>
    );
}

export default App;

