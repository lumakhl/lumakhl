import {
    SAVE_STATE,
    BUY_ITEM,
    MOUTH_CLICK,
    GET_STATE,
    ADDED_DIRT
} from '../types';
import { saveStateLocalStorage } from '../../services/service';

export default (state, action) => {
    switch (action.type) {
        case GET_STATE:
            return {
                ...action.payload,
                dirties: []
            };
        case SAVE_STATE:
            saveStateLocalStorage(state)
            return {
                ...state
            };
        case BUY_ITEM:
            const items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            });

            const currentTotal = state.score.currentTotal - action.payload.oldPrice;

            return {
                ...state,
                score: { ...state.score, currentTotal },
                items,
            };

        case MOUTH_CLICK:
            state.score.currentTotal = action.payload.incremented;
            state.score.total = action.payload.total;
            state.score.totalClicks = action.payload.totalClicks;
            return {
                ...state
            };
        case ADDED_DIRT:
            return { 
                ...state,
                dirties: action.payload
            };
        default:
            throw Error(`Unknown type: ${action.type}`);
    }
}