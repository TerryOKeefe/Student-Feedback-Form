import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import './Admin.css';
import { useEffect } from 'react';

// function for Admin component
function Admin() {

    // get adminFeedback on load
    useEffect(() => {
        adminFeedback() // load once
    }, []);

     // get the data from the redux store
    const adminList = useSelector(store => store.adminReducer);

    // variable for dispatch
    const dispatch = useDispatch();

    // get the data
    const adminFeedback = () => {

        // axios to GET the data
        axios.get('/feedback')
            .then((response) => {
                // console log the response
                console.log('Response from GET:', response);
                // dispatch to redux
                dispatch({
                    type: 'GET_FEEDBACK',
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log('Error getting feedback:', error);
                alert('Error getting data. Please try again.');
            });
    } // end Admin

    return (
        <div>
            <div>
                <h1>Feedback Results</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {adminList.map( (feedback, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <td>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<DeleteIcon />}
                                        >Delete</Button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            <Button
                size="medium"
                variant="contained"
                color="primary"
                onClick={() => adminFeedback()}
            >
                Check Feedback
            </Button>
        </div>
    )
} // end Admin

// export Admin
export default Admin;