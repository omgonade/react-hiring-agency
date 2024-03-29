import React, { useState } from 'react';
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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Year from './Year';
import DeleteIcon from '@mui/icons-material/Delete';
const Education = (props) => {
    let values = props.values;
    let handleChange = props.handleChange;
    let nextStep = props.nextStep;
    let prevStep = props.prevStep;
    const [selectedDate, handleDateChange] = useState(new Date());
    const [inputList, setinputList] = useState([{ degree: '', marks3: '', university: '', PassingYear: '', subject: '' }]);
    const handleinputchange = (e, index) => {
        const { degreeN, value } = e.target;
        const list = [...inputList];
        list[index][degreeN] = value;
        setinputList(list);
    }

    const handleremove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setinputList(list);
    }
    const handleaddclick = () => {
        setinputList([...inputList, { degree: '', marks3: '', university: '', PassingYear: '', subject: '' }]);
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

                        <h2 className='form-header'>Educational Qualification</h2>
                        <h3>High School/10th</h3>
                        <TextField
                            id="outlined-helperText"
                            label="Board"
                            value={values.board}
                            onChange={handleChange('Board')}
                        /><br />
                        <Year /><br />
                        <TextField
                            type='number'
                            InputProps={{
                                inputProps: {
                                    max: 100, min: 40
                                }
                            }}
                            id="outlined-helperText"
                            label="%age of marks"
                            value={values.marks1}
                            onChange={handleChange('marks1')}
                        /><br />
                        <TextField
                            id="outlined-helperText"
                            label="Subjects"
                            value={values.subject1}
                            onChange={handleChange('subject1')}
                        /><br />
                        <input
                            className='choose'
                            accept="image/*"
                            type="file"
                        /><br />
                        <h3>Intermediate/10+2</h3>
                        <TextField
                            id="outlined-helperText"
                            label="Board"
                            value={values.board}
                            onChange={handleChange('Board')}
                        /><br />
                        <Year /><br />
                        <TextField
                            type='number'
                            InputProps={{
                                inputProps: {
                                    max: 100, min: 40
                                }
                            }}
                            id="outlined-helperText"
                            label="%age of marks"
                            value={values.marks2}
                            onChange={handleChange('marks2')}
                        /><br />
                        <TextField
                            id="outlined-helperText"
                            label="Subjects"
                            value={values.subject2}
                            onChange={handleChange('subject2')}
                        /><br />
                        <input
                            className='choose'
                            accept="image/*"
                            type="file"
                        /><br />
                        <h3>UG/PG</h3>
                        {
                            inputList.map((x, i) => {
                                return (
                                    <>
                                        <TextField
                                            id="outlined-helperText"
                                            label="Degree"
                                            value={values.degree}
                                            onChange={e => handleinputchange(e, i)}
                                        /><br />
                                        {/* <Year /><br /> */}
                                        <TextField
                                            type='number'
                                            InputProps={{
                                                inputProps: {
                                                    max: 100, min: 40
                                                }
                                            }}
                                            id="outlined-helperText"
                                            label="%age of marks"
                                            value={values.marks3}
                                            onChange={e => handleinputchange(e, i)}
                                        /><br />
                                        <TextField
                                            id="outlined-helperText"
                                            label="University/Institute"
                                            value={values.university}
                                            onChange={e => handleinputchange(e, i)}
                                        />
                                        <br />
                                        <Year /><br />
                                        <TextField
                                            id="outlined-helperText"
                                            label="Subject"
                                            value={values.subject2}
                                            onChange={e => handleinputchange(e, i)}
                                        /><br />
                                        <input
                                            className='choose'
                                            accept="image/*"
                                            type="file"
                                        /><br />
                                        <div>
                                            {
                                                inputList.length -1=== i && i!==0 &&
                                                <DeleteIcon onClick={() => handleremove(i)} />
                                            }

                                            {inputList.length - 1 === i &&
                                                <AddIcon
                                                    onClick={handleaddclick}
                                                />}

                                        </div>



                                    </>
                                )
                            })
                        }

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
export default Education;