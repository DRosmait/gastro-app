import { TABLE_TOGGLE, TableActionTypes } from './types';

export function toggleTable(id: number): TableActionTypes {
    return {
        type: TABLE_TOGGLE,
        id,
    };
};
