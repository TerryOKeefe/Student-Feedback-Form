import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './ReviewFeedback.css';

// function for ReviewFeedback
function ReviewFeedback() {
    // import data from store
    const reviewList = useSelector(store => store.feedbackReducer)

    // variable for useHistory
    const history = useHistory();

    // axios to send review to database
    const reviewSubmit = () => {


        // on click change to submission route
        history.push('/submission');
    }
    
    return (
        <div>
            <div>
                <h2>Review Your Feedback</h2>
            </div>
            <div>
                {/* <h3>Feelings: {reviewList[0].feeling}</h3>
                <h3>Understanding: {reviewList[1].understanding}</h3>
                <h3>Support: {reviewList[2].support}</h3>
                <h3>Comments: {reviewList[3].comments}</h3> */}
                <button onClick={reviewSubmit}>Submit</button>
            </div>
        </div>
    )
} // end ReviewFeedback

// export ReviewFeedback
export default ReviewFeedback;