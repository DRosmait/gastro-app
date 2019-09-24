import {
    TablesState,
    TableActionTypes,
    TABLE_TOGGLE,
} from './types'

import { Reducer } from 'redux';

const initialState: TablesState = {
    amount: 23,
    orderedId: new Set([0, 7, 13, 17]),
};

const tableReducer: Reducer<TablesState, TableActionTypes> = (state = initialState, action): TablesState => {
    switch (action.type) {
        case TABLE_TOGGLE:
            {
                const newOrderedId = new Set([...state.orderedId]);
                state.orderedId.has(action.id)
                    ? newOrderedId.delete(action.id)
                    : newOrderedId.add(action.id)

                return { ...state, ...{ orderedId: newOrderedId } };
            }
        default:
            return state;
    }
};

export default tableReducer;