import { FETCH_WHISKIES, FETCH_WHISKIES_SUCCESS, fetchWhiskiesFailures, FETCH_WHISKIES_FAILURE } from "../actions";

const initialState = {
    whiskies: [],
    isLoading: false,
    error: false
}


export default function rootReduxer(state = initialState, action) {
    switch (action.type) {

        case FETCH_WHISKIES:
            return {
                ...state,
                isLoading: true,
                error: null
            }


        case FETCH_WHISKIES_SUCCESS:
            return {
                whiskies: [...action.payload],
                isLoading: false,
                error: null
            }

        case FETCH_WHISKIES_FAILURE:
            return {
                whiskies: [],
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}