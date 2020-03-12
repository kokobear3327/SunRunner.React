const isNewsBalloon = (state = false, action) => {
    switch (action.type) {
        case 'CLICKED_NEWS_BALLOON':
            return state = true;    
        case 'CLICKED_NEWS_BALLOON2':
            return state = false;
        default: 
            return state;
    }
};

export default isNewsBalloon;