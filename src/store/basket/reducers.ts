import { Reducer } from 'redux';

import {
    BasketState,
    BASKET_ADD,
    BASKET_REMOVE,
    BASKET_REDUCE,
    BasketActionTypes,
} from './types';

const initialState: BasketState = [];

const basketReducer: Reducer<BasketState, BasketActionTypes> = (state = initialState, action): BasketState => {
    console.log(action.type);

    switch (action.type) {
        case BASKET_ADD:
            console.log('add');
            if (state.some(({ id }) => id === action.payload.id)) {
                return state.map(bItm => {
                    if (bItm.id === action.payload.id) {
                        return { ...bItm, ...{ amount: bItm.amount + 1} };
                    }
                    return bItm;
                });
            }
            return [ ...state, action.payload ];
        case BASKET_REMOVE:
            console.log('remove');
            return state.filter(bItm => action.id !== bItm.id);
        case BASKET_REDUCE:
            console.log('reduce');
            return state.map(bItm => {
                if (bItm.id === action.id) {
                    return { ...bItm, amount: bItm.amount - 1 };
                }
                return bItm;
            });
        default:
            return state;
    }
};

export default basketReducer;