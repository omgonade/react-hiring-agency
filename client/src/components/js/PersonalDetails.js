import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import '../css/ApplicationForm.css';
import Button from '@mui/material/Button';
import DOB from './DOB';
import Select from '@mui/material/Select';
import { Country, State, City } from 'country-state-city';
import InputLabel from '@mui/material/InputLabel'
import { MenuItem } from '@mui/material';
const PersonalDetails = (props) => {
    let values = props.values;
    let handleChange = props.handleChange;
    let nextStep = props.nextStep;
    const [selectedDate, handleDateChange] = useState(new Date());
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    let Country = require('country-state-city').Country;
    let State=require('country-state-city').State;
    const countries = Country.getAllCountries();
    const states=State.getAllStates();
    useEffect(() => {
        setCountry(countries);
    }, [])

    const handleCountry=(id)=>{
        const dt= states.filter(x=>x.countryId===id);
        setState(dt);
    }
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
                        <DOB />
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
                        <FormControl sx={{ minWidth: 400 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Nationality</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="ddlCountry"
                                value={props.nation}
                                onChange={(e)=>handleCountry(e.target.value)}
                                autoWidth
                                label="Nationality"
                            >
                                <MenuItem value="0">Select Country</MenuItem>
                                {
                                    country &&
                                        country !== undefined ?
                                        country.map((ctr, index) => {
                                            return (
                                                <MenuItem key={index} value={ctr.isoCode}>{ctr.name}</MenuItem>
                                            )
                                        })
                                        : "No Country"
                                }
                            </Select>
                        </FormControl><br />

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