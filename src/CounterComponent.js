// CounterComponent
import React, { useState } from 'react';

const CounterComponent = ({ value }) => {
    const [count, setCount] = useState(value);

    const handleSubstract = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(value); // Reiniciar al valor inicial
    };

    return (
        <div>
            <h1>Valor del Contador: {count}</h1> {/* Cambiar a espa�ol */}
            <button onClick={handleSubstract}>Restar</button> {/* Cambiar a espa�ol */}
            <button onClick={handleReset}>Reiniciar</button> {/* Cambiar a espa�ol */}
        </div>
    );
};

export default CounterComponent;
