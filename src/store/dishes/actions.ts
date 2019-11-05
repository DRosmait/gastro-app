import { DishInfoProps } from '../../components/DishInfo';

import {
    DISH_ADD,
    DISH_REMOVE,
    DISH_EDIT,
    DishActionTypes,
} from './types';

export function addDish(payload: DishInfoProps): DishActionTypes {
    return {
        type: DISH_ADD,
        payload,
    };
};

export function removeDish(id: number): DishActionTypes {
    return {
        type: DISH_REMOVE,
        id,
    };
};

export function editDish(id: number, payload: DishInfoProps): DishActionTypes {
    return {
        type: DISH_EDIT,
        id,
        payload,
    };
};