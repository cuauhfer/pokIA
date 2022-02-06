import { types } from '../types/types';

const initialMap = {
    width: 0,
    height: 0,
    cells: []
}

export const mapReducer = (state = initialMap, action) => {
    switch (action.type) {
        case types.saveMap:
            return {
                width: action.payload.width,
                height: action.payload.height,
                cells: action.payload.cells
            }
        case types.setDimentions:
            return {
                width: action.payload.width,
                height: action.payload.height,
                cells: []
            }
        case types.deleteMap:
            return initialMap;
        default:
            return state;
    }
}