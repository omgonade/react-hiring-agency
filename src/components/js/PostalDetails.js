import React, { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import '../css/ApplicationForm.css';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const PostalDetails = (props) => {
    let values = props.values;
    let handleChange = props.handleChange;
    let nextStep = props.nextStep;
    let prevStep = props.prevStep;
    const [phone, setPhone] = useState();
    function handleOnChange(value) {
        setPhone(value)
    }
    // const [country, setCountry] = useState([]);
    // let Country=require('country-state-city').Country;
    // const countries=Country.getAllCountries();
    // useEffect(() => {
    //     setCountry(countries);
    // },[])
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const Country = require('country-state-city').Country;
    const State=require('country-state-city').State;
    const City=require('country-state-city').City;
    const countries = Country.getAllCountries();
    const states=State.getAllStates();
    const cities=City.getAllCities();
    useEffect(() => {
        setCountry(countries);
    }, [])

    const handleCountry=(id)=>{
        const dt= states.filter(x=>x.countryId===id);
        setState(dt);
    }
    const handleState=(id)=>{
        const dt=cities.filter(x=> x.stateId===id);
        setCity(dt);
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
                        <h2 className='form-header'>Postal Address</h2>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Enter your address"
                            multiline
                            maxRows={4}
                            value={values.address}
                            onChange={handleChange.address}
                        />
                        <br />
                        <FormControl sx={{ minWidth: 400 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="ddlCountry"
                                onChange={(e) => handleCountry(e.target.value)}                                
                                value={country}
                                autoWidth
                                label="Country"
                            >                                
                                {
                                    country&& 
                                    country !==undefined ?
                                    country.map((ctr,index)=>{
                                        return(
                                            <MenuItem key={index} value={ctr.id}>{ctr.name}</MenuItem>
                                        )
                                    })
                                    :"No Country"
                                }
                            </Select>
                        </FormControl><br />

                        <FormControl sx={{ minWidth: 400 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="ddlStates"
                                value={props.state}
                                onChange={(e) => handleState(e.target.value)}
                                autoWidth
                                label="State"
                            >
                                <MenuItem> select state</MenuItem>
                                {
                                    state && 
                                    state !== undefined ?
                                    state.map((ctr,index) => {
                                        return(
                                            <option key={index} value={ctr.id}>{ctr.name}</option>
                                        )
                                    })
                                    :"No State"
                                }
                                
                            </Select>
                        </FormControl><br/>
                        
                        <FormControl sx={{ minWidth: 400 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={props.City}
                                onChange={props.handleCityChange}
                                autoWidth
                                label="City"
                            >
                                
                            </Select>
                        </FormControl><br />

                        <TextField
                            id="outlined-helperText"

                            label="Pincode"
                            value={values.pincode}
                            onChange={handleChange('Pincode')}
                        /><br />


                        <PhoneInput
                            country={'in'}
                            value={phone}
                            onChange={handleOnChange}
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
                        }}>Continue</Button>
                    </div>
                </Paper>
            </Box>
        </div>
    )
}

export default PostalDetails;