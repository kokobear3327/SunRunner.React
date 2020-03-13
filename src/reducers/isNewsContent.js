
const isNewsContent = (state = " ", action) => {
    switch (action.type) {
        case 'IS_NEWS_CONTENT':
            console.log("IsNewContent hit");
            state = action.inputText
            console.log(state)
            return state;
        case 'IS_NEWS_CONTENT2':
            return state
        default: 
            return 2;
    }
};

export default isNewsContent;



// Action:

// export const isNewsContent = (inputText) => {
//     return 
//         type: 'IS_NEWS_CONTENT',
//         inputText: inputText
//     }
// }


// const isNewsContent = (state = "", action) => {
//     switch (action.type) {
//         case 'IS_NEWS_CONTENT':
//             console.log("IsNewContent hit");
//             let inputValue = action.newsContent;

//             state = inputValue;    
//             return state;
//         case 'IS_NEWS_CONTENT2':
//             return state
//         default: 
//             return 2;
//     }
// };

// export default isNewsContent;
