import { combineReducers, createStore } from 'redux';

import reviewReducer from './reviews/reducers';
import tableReducer from './tables/reducers';
import dishReducer from './dishes/reducers';
import basketReduce from './basket/reducers';

export const rootReducer = combineReducers({
    reviews: reviewReducer,
    tables: tableReducer,
    dishes: dishReducer,
    basketItems: basketReduce,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(
        rootReducer,
    );
};