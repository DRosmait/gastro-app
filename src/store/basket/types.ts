import { BaskteItem } from '../../components/BasketListItem';

export type BasketState = BaskteItem[];

export const BASKET_ADD = 'BASKET_ADD';
export const BASKET_REMOVE = 'BASKET_REMOVE';
export const BASKET_REDUCE = 'BASKET_REDUCE';

interface BasketAdd {
    type: typeof BASKET_ADD;
    payload: BaskteItem;
}

interface basketRemove {
    type: typeof BASKET_REMOVE;
    id: number;
}

interface basketReduce {
    type: typeof BASKET_REDUCE;
    id: number;
}

export type BasketActionTypes = BasketAdd | basketRemove | basketReduce;