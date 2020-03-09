import isNews from './isNews';
import isDashboard from './isDashboard';
import { combineReducers } from 'redux';
import isNextTemplate from './isNextTemplate';

const allReducers = combineReducers({
    isNews: isNews,
    isDashboard: isDashboard,
    isNextTemplate: isNextTemplate
})

export default allReducers;