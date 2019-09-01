import { TOGGLE_FAVOURITE, SET_FILTERS } from './types';

export const toggleFavourite = (mealId) => ({
        type: TOGGLE_FAVOURITE,
        payload: mealId
});

export const setFilters = (filterSettings) => ({
        type: SET_FILTERS,
        payload: filterSettings
});
