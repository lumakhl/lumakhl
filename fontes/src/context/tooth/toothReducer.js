import {
    GET_INVENTORY,
    GET_MENU_ITEMS,
    GET_CLICKS_MOUTHS,
    SAVE_STATES,
    BUY_ITEM,
    MOUTH_CLICK
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_INVENTORY:
            return {
                ...state,
            };
        case GET_MENU_ITEMS:
            return {

            };
        case GET_CLICKS_MOUTHS:
            return {

            };
        case SAVE_STATES:
            return {

            };
        case BUY_ITEM:
            return {

            };
        case MOUTH_CLICK:
            return {

            };
    }
}