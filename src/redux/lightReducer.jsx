const lightReducer = (state = "off", action) => {
    if (action.type === 'SWITCH') {
        return state === "on" ? "off" : "on";
    }
    return state
}; 

export default lightReducer;