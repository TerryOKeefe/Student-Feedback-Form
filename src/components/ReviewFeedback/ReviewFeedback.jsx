import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './ReviewFeedback.css';

// function for ReviewFeedback
function ReviewFeedback() {
    // import data from store
    const reviewList = useSelector(store => store.feedbackReducer);

    // console log to see what we have coming form the store
    console.log(reviewList);

    // variable for useHistory
    const history = useHistory();

    // axios to send review to database
    const reviewSubmit = () => {
        // axios to post ratings and comment to database
        axios.post('/feedback', reviewList)
        .then( (response) => {
            console.log('Response from POST', response);
        })
        .catch( (error) => {
            console.log('Error in POST', error);
        });

        // on click change to submission route
        history.push('/submission');
    }
    
    return (
        <div>
            <div>
                <h2>Review Your Feedback</h2>
            </div>
            <div>
                <h3>Feelings: {reviewList.feeling}</h3>
                <h3>Understanding: {reviewList.understanding}</h3>
                <h3>Support: {reviewList.support}</h3>
                <h3>Comments: {reviewList.comments}</h3>
                <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={reviewSubmit}
                >
                    Submit for Review
                </Button>
            </div>
        </div>
    )
} // end ReviewFeedback

// export ReviewFeedback
export default ReviewFeedback;