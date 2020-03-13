const isNewsContent = (state = "-", action) => {
    switch (action.type) {
        case 'IS_NEWS_CONTENT':
            let inputValue = action.inputText;

            state = inputValue;    
            return state;
        case 'IS_NEWS_CONTENT2':
            return state = false;
        default: 
            return 2;
    }
};

export default isNewsContent;