import PropTypes from 'prop-types';
import {useState} from 'react';
import { getImagen } from './base-pruebas/11-async-await';

export const CounterApp = ({ value }) => {
     
    const [counter, setCounter] = useState(value);

    const addOne = () => {   
        
        getImagen();
        if(counter == 10) return;
        setCounter(counter + 1); 
    }

    const removeOne = () => { 
        setCounter(counter - 1) 
    }

    const resetOne = () => {
         setCounter(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={addOne}> +1 </button>
            <button aria-label='btn-less' onClick={removeOne}> -1 </button>
            <button onClick={resetOne}> Reset2 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}