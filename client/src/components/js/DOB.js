import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
function DOB(props) {

  let minAge = new Date();
  let MinAge = 18;
  minAge.setFullYear(minAge.getFullYear() - MinAge);
  const [value, setValue] = React.useState(minAge);
  function onChangeHandler(newValue) {
    setValue(newValue);
    props.localStorage.setItem('dob', JSON.stringify(value))    
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
        <DatePicker
          disableFuture
          label="Date of Birth"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={onChangeHandler}
          renderInput={(props) => <TextField {...props} />}
          maxDate={minAge}          
          
        />
      </Stack>
      
    </LocalizationProvider>
    
  )
}
export default DOB;