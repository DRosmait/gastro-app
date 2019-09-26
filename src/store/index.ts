import { combineReducers, createStore } from 'redux';

import reviewReducer from './reviews/reducers';
import tableReducer from './tables/reducers';
import dishReducer from './dishes/reducers';

export const rootReducer = combineReducers({
    reviews: reviewReducer,
    tables: tableReducer,
    dishes: dishReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(
        rootReducer,
    );
};