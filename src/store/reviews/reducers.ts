import {
    ReviewState,
    ReviewActionTypes,
    REVIEW_ADD,
    REVIEW_REMOVE,
    REVIEW_EDIT,
} from './types';

import { Reducer } from 'redux';

const initialState: ReviewState = [];

const reviewReducer: Reducer<ReviewState, ReviewActionTypes> = (state = initialState, action): ReviewState => {
    switch (action.type) {
        case REVIEW_ADD:
            return [ ...state, action.payload ];
        case REVIEW_REMOVE:
            return state.filter((_, id) => id !== action.id);
        case REVIEW_EDIT:
            return state.map((r, id) => {
                if (id === action.id) {
                    return { ...r, ...action.payload };
                }
                return r;
            });
        default:
            return state;
    }
};

export default reviewReducer;