const isNewsEditing = (state = false, action) => {
    switch (action.type) {
        case 'IS_NEWS_EDITING':
            return state = true;    
        case 'IS_NEWS_EDITING2':
            return state = false;
        default: 
            return state;
    }
};

export default isNewsEditing;