import { DishProps } from '../../components/Dish';

export type DishState = DishProps[];

export const DISH_ADD = 'DISH_ADD';
export const DISH_REMOVE = 'DISH_REMOVE';
export const DISH_EDIT = 'DISH_EDIT';

interface DishAdd {
    type: typeof DISH_ADD;
    payload: DishProps;
}

interface DishRemove {
    type: typeof DISH_REMOVE;
    id: number;
}

interface DishEdit {
    type: typeof DISH_EDIT;
    id: number;
    payload: DishProps;
}

export type DishActionTypes = DishAdd | DishRemove | DishEdit;