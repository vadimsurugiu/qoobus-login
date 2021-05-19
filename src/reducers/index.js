import {combineReducers} from 'redux'
import usersReducer from './users'
import isLoggedReducer from './isLogged'

const allReducers = combineReducers({
    users: usersReducer,
    isLogged: isLoggedReducer
})

export default allReducers