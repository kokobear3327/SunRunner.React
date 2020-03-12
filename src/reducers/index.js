import isNews from './isNews';
import isDashboard from './isDashboard';
import isNextTemplate from './isNextTemplate';
import isPreviousTemplate from './isPreviousTemplate';
import isBalloon from './isBalloon.js';
import isNewsBallon from './isNewsBalloon';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isNews: isNews,
    isDashboard: isDashboard,
    isNextTemplate: isNextTemplate,
    isPreviousTemplate: isPreviousTemplate,
    isBalloon: isBalloon,
    isNewsBalloon: isNewsBallon
})

export default allReducers;