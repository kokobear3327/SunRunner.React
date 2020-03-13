export const mousedOver = (button) => {
    switch (button) {
    case "dashboard": 
        return { type: 'MOUSED_OVER_DASHBOARD' }
    case "news":
        return { type: 'MOUSED_OVER_NEWS' }
    default: 
        return true
}
}

export const mousedOff = (button) => {
    switch (button) {
    case "news": 
        return { type: "MOUSED_OFF" }
    case "dashboard": 
        return { type: "MOUSED_OFF" }
    default: 
        return true

    }
}

export const nextTemplateClicked = () => {
    return {
        type: 'CLICKED_NEXT_TEMPLATE'
    }
}

export const previousTemplateClicked = () => {
    return {
        type: 'CLICKED_PREVIOUS_TEMPLATE'
    }
}

export const balloonClicked = () => {
    return {
        type: 'CLICKED_BALLOON'
    }
}


export const newsBalloonClicked = () => {
    return {
        type: 'CLICKED_NEWS_BALLOON'
    }
}

export const isNewsEditing = () => {
    return {
        type: "IS_NEWS_EDITING"
    }
}

export const isEditing = (button) => {
    switch (button) {
        case "news":
        return "IS_NEWS_EDITING"
        default:
            return button;
    }
}

export const isNewsContent = (inputText) => {
    return { type: "IS_NEWS_CONTENT", inputText: inputText};
}

// export const isNewsContent = (inputText) => {
//     return 
//         type: 'IS_NEWS_CONTENT',
//         inputText: inputText
//     }
// }






