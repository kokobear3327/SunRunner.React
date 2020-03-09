const isNextTemplate = (state = false, action) => {
    switch (action.type) {
        case 'CLICKED_NEXT_TEMPLATE':
            return state = true;
        case 'CLICKED_NEXT_TEMPLATE2':
            return state = false;
        default: 
            return state = false;
    }
};

export default isNextTemplate;