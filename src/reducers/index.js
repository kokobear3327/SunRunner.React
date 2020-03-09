import isNews from './isNews';
import isDashboard from './isDashboard';
import isNextTemplate from './isNextTemplate';
import isPreviousTemplate from './isPreviousTemplate'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isNews: isNews,
    isDashboard: isDashboard,
    isNextTemplate: isNextTemplate,
    isPreviousTemplate: isPreviousTemplate
})

export default allReducers;