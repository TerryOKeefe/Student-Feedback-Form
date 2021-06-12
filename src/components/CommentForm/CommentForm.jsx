import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './CommentForm.css';

// function for CommentForm component
function CommentForm() {
    // variable to hold input
    const [newComment, setNewComment] = useState();

    // variables for dispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();

    // variable to take in rating
    const newComments = {
        comments : newComment
    };

    // function to dispatch comment
    const commentSubmit = (event) => {
        event.preventDefault();

        // dispatch the new comment to store
        dispatch({
            type : 'ADD_COMMENT',
            payload : newComments
        });

        // on submit change to /review route
        history.push('/review');
    } // end commentSubmit

    // console log to see comment add
    console.log('Comment:', newComment);

    return(
        <div>
            <div>
                <h2>Any comments you want to leave?</h2>
            </div>
            <form onSubmit={commentSubmit}>
                <input 
                    type="text"
                    placeholder="Comments?"
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                />
                <input type="submit" value="Next" />
            </form>
        </div>
    )
} // end CommentForm

// export CommentForm
export default CommentForm;