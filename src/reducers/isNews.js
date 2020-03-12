const isNews = (state = false, action) => {
    switch (action.type) {
        case 'MOUSED_OVER_NEWS':
            return state = true;
        case 'MOUSED_OFF':
            return state = false;
        default: 
            return 1;
    }
};

export default isNews;