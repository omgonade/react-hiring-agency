import React from 'react';
import Button from '@mui/material/Button';

const PostalDetails = (props) => {
    let nextStep = props.nextStep;
    let prevStep = props.prevStep;
    return (
        <div className="application-form-container">PostalDetails
            <Button sx={{
                color: "failure"
            }} variant="contained" size="large" onClick={(event) => {
                event.preventDefault();
                prevStep();
            }}>Back</Button>
            <Button sx={{
                backgroundColor: '#5D3FD3', '&:hover': {
                    backgroundColor: '#1976D2',
                }
            }} variant="contained" size="large" onClick={(event) => {
                event.preventDefault();
                nextStep();
            }}>Continue</Button>
        </div>
    )
}

export default PostalDetails;