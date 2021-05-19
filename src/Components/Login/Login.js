import {Link, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import './Login.sass'

function Login() {
    const users = useSelector(state => state.users)
    const user = useSelector(state => state.user)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginIsValid, setLoginIsValid] = useState(false)
    const [credentialsIsValid, setCredentialsIsValid] = useState(true)

    useEffect(() => {
        if(isLogged) history.push('/')
        loginCheck()
    }, [email, password])

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const loginCheck = () => {
        if(email.length > 0 && password.length > 0) {
            setLoginIsValid(true)
        } else {
            setLoginIsValid(false)
        }
    }

    const saveUserDetails = () => {
        const userDetails = {
            id: email,
            email: '',
            firstName: '',
            lastName: '',
            password: ''
        }
        users.map(user => {
            if(user.id === userDetails.id) {
                userDetails.email = user.email
                userDetails.firstName = user.firstName
                userDetails.lastName = user.lastName
                userDetails.password = user.password
            }
        })

        dispatch({type: "ADD_USER_DETAILS", userDetails})
    }

    const loginHandler = () => {
        let isUser = false
        if(users.length > 0 && users.find(user => user.email === email && user.password === password)) {
            isUser = true
            saveUserDetails()
            setCredentialsIsValid(true)
        } else {
            setCredentialsIsValid(false)
        }
        if(isUser) dispatch({type: "LOG_IN"})
    }

    return (
        <div className="login-cnt">
            {!isLogged && (
                <>
                    <h1>Login</h1>
                    <input 
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={onEmailHandler}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={onPasswordHandler}
                    />
                    {!credentialsIsValid && (
                        <span>Invalid email or password.</span>
                    )}
                    <div>
                        <Link to="/">
                            <div className="back">Go Back</div>
                        </Link>
                        <button 
                            className={loginIsValid ? 'login-btn' : 'login-btn disabled'}
                            onClick={loginHandler}
                        >
                            Login
                        </button>
                    </div>
                </>
            )}
            {isLogged && (
                <>
                    <h1>You have succesfully logged in!</h1>
                    <Link to="/">
                        <div className="back">Go to Home</div>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Login