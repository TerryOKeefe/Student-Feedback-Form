import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './CommentForm.css';

// function for CommentForm component
function CommentForm() {
    // variable to hold input
    const [newComment, setNewComment] = useState('');

    // variables for dispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();

    // function to dispatch comment
    const commentSubmit = (event) => {
        event.preventDefault();

        // dispatch the new comment to store
        dispatch({
            type : 'ADD_COMMENT',
            payload : newComment
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
                <TextField 
                    id="standard-basic"
                    label="Any Comments?"
                    type="text"
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                />
                <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Next
                </Button>
            </form>
            <h5>You can leave this empty</h5>
        </div>
    )
} // end CommentForm

// export CommentForm
export default CommentForm;