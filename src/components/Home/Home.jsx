import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
        <div className="raisedBox">
            <h1>Welcome!</h1>
            {/* <h3>Click to start</h3> */}
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}>Start Daily Reflection
            </Button>
        </div>
    )
}

export default Home;