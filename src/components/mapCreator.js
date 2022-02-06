import React from "react";
import { useDispatch } from 'react-redux';

import { useForm } from '../hooks/useForm';
import { setDimentions } from '../actions/map';


export const MapCreator = () => {
    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        width: 0, 
        heigth: 0
    });
    const { width, heigth } = formValues;

    const handleCreateMap = (e) => {
        e.preventDefault();
        dispatch( setDimentions(width, heigth) );
    };

    return(
        <div className="App">
            <form onSubmit={ handleCreateMap }>
                <input type="number" name='width' id='widthInput' value={ width.toString() } onChange={ handleInputChange }/>
                <input type="number" name='heigth' id='heigthInput' value={ heigth.toString() } onChange={ handleInputChange }/>
                <button type='submit'> Generar celdas </button>
            </form>
        </div>
    );
}