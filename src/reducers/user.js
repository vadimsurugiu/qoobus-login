const userDetailsState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}

const userReducer = (state = userDetailsState, action) => {
    switch(action.type) {
        case "ADD_USER_DETAILS":
            localStorage.setItem('user', JSON.stringify(action.userDetails))
            return {...state, ...action.userDetails}
        default:
            return state
    }
}

export default userReducer