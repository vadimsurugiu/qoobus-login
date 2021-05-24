const isLoggedState = localStorage.getItem('isLogged')

const isLoggedReducer = (state = isLoggedState, action) => {
    switch(action.type) {
        case "LOG_IN":
            localStorage.setItem('isLogged', 'true')
            return 'true'
        case "LOG_OUT":
            localStorage.setItem('isLogged', 'false')
            return 'false'
        default:
            return state
    }
}

export default isLoggedReducer 