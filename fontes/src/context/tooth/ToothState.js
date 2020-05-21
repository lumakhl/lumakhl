import React, { useReducer } from 'react';
import ToothContext from './toothContext';
import ToothReducer from './toothReducer';

import ToothItems from './toothItems';

import {
    GET_INVENTORY,
    GET_MENU_ITEMS,
    GET_CLICKS_MOUTHS,
    SAVE_STATES,
    BUY_ITEM,
    MOUTH_CLICK
} from '../types';

const ToothState = props => {
    const initialState = {
        items: ToothItems,
        score: {
            clickPerSecond: 0,
            total: 0,
        }

    }
}