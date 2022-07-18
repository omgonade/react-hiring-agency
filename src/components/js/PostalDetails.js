import React, { useState } from 'react';
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
import { TransgenderTwoTone } from '@mui/icons-material';

const PostalDetails = (props) => {
    let values = props.values;
    let handleChange = props.handleChange;
    let nextStep = props.nextStep;
    let prevStep = props.prevStep;
    const [phone,setPhone]=useState();
    function handleOnChange(value) {
        setPhone(value)
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
                        <textarea placeholder='Enter your address' className='address' rows='4'></textarea>
                        <br />
                        <TextField
                            id="outlined-helperText"
                            label="District"
                            value={values.name}
                            onChange={handleChange('name')}
                        /><br />

                        <FormControl sx={{ minWidth: 400 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={props.advtNum}
                                onChange={props.handleAdvtSelectChange}
                                autoWidth
                                label="State"
                            >
                                <MenuItem value={'UP'}>Uttar Pradesh</MenuItem>
                                <MenuItem value={'MH'}>Maharashtra</MenuItem>
                            </Select>
                        </FormControl><br />
                        <TextField
                            id="outlined-helperText"

                            label="Pincode"
                            value={values.pincode}
                            onChange={handleChange('Pincode')}
                        /><br />
                        {/* <MuiPhoneNumber defaultCountry={'in'} onChange={handleOnChange} />,
                        document.getElementById('root') */}
                        
                        <PhoneInput
                            country={'us'}
                            value={phone}
                            onChange={handleOnChange}
                        /><br/>

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