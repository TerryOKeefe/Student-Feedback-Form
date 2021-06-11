import {useHistory} from 'react-router-dom';
import './Home.css';

function Home () {
    // browser history
    const history = useHistory();

    // click to take us to /feeling route
    const handleClick = () => {
        // on click change to feeling route
        history.push('/feeling');
    }
    return (
        <div>
            <h2>Welcome!</h2>
            <h4>Click to start</h4>
            <button onClick={handleClick}>Start</button>
        </div>
    )
}

export default Home;