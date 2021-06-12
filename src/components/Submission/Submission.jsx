import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './Submission.css';

// function for Submission component
function Submission() {

    // variables for dispatch and UseHistory
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        // dispatch to clear data
        dispatch({
            type : 'SUBMISSION'
        });

        // on click change to home route
        history.push('/')
    }
    return (
        <div>
            <div>
                <h2>Submission Complete!</h2>
            </div>
            <div>
                <h3>Thank You!</h3>
                <button onClick={handleSubmit}>Leave New Feedback</button>
            </div>
        </div>
    )
} // end Submission

// export Submission
export default Submission;