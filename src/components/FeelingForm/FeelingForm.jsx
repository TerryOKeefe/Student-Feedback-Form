import {useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './FeelingForm.css';

// function for FeelingForm component
function FeelingForm() {
    // variable to hold input
    const [newFeel, setNewFeel] = useState();

    // variable for dispatch
    const dispatch = useDispatch();
    const history = useHistory();

    // create variable to take in rating
    const newFeeling = {
        feeling : newFeel
    };

    // function to dispatch feeling rating
    const feelingSubmit = (event) => {
        event.preventDefault();

        // dispatch the new data to store
        dispatch({
            type : 'ADD_FEELING',
            payload : newFeeling
        })
    } // end feelingSubmit

    // handle click to take us to /understanding route
    const handleClick = () => {
        // on click change to understanding route
        history.push('/understanding');
    }

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
                    placeholder="Feeling?"
                    value={newFeel}
                    onChange={(event) => setNewFeel(event.target.value)}
                />
                <button onClick={handleClick}>Next</button>
            </form>
        </div>
    )
} // end FeelingForm

// export FeelingForm
export default FeelingForm;