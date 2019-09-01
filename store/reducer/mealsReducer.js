import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE, SET_FILTERS } from '../action/types';

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
        case SET_FILTERS: {
            const apliedFilters = action.payload;
            const filteredMeals = state.meals.filter((meal) => {
                if (apliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (apliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (apliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                if (apliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals };
        }
        default:
            return state;
    }
};

export default mealsReducer;
