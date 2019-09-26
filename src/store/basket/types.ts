import { DishProps } from '../../components/Dish';

interface BaskteItem {
    id: number;
    menuItem: DishProps;
    amount: number;
}

export type BasketState = BaskteItem[];

export const BASKET_ADD = 'BASKET_ADD';
export const BASKET_REMOVE = 'BASKET_REMOVE';

interface BasketAdd {
    type: typeof BASKET_ADD;
    id: number;
}

interface basketRemove {
    type: typeof BASKET_REMOVE;
    id: number;
}

export type BasketActionTypes = BasketAdd | basketRemove;