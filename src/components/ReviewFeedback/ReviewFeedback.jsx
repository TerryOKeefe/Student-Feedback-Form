import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import './ReviewFeedback.css';

// function for ReviewFeedback
function ReviewFeedback() {
    // import data from store
    const reviewList = useSelector(store => store.feedbackReducer)
    
    return (
        <div>
            <div>
                <h2>Review Your Feedback</h2>
            </div>
            <div>
                <h3>Feelings: </h3>
                <h3>Understanding: </h3>
                <h3>Support: </h3>
                <h3>Comments: </h3>
                <button>Submit</button>
            </div>
        </div>
    )
} // end ReviewFeedback

// export ReviewFeedback
export default ReviewFeedback;