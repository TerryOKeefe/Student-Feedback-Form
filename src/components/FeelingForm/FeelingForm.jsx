import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './FeelingForm.css';

// function for FeelingForm component
function FeelingForm() {
    // variable to hold input
    const [newFeel, setNewFeel] = useState('');

    // variable for dispatch
    const dispatch = useDispatch();
    const history = useHistory();

    // function to dispatch feeling rating
    const feelingSubmit = (event) => {
        event.preventDefault();

        // dispatch the new data to store
        dispatch({
            type: 'ADD_FEELING',
            payload: newFeel
        });

        // on click change to understanding route
        history.push('/understanding');
    } // end feelingSubmit

    // console log to see that the value shows in log
    console.log('Feeling Rating:', newFeel);

    return (
        <div>
            <div>
                <h2>How are you feeling today?</h2>
            </div>
            {/* <h4>Feeling?</h4> */}
            <form onSubmit={feelingSubmit}>
                <TextField
                    id="standard-basic"
                    label="Feeling Rating"
                    type="number"
                    required="required"
                    placeholder="1-10"
                    value={newFeel}
                    onChange={(event) => setNewFeel(event.target.value)}
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
        </div>
    )
} // end FeelingForm

// export FeelingForm
export default FeelingForm;