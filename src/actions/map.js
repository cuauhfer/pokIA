import { types } from '../types/types';

export const setDimentions = (width, height) => {
    return {
        type: types.setDimentions,
        payload: {
            width,
            height
        }
    }
}