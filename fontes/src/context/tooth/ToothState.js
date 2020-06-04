import React, { useReducer } from 'react';
import ToothContext from './toothContext';
import ToothReducer from './toothReducer';

import ToothItems from './toothItems';

import {saveStateLocalStorage, getStateFromLocalStorage} from '../../services/service';

import {
    GET_STATE,
    SAVE_STATE,
    BUY_ITEM,
    MOUTH_CLICK
} from '../types';

const increasePriceFactor = 50 / 100;

const ToothState = props => {
    const initialState = {
        items: ToothItems,
        score: {
            clickPerSecond: 0,
            total: 0,
            currentTotal: 0
        },
        lastSaveTime: null
    };

    const [state, dispatch] = useReducer(ToothReducer, initialState);

    const saveState = (data) => {
        saveStateLocalStorage(data);
        
        dispatch({
            type: SAVE_STATE,
            payload: new Date()
        });
    };

    const getState = () => {
        const data = getStateFromLocalStorage();
        dispatch({
            type: GET_STATE,
            payload: data
        });
    };

    const buyItem = item => {
        item.quantity= (++item.quantity);
        item.oldPrice = item.price;
        item.price = Math.floor(item.price + (item.price * increasePriceFactor));
        
        dispatch({
            type: BUY_ITEM,
            payload: item
        })
    };

    const mouthClick = increment => {
        const incremented = state.score.currentTotal+increment; 
        dispatch({
            type: MOUTH_CLICK,
            payload: incremented
        })

    };

    return (<ToothContext.Provider
        value={{
            items: state.items,
            score: state.score,
            lastSaveTime: state.lastSaveTime,
            saveState,
            getState,
            buyItem,
            mouthClick
        }}
    >
        {props.children}
    </ToothContext.Provider>
    );
};

export default ToothState