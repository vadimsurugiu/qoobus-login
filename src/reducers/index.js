import {combineReducers} from 'redux'
import usersReducer from './users'
import isLoggedReducer from './isLogged'
import userReducer from './user'

const allReducers = combineReducers({
    users: usersReducer,
    user: userReducer,
    isLogged: isLoggedReducer
})

export default allReducers