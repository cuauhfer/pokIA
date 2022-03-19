import { types } from '../types/types';

const initialMap = {
    columns: 0,
    rows: 0,
    grid: []
}

export const mapReducer = (state = initialMap, action) => {
    switch (action.type) {
        case types.setGrid:
            return {
                ...state,
                grid: action.payload.grid
            }
        case types.setDimentions:
            return {
                columns: action.payload.columns,
                rows: action.payload.rows,
                grid: []
            }
        case types.deleteMap:
            return initialMap;
        default:
            return state;
    }
}