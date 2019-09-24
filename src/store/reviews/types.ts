import { Review } from '../../components/Review';

export type ReviewState = Review[];

export const REVIEW_ADD = 'REVIEW_ADD';
export const REVIEW_REMOVE = 'REVIEW_REMOVE';
export const REVIEW_EDIT = 'REVIEW_EDIT';

interface ReviewAddAction {
    type: typeof REVIEW_ADD;
    payload: Review;
}

interface ReviewRemoveAction {
    type: typeof REVIEW_REMOVE;
    id: number;
}

interface ReviewEditAction {
    type: typeof REVIEW_EDIT;
    id: number;
    payload: Review;
}

export type ReviewActionTypes = ReviewAddAction | ReviewRemoveAction | ReviewEditAction;