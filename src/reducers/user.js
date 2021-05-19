const userReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_USER_DETAILS":
            return {...state, ...action.userDetails}
        default:
            return state
    }
}

export default userReducer