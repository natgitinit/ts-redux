import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';

const reducers = combineReducers({
    articles: articlesReducer,
});

export default reducers;