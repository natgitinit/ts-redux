import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchArticles = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.SEARCH_ARTICLES,
    });

    try {
        const { data } = await axios.get(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=books&api-key=oP7XpHLVCCywNAmZwcNEI2Wa8pq5HfoH',
        {
            params: {
            text: term,
            },
        }
        );

        const names = data.objects.map((result: any) => {
        console.log("RETURNED DATA", data.package.name)
        return result.package.name;
        });

        dispatch({
        type: ActionType.SEARCH_ARTICLES_SUCCESS,
        payload: names,
        });

        } catch (error: any) {
            dispatch({
            type: ActionType.SEARCH_ARTICLES_ERROR,
            payload: error.message,
            });
        }
    };
};