import isNews from './isNews';
import isDashboard from './isDashboard';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isNews: isNews,
    isDashboard: isDashboard
})

export default allReducers;