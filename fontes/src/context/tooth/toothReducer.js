import {
    SAVE_STATE,
    BUY_ITEM,
    MOUTH_CLICK,
    GET_STATE
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_STATE:
            return {

            };
        case SAVE_STATE:
            return {

            };
        case BUY_ITEM:
            const items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            });
            return {
                ...state,
                items
            };
        case MOUTH_CLICK:
            state.score.currentTotal = action.payload;
            return {
                ...state
            };
    }
}