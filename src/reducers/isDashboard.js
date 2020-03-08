const isDashboard = (state = false, action) => {
    switch (action.type) {
        case 'MOUSED_OVER_DASHBOARD':
            return state = true;
        case 'MOUSED_OFF':
            return state = false;
        default: 
            return state = false;
    }
};

export default isDashboard;