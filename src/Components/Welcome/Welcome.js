import {Link} from 'react-router-dom'
import './Welcome.sass'

function Welcome() {
    return (
        <div className="welcome-cnt">
            <h1>Welcome, please login or register if you don't have an account.</h1>
            <div>
                <Link to="/register">
                    <button className="register">Register</button>
                </Link>
                <Link to="/login">
                    <button className="login">Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome