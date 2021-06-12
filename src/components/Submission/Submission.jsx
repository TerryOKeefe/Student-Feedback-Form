import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
                <Button 
                    size="medium"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Leave New Feedback
                </Button>
            </div>
        </div>
    )
} // end Submission

// export Submission
export default Submission;