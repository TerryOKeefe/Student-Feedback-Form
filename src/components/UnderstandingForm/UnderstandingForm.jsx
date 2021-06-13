import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// function for UnderstandingForm component
function UnderstandingForm() {
    // variable to hold input
    const [newUnderstand, setNewUnderstand] = useState('');

    // variable for dispatch and usehistory
    const dispatch = useDispatch();
    const history = useHistory();

    // function to dispatch understanding rating
    const understandingSubmit = (event) => {
        event.preventDefault();

        // dispatch the new data to store
        dispatch({
            type : 'ADD_UNDERSTAND',
            payload : newUnderstand
        });

        // on click change to support route
        history.push('/support');
    } // end understandingSubmit

    // console log to see that the value shows
    console.log('Understanding Rating:', newUnderstand);

    return(
        <div className="raisedBox">
            <div>
                <h2>How well are you understanding the content?</h2>
                <h4>1 = Not at all / 5 = I could teach it</h4>
            </div>
            <form onSubmit={understandingSubmit}>
                <TextField
                    id="standard-basic"
                    label="Understand Rating" 
                    type="number"
                    required={true}
                    placeholder="1-5"
                    value={newUnderstand}
                    onChange={(event) => setNewUnderstand(event.target.value)}
                />
                <Button
                    className="understand-btn"
                    size="large"
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Next
                </Button>
                    
            </form>
        </div>
    )
} // end UnderstandingForm

// export UnderstandingForm
export default UnderstandingForm;