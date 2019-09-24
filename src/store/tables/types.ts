export interface TablesState {
    amount: number;
    orderedId: Set<number>;
}

export const TABLE_TOGGLE = 'TABLE_TOGGLE';

interface TableToggleAction {
    type: typeof TABLE_TOGGLE;
    id: number;
}

export type TableActionTypes = TableToggleAction;