import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'


import {
    FETCH_WHISKIES,
    fetchWhiskiesFailure,
    fetchWhiskiesSuccess
} from "../actions";
import axios from 'axios';

const url = 'https://evening-citadel-85778.herokuapp.com/whiskey/';

function fetchWhiskiesEpic(action$) {
    return action$
        .ofType(FETCH_WHISKIES)
        .switchMap(() => {
            return axios.get(url).then((data) => {
                return data
            })
                .map(data => data.results)
                .map(whiskies => whiskies.map(whisky => ({
                    id: whisky.id,
                    title: whisky.title,
                    imageUrl: whisky.img_url
                })))
                .map(whiskies => whiskies.filter(whisky => !!whisky.imageUrl))
        })
        .map(whiskies => fetchWhiskiesSuccess(whiskies))
        .catch(error=> Observable.of(fetchWhiskiesFailure(error.message)))
}





export const rootEpic = combineEpics(fetchWhiskiesEpic);