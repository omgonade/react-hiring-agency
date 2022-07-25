import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ApplyFor = (props) => {
    return (
        <FormControl sx={{ m: 1, minWidth: 270 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Apply for </InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={props.post}
                onChange={props.handlepostApplyChange}
                autoWidth
                label="Apply for"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Front End</MenuItem>
                <MenuItem value={2}>BackEnd</MenuItem>
                <MenuItem value={3}>Software testing</MenuItem>
            </Select>
        </FormControl>
    )
}
export default ApplyFor;