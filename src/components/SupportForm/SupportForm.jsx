import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SupportForm.css';
import '../App/App.css';

// function for SupportForm component
function SupportForm() {
    // variable to hold support input
    const [newSupport, setNewSupport] = useState('');

    // variables for dispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();

    // function to dispatch support rating
    const supportSubmit = (event) => {
        event.preventDefault();

        // dispatch the new data to store
        dispatch({
            type : 'ADD_SUPPORT',
            payload : newSupport
        });

        // on click change to comment route
        history.push('/comment');
    } // end supportSubmit

    // handle click to take us to /comment
    const handleClick = () => {

    } // end handleClick

    // console log to see that the rating shows
    console.log('Support Rating:', newSupport);

    return(
        <div className="raisedBox">
            <div>
                <h2>How well are you being supported?</h2>
                <h4>1 = No support / 5 = Amazing Support</h4>
            </div>
            <form onSubmit={supportSubmit}>
                <TextField
                id="standard-basic"
                label="Support Rating"
                type="number"
                required={true}
                placeholder="1-5"
                value={newSupport}
                onChange={(event) => setNewSupport(event.target.value)}
                />
                <Button 
                    className="understand-btn"
                    size="large"
                    variant="contained"
                    color="primary"
                    type="submit" 
                    value="Next" 
                >
                    Next
                </Button>
            </form>
        </div>
    )
} // end SupportForm

// export SupportForm
export default SupportForm;