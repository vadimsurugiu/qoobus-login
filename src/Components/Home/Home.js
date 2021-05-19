import {useSelector, useDispatch} from 'react-redux'

import './Home.sass'

const Home = () => {
    const isLogged = useSelector(state => state.isLogged)
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
        </div>
    )
}

export default Home