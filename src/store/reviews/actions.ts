import { REVIEW_ADD, REVIEW_REMOVE, REVIEW_EDIT, ReviewActionTypes } from './types';
import { Review } from '../../components/ReviewItem';

export function addReview(newReview: Review): ReviewActionTypes {
    return {
        type: REVIEW_ADD,
        payload: newReview,
    };
};

export function removeReview(id: number): ReviewActionTypes {
    return {
        type: REVIEW_REMOVE,
        id,
    };
};

export function editReview(id: number, payload: Review): ReviewActionTypes {
    return {
        type: REVIEW_EDIT,
        id,
        payload,
    };
};
