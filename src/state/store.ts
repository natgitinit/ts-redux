import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(thunk)
));