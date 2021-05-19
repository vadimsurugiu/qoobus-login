import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './Register.sass'


function Register() {
    const dispatch = useDispatch()

    const [registerComplete, setRegisterComplete] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(true)
    const [passwordIsValid, setPasswordIsValid] = useState(true)
    const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(true)
    const [firstNameIsValid, setFirstNameIsValid] = useState(true)
    const [lastNameIsValid, setLastNameIsValid] = useState(true)
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        formCheck()
    }, [email, password, confirmPassword, firstName, lastName])

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
        if(!pattern.test(e.target.value)) {
            setEmailIsValid(false)
        } else {
            setEmailIsValid(true)
        }
    }

    const onPasswordHanlder = (e) => {
        setPassword(e.target.value)
        const pattern = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
        if(!pattern.test(e.target.value)) {
            setPasswordIsValid(false)
        } else {
            setPasswordIsValid(true)
        }
    }

    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
        if(password !== e.target.value) {
            setConfirmPasswordIsValid(false)
        } else {
            setConfirmPasswordIsValid(true)
        }
    }

     const onFirstNameHandler = (e) => {
        setFirstName(e.target.value)
        let isValid = nameCheck(e.target.value)
        setFirstNameIsValid(isValid)
     }

     const onLastNameHandler = (e) => {
         setLastName(e.target.value)
         let isValid = nameCheck(e.target.value)
         setLastNameIsValid(isValid)
     }

     const nameCheck = (text) => {
        if(text.length > 1) {
            return true
        }
        return false
     }

     const formCheck = () => {
         if(email.length > 0
            && emailIsValid
            && firstName.length > 0
            && firstNameIsValid
            && lastName.length > 0
            && lastNameIsValid
            && password.length > 0
            && passwordIsValid
            && confirmPassword.length > 0
            && confirmPasswordIsValid
        ) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
     }

     const registerUser = () => {
        const user = {
            id: email,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        }
        dispatch({type:"ADD_USER", user})
        setRegisterComplete(true)
     }

    return (
        <div className="register-cnt">
            {!registerComplete && (
                <>
                    <h1>Register</h1>
                    <input 
                        type="text" 
                        value={email}
                        placeholder="E-mail" 
                        onChange={onEmailHandler}
                        className={emailIsValid ? '' : 'invalid'}
                    />
                    {!emailIsValid && (
                        <span>E-mail is invalid!</span>
                    )}
                    <input 
                        type="password" 
                        value={password}
                        placeholder="Password" 
                        onChange={onPasswordHanlder}
                        className={passwordIsValid ? '' : 'invalid'}
                    />
                    {!passwordIsValid && (
                        <span>
                            Password must contain:
                            <ul>
                                <li>At least one uppercase letter</li>
                                <li>At least one lowercase letter</li>
                                <li>At least one number</li>
                                <li>At least 8 characters</li>
                            </ul>
                        </span>
                    )}
                    <input
                        type="password" 
                        value={confirmPassword}
                        placeholder="Repeat password" 
                        onChange={onConfirmPasswordHandler}
                        className={confirmPasswordIsValid ? '' : 'invalid'}
                    />
                    {!confirmPasswordIsValid && (
                        <span>Passwords don't match</span>
                    )}
                    <input 
                        type="text" 
                        value={firstName}
                        onChange={onFirstNameHandler}
                        placeholder="First Name" 
                        className={firstNameIsValid ? '' : 'invalid'}
                    />
                    {!firstNameIsValid && (
                        <span>First name must contain at least two characters</span>
                    )}
                    <input 
                        type="text" 
                        value = {lastName}
                        onChange={onLastNameHandler}
                        placeholder="Last Name" 
                        className={lastNameIsValid ? '' : 'invalid'}
                    />
                    {!lastNameIsValid && (
                        <span>Last name must contain at least two characters</span>
                    )}
                    <div>
                        <Link to="/">
                            <div className="back">Go Back</div>
                        </Link>
                        <button 
                            className={formIsValid ? 'register-btn' : 'register-btn disabled'}
                            onClick={registerUser}
                        >
                            Register
                        </button>
                    </div>
                </>
            )}
            {registerComplete && (
                <>
                    <h1>You have succesfully registered</h1>
                    <Link to="/">
                        <div className="back">Go to Home</div>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Register