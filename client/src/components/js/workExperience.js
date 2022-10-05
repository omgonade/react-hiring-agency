import React from "react";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
const WorkExperience = (props) => {
    let values = props.values;
    let handleChange = props.handleChange;
    let nextStep = props.nextStep;
    let prevStep = props.prevStep;

    return (
        <div className="application-form-container">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                }}
            >
                <Paper elevation={12} sx={{ paddingRight: 20, paddingLeft: 20, paddingTop: 5, paddingBottom: 10, backgroundColor: '#E6E6FA' }}>
                    <div className='application-form'>

                        <h2 className='form-header'>Work Experience</h2>
                        <TextField
                            id="outlined-helperText"
                            label="Company Name"
                            value={values.companyname}
                            onChange={handleChange('companyname')}
                        /><br />
                        
                        <TextField
                            type='number'
                            id="outlined-helperText"
                            label="Period of employment(In Months)"
                            value={values.POE}
                            onChange={handleChange('POE')}
                        /><br />
                        <TextField
                            id="outlined-helperText"
                            label="Designation"
                            value={values.designation}
                            onChange={handleChange('designation')}
                        /><br />
                        <input
                            className='choose'
                            accept="image/*"
                            type="file"
                        /><br />

                        <Button sx={{
                            color: "failure"
                        }} variant="contained" size="large" onClick={(event) => {
                            event.preventDefault();
                            prevStep();
                        }}>Back</Button><br />
                        <Button sx={{
                            backgroundColor: '#5D3FD3', '&:hover': {
                                backgroundColor: '#1976D2',
                            }
                        }} variant="contained" size="large" onClick={(event) => {
                            event.preventDefault();
                            nextStep();
                        }}>
                            Continue
                        </Button>
                    </div>
                </Paper>
            </Box>
        </div>
    )
        
}
export default WorkExperience;