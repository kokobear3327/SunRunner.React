export const mousedOver = (button) => {
    switch (button) {
    case "dashboard": 
        return { type: 'MOUSED_OVER_DASHBOARD' }
    case "news":
        return { type: 'MOUSED_OVER_NEWS' }
    default: 
        return button
}
}

export const mousedOff = () => {
    return {
        type: 'MOUSED_OFF'
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


// export const mousedOff = (button) => {
//     switch (button) {
//     case "dashboard": 
//         return { type: 'MOUSED_OVER_DASHBOARD' }
//     case "news":
//         return { type: 'MOUSED_OVER_NEWS' }
//     default: 
//         return button
// }
// }




