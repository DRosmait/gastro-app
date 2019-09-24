import { combineReducers, createStore } from 'redux';

import reviewReducer from './reviews/reducers';
import tableReducer from './tables/reducers';

export const rootReducer = combineReducers({
    reviews: reviewReducer,
    tables: tableReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(
        rootReducer,
    );
};