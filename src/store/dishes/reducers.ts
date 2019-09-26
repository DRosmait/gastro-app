import { Reducer } from 'redux';

import dishes from '../../data/dishes';

import {
    DishState,
    DishActionTypes,
    DISH_ADD,
    DISH_REMOVE,
    DISH_EDIT,
} from './types';

const initialState: DishState = dishes.slice();

const dishReducer: Reducer<DishState, DishActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case DISH_ADD:
            return [ ...state, action.payload ];
        case DISH_REMOVE:
            return state.filter(({ id }) => id === action.id );
        case DISH_EDIT:
            return state.map(dish => {
                if (dish.id === action.id) {
                    return { ...dish, ...action.payload };
                }
                return dish;
            });
        default:
            return state;
    }
};

export default dishReducer;