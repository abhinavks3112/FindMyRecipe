import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE } from '../action/types';

const INITIAL_STATE = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
};

const mealsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE: {
            const existingIndex = state.favouriteMeals.findIndex(
                (meal) => meal.id === action.payload
            );
            if (existingIndex >= 0) {
                const updatedFavMeal = [...state.favouriteMeals];
                updatedFavMeal.splice({ start: existingIndex, deleteCount: 1 });
                return { ...state, favouriteMeals: updatedFavMeal };
            }
            const mealToAdd = state.meals.find((meal) => meal.id === action.payload);
            return { ...state, favouriteMeals: state.favouriteMeals.concat(mealToAdd) };
        }
        default:
            return state;
    }
};

export default mealsReducer;
