import {useSelector, useDispatch} from 'react-redux'
import 'animate.css'
import './Home.sass'
import { useEffect } from 'react'

const Home = () => {
    const isLogged = useSelector(state => state.isLogged)
    const userDetails = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(userDetails);
    }, [])

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
            </div>
        </div>
    )
}

export default Home