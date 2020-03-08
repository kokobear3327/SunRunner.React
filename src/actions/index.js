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





// export const mousedOffNews = () => {
//     return {
//         type: 'MOUSED_OFF'
//     }
// }


// export const mousedOffDashboard = () => {
//     return {
//         type: 'MOUSED_OFF'
//     }
// }