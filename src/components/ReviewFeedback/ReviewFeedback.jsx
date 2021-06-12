import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './ReviewFeedback.css';

// function for ReviewFeedback
function ReviewFeedback() {
    // import data from store
    const reviewList = useSelector(store => store.feedbackReducer);

    console.log(reviewList);

    // variable for useHistory
    const history = useHistory();

    // axios to send review to database
    const reviewSubmit = () => {
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
                <button onClick={reviewSubmit}>Submit</button>
            </div>
        </div>
    )
} // end ReviewFeedback

// export ReviewFeedback
export default ReviewFeedback;