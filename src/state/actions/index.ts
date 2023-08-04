import { ActionType } from '../action-types';

interface SearchArticlesAction {
    type: ActionType.SEARCH_ARTICLES;
}

interface SearchArticlesSuccess {
    type: ActionType.SEARCH_ARTICLES_SUCCESS;
    payload: string[];
}

interface SearchArticlesError {
    type: ActionType.SEARCH_ARTICLES_ERROR;
    payload: string;
}
export type Action =
    | SearchArticlesAction
    | SearchArticlesSuccess
    | SearchArticlesError