import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';

function DOB(props) {

  let minAge = new Date();
  let MinAge = 18;
  minAge.setFullYear(minAge.getFullYear() - MinAge);
  const [value, setValue] = React.useState(minAge);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
        <DatePicker
          disableFuture
          label="Date of Birth"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);            
          }}                   
          renderInput={(params) => <TextField {...params} />}
          maxDate={minAge}
          
        />        
      </Stack>
      
    </LocalizationProvider>
  )
}
export default DOB;