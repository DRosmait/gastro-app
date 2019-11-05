import {
    BASKET_ADD,
    BASKET_REMOVE,
    BASKET_REDUCE,
    BasketActionTypes,
} from './types';

import { BaskteItem } from '../../components/BasketListItem';

export function addToBasket(payload: BaskteItem): BasketActionTypes {
    return {
        type: BASKET_ADD,
        payload,
    };
};

export function removeFromBasket(id: number): BasketActionTypes {
    return {
        type: BASKET_REMOVE,
        id,
    };
};

export function reduceInBasket(id: number): BasketActionTypes {
    return {
        type: BASKET_REDUCE,
        id,
    }
}