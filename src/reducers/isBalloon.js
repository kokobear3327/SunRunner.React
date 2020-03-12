const isBalloon = (state = false, action) => {
    switch (action.type) {
        case 'CLICKED_BALLOON':
            return state = true;    
        case 'CLICKED_BALLOON2':
            return state = false;
        default: 
            return state;
    }
};

export default isBalloon;