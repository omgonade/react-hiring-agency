import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';

function Year(props) {

  let minVal = new Date();
  let MinVal = 2;
  minVal.setFullYear(minVal.getFullYear() - MinVal);
  const [value, setValue] = React.useState(minVal);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
        <DatePicker
          disableFuture
          label="Passing Year"
          openTo="year"
          views={['year']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);            
          }}                   
          renderInput={(params) => <TextField {...params} />}
          maxDate={minVal}
          
        />        
      </Stack>
      
    </LocalizationProvider>
  )
}
export default Year;