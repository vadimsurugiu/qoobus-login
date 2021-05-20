import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import 'animate.css'
import './Home.sass'

const Home = () => {
    const userDetails = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <div className="home-cnt">
            <div className="top">
                <h1>Home</h1>
                <div 
                    onClick={() => dispatch({type: "LOG_OUT"})}
                    className="logout"
                >
                    Log Out
                </div>
            </div>
            <div className="home-content">
                <h1 className="animate__animated animate__bounceIn">Hello {userDetails.firstName} {userDetails.lastName} </h1>
                <h1 className="animate__animated animate__fadeInUp">WOW! Animation!</h1>
                <p>Press this button to go to the login page and see how you get redirected back.</p>
                <Link to="/login">
                    <button>Click me!</button>
                </Link>
            </div>
        </div>
    )
}

export default Home