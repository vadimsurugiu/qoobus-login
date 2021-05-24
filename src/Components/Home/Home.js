import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2'
import 'animate.css'
import './Home.sass'

const Home = () => {
    const userDetails = useSelector(state => state.user)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(userDetails);
        console.log(localStorage.getItem('user'));
    }, [userDetails])


    const chartData = canvas => {
        const ctx = canvas.getContext('2d');
    
        return {
            labels: ['Bitcoin', 'Ethereum', 'XRP', 'Litecoin', 'Solana', 'Stellar'],
            datasets: [{
                label: "Portfolio",
                data: [5592.69, 2302.20, 86.15, 161.67, 89.99, 42.77],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(0, 0, 1, 0.2)'
                ],
            }],
        };
    }

    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'My Portfolio',
                font: {
                    size: 24
                }
            }
        }
    } 
    
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
                <h2 className="animate__animated animate__bounceIn">Hello {userDetails.firstName} {userDetails.lastName} </h2>
                <h1 className="animate__animated animate__fadeInUp">WOW! Animation!</h1>
                <p>Press this button to go to the login page and see how you get redirected back.</p>
                <Link to="/login">
                    <button>Click me!</button>
                </Link>
                <Doughnut 
                    data={chartData}
                    options={chartOptions} 
                />
            </div>
        </div>
    )
}

export default Home