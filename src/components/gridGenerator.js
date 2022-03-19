import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { useForm } from '../hooks/useForm';
import { setDimentions, setGrid } from '../actions/map';
import { Cell } from "../class/Cell.class";
import { AlertBox } from "./alertBox";

import '../styles/gridGenerator.css';

export const GridGenerator = ( {nextStep} ) => {
    const dispatch = useDispatch();

    // Use Form methods
    const initialFormState = {
        columns: 0, 
        rows: 0
    };
    const [ formValues, handleInputChange ] = useForm(initialFormState);
    const { columns, rows } = formValues;

    const [errorMessage, setErrorMessage] = useState('');

    const generateGrid = () => {
        const grid = [];
        for(let row = 0; row < rows; row ++){
            grid.push([]);
            for(let col = 0; col < columns; col ++){
                grid[row].push(new Cell(row, col));
            }
        }
        return grid;
    }

    const validateForm = () => {
        if(columns <= 0 || rows <= 0){
            setErrorMessage('Dimentions can not be 0 or negatives');
            return false;
        }
        if(columns > 25 || rows > 25){
            setErrorMessage('Dimentions can not be greater than 25');
            return false;
        }
        return true;
    }

    const handleCreateMap = (e) => {
        e.preventDefault();
        const validForm = validateForm();
        if(validForm){
            const grid = generateGrid();
            dispatch( setDimentions(columns, rows) );
            dispatch( setGrid(grid) );
            nextStep(1);
        }
    };

    return(
        <>
            <div className="gridGenerator">
                <p>
                    Lets create an awesome world!! <br/ >
                    How big is this new world?
                </p>
                <form onSubmit={ handleCreateMap }>
                    <label htmlFor="columnsInput">Columns</label>
                    <input type="number" name='columns' id='columnsInput' value={ columns.toString() } onChange={ handleInputChange }/>
                    <label htmlFor="rowsInput">Rows</label>
                    <input type="number" name='rows' id='rowsInput' value={ rows.toString() } onChange={ handleInputChange }/>
                    <button type='submit'> Set world dimention </button>
                </form>
            </div>
            {
                (errorMessage !== '') && <AlertBox message={errorMessage} clearMessage={setErrorMessage}/>
            }
        </>
    );
}