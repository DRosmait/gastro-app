interface MenuItem {
    id: number;
    name: string;
    descriotion: string;
}

export interface BasketState {
    [index: number]: {
        menuItem: MenuItem;
        amount: number;
    }
};

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