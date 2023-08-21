import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ArticlesState {
    loading: boolean;
    error: string | null;
    articles: string[];
}

const initialState = {
    loading: false,
    error: null,
    articles: [],
}

const reducer = (
    state: ArticlesState = initialState,
    action: Action
    ): ArticlesState => {

    switch (action.type) {
        case ActionType.SEARCH_ARTICLES:
            return { loading: true, error: null, articles: [] };
        case ActionType.SEARCH_ARTICLES_SUCCESS:
            return { loading: false, error: null, articles: action.payload };
        case ActionType.SEARCH_ARTICLES_ERROR:
            return { loading: false, error: action.payload, articles: [] };
        default:
            return state;
    }
};

export default reducer;