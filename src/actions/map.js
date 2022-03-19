import { types } from '../types/types';

export const setDimentions = (columns, rows) => {
    return {
        type: types.setDimentions,
        payload: {
            columns,
            rows
        }
    }
}

export const setGrid = (grid) => {
    return {
        type: types.setGrid,
        payload: {
            grid
        }
    }
}