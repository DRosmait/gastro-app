import {
    BASKET_ADD,
    BASKET_REMOVE,
    BasketActionTypes,
} from './types';

export function addToBasket(id: number): BasketActionTypes {
    return {
        type: BASKET_ADD,
        id,
    };
};

export function removeFromBasket(id: number): BasketActionTypes {
    return {
        type: BASKET_REMOVE,
        id,
    };
};