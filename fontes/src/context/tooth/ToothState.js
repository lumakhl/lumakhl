import React, { useReducer } from 'react';
import ToothContext from './toothContext';
import ToothReducer from './toothReducer';

import ToothItems from './toothItems';

import { getStateFromLocalStorage } from '../../services/service';

import {
    GET_STATE,
    SAVE_STATE,
    BUY_ITEM,
    MOUTH_CLICK,
    ADDED_DIRT,
    AUTO_MOUTH_CLICK,
    AUTO_BRUSH
} from '../types';

const increasePriceFactor = 50 / 100;

const ToothState = props => {

    const initialState = {
        items: ToothItems,
        score: {
            totalClicks: 0,
            clickPerSecond: 0,
            total: 0,
            currentTotal: 0
        },
        dirties: [],
        lastSaveTime: null
    };

    const [state, dispatch] = useReducer(ToothReducer, initialState);
    
    const saveState = _ => {
        dispatch({
            type: SAVE_STATE,
            payload: new Date()
        });
    };

    const getState = () => {
        const data = getStateFromLocalStorage();

        if (data) {
            dispatch({
                type: GET_STATE,
                payload: data
            });
        } 
    };

    const buyItem = item => {
        item.quantity= (++item.quantity);
        item.oldPrice = item.price;
        item.price = Math.floor(item.price + (item.price * increasePriceFactor));
        
        dispatch({
            type: BUY_ITEM,
            payload: item
        });
    };

    const mouthClick = increment => {
        const incremented = state.score.currentTotal+increment; 
        const total = state.score.total+increment; 
        const totalClicks = state.score.totalClicks+increment; 
        const score = {
            totalClicks,
            incremented,
            total
        };
        dispatch({
            type: MOUTH_CLICK,
            payload: score
        });
    };

    const autoClick = _ => {
        dispatch({
            type: AUTO_MOUTH_CLICK,
        });
    };

    const autoBrush = _ => {
        dispatch({
            type: AUTO_BRUSH,
        });
    };

    const setDirties = dirties => {
        dispatch({
            type: ADDED_DIRT,
            payload: dirties
        });
    }

    return (
    <ToothContext.Provider
        value={{
            items: state.items,
            score: state.score,
            dirties: state.dirties,
            lastSaveTime: state.lastSaveTime,
            saveState,
            getState,
            buyItem,
            setDirties,
            mouthClick,
            autoClick,
            autoBrush
        }}
    >
        {props.children}
    </ToothContext.Provider>
    );
};

export default ToothState