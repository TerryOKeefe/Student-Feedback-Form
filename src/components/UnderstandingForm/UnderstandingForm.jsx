import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './UnderstandingForm.css';

// function for UnderstandingForm component
function UnderstandingForm() {
    return(
        <div>
            <div>
                <h2>How well are you understanding the content?</h2>
            </div>
            <form>
                <input></input>
                <button>Next</button>
            </form>
        </div>
    )
} // end UnderstandingForm

// export UnderstandingForm
export default UnderstandingForm;