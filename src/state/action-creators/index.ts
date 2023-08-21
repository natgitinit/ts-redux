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
        let data: any = {};
        data = await axios.get(
            'https://api.nytimes.com/svc/search/v2/articlesearch.json?',
        {
            params: {
            'api-key': 'oP7XpHLVCCywNAmZwcNEI2Wa8pq5HfoH',
            q: term,
            },
        });

        console.log("BEGIN HTTP GET");
        let obj = data;
        console.log("OBJ", obj);
        const copyright = obj['copyright'];
        console.log("Copyright", copyright);
        console.log("DATA", data);

        const docs = data.data.response.docs.map((result: any) => {
            console.log("result", result);
            return result;
        })

        dispatch({
        type: ActionType.SEARCH_ARTICLES_SUCCESS,
        payload: docs,
        });

        } catch (error: any) {
            dispatch({
            type: ActionType.SEARCH_ARTICLES_ERROR,
            payload: error.message,
            });
        }
    };
};