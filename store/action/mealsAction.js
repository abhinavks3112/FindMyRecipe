import { TOGGLE_FAVOURITE } from './types';

export const toggleFavourite = (mealId) => ({
        type: TOGGLE_FAVOURITE,
        payload: mealId
});
