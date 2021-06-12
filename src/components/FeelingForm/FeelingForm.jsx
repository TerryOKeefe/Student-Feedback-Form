import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
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
            type : 'ADD_FEELING',
            payload : newFeel
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
                <input
                    type="number"
                    required="required"
                    placeholder="Feeling?"
                    value={newFeel}
                    onChange={(event) => setNewFeel(event.target.value)}
                />
                <input type="submit" value="Next" />
            </form>
        </div>
    )
} // end FeelingForm

// export FeelingForm
export default FeelingForm;