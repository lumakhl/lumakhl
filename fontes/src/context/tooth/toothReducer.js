import {
    SAVE_STATE,
    BUY_ITEM,
    MOUTH_CLICK,
    GET_STATE,
    ADDED_DIRT,
    AUTO_MOUTH_CLICK,
    AUTO_BRUSH
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
            const clickPerSecond = state.score.clickPerSecond + action.payload.pointsToIncrement;

            return {
                ...state,
                score: { ...state.score, currentTotal, clickPerSecond },
                items,
            };

        case MOUTH_CLICK:
            state.score.currentTotal = action.payload.incremented;
            state.score.total = action.payload.total;
            state.score.totalClicks = action.payload.totalClicks;

            const newItems = state.items.map((item) => {
                if (item.minTotalToVisible <= state.score.currentTotal) {
                    item.visible = true;
                }
                if (item.minTotalToAvaible <= state.score.currentTotal) {
                    item.available = true;
                }

                return item;
            });

            return {
                ...state,
                items: newItems
            };
        case ADDED_DIRT:
            return {
                ...state,
                dirties: action.payload
            };
        case AUTO_MOUTH_CLICK:
            const idealValue = state.score.clickPerSecond;
            state.score.currentTotal += idealValue;
            state.score.total += idealValue;

            const itemsAuto = state.items.map((item) => {
                if (item.minTotalToVisible <= state.score.currentTotal) {
                    item.visible = true;
                }
                if (item.minTotalToAvaible <= state.score.currentTotal) {
                    item.available = true;
                }

                return item;
            });
            return {
                ...state,
                items: itemsAuto
            }
        case AUTO_BRUSH:
            const newScore = { 
                ...state.score,
                totalClicks: state.score.totalClicks + (state.score.clickPerSecond > 0 ? 1 : 0)
            }
            return {
                ...state,
                score: newScore
            }
        default:
            throw Error(`Unknown type: ${action.type}`);
    }
}