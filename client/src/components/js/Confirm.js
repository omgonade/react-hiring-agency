import React from 'react';
import Button from '@mui/material/Button';
import { List, ListItem, ListItemText } from '@material-ui/core/';

const Confirm = (props) => {
    let name = props.values.name;
    let fatherName = props.values.fatherName;
    let dateOfBirth = props.values.dateOfBirth;
    let gender = props.values.gender;
    let maritalStatus = props.values.maritalStatus;
    let nationality = props.values.nationality;
    let nextStep = props.nextStep;
    let prevStep = props.prevStep;
    return (
        <div className="application-form-container">Confirm
            <List>
                <ListItem>
                    <ListItemText primary="Name" secondary={name} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Father's Name" secondary={fatherName} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Date of Birth" secondary={dateOfBirth} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Gender" secondary={gender} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Marital Status" secondary={maritalStatus} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Nationality" secondary={nationality} />
                </ListItem>
            </List>
            <br />
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

export default Confirm;