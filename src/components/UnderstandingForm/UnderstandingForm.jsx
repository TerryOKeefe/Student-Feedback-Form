import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './UnderstandingForm.css';

// function for UnderstandingForm component
function UnderstandingForm() {
    // variable to hold input
    const [newUnderstand, setNewUnderstand] = useState();

    // variable for dispatch and usehistory
    const dispatch = useDispatch();
    const history = useHistory();

    // create a variable to take in rating
    const newUnderstanding = {
        understanding : newUnderstand
    };

    // function to dispatch understanding rating
    const understandingSubmit = (event) => {
        event.preventDefault();

        // dispatch the new data to store
        dispatch({
            type : 'ADD_UNDERSTAND',
            payload : newUnderstanding
        });

        // on click change to support route
        history.push('/support');
    } // end understandingSubmit

    // console log to see that the value shows
    console.log('Understanding Rating:', newUnderstand);

    return(
        <div>
            <div>
                <h2>How well are you understanding the content?</h2>
            </div>
            <form onSubmit={understandingSubmit}>
                <input 
                    type="number"
                    placeholder="Understanding?"
                    value={newUnderstand}
                    onChange={(event) => setNewUnderstand(event.target.value)}
                />
                <input type="submit" value="Next" />
            </form>
        </div>
    )
} // end UnderstandingForm

// export UnderstandingForm
export default UnderstandingForm;