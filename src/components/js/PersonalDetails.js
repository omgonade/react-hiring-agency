import React from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import '../css/ApplicationForm.css';
import Button from '@mui/material/Button';

const PersonalDetails = (props) => {
    let values = props.values;
    let handleChange = props.handleChange;
    let nextStep = props.nextStep;
    let maxDate = props.maxDate;
    let dateOfBirth = props.dateOfBirth;
    let handleDateChange = props.handleDateChange;
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
                        {/* <h1>{process.env.REACT_APP_API_TOKEN}</h1> */}
                        <h2 className='form-header'>Personal Details</h2>
                        <TextField
                            id="outlined-helperText"
                            label="Name"
                            value={values.name}
                            onChange={handleChange('name')}
                        />
                        <br />
                        <TextField
                            id="outlined-helperText"
                            label="Father's Name"
                            value={values.fatherName}
                            onChange={handleChange('fatherName')}
                        />
                        <br />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3} >
                                <DesktopDatePicker
                                    maxDate={maxDate}
                                    label="Date of Birth"
                                    inputFormat="MM/dd/yyyy"
                                    value={dateOfBirth}
                                    onChange={handleDateChange(dateOfBirth)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                        <br />
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                defaultValue={values.gender}
                                onChange={handleChange('gender')}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Marital Status</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                defaultValue={values.maritalStatus}
                                onChange={handleChange('maritalStatus')}
                            >
                                <FormControlLabel value="unmarried" control={<Radio />} label="Un-married" />
                                <FormControlLabel value="married" control={<Radio />} label="Married" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <TextField
                            id="outlined-helperText"
                            label="Nationality"
                            value={values.nationality}
                            onChange={handleChange('nationality')}
                        />
                        <br />
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

export default PersonalDetails;