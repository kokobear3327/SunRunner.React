import isNews from './isNews';
import isDashboard from './isDashboard';
import isNextTemplate from './isNextTemplate';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isNews: isNews,
    isDashboard: isDashboard,
    isNextTemplate: isNextTemplate
})

export default allReducers;