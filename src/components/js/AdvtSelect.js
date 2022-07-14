import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AdvtSelect = (props) => {
    return (
        <FormControl sx={{ m: 1, minWidth: 270 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Select Advertisement Number</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={props.advtNum}
                onChange={props.handleAdvtSelectChange}
                autoWidth
                label="Select Advertisement Number"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1/2021/52</MenuItem>
                <MenuItem value={2}>1/2021/53</MenuItem>
            </Select>
        </FormControl>
    )
}

export default AdvtSelect;