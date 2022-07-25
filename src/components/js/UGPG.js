import React from "react";
const UGPG = () => {
    <div>
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
            value={values.marks}
            onChange={handleChange('marks')}
        /><br />
        <TextField
            id="outlined-helperText"
            label="Subjects"
            value={values.subject}
            onChange={handleChange('subject')}
        /><br />
        <input
            className='choose'
            accept="image/*"
            type="file"
        /><br />
    </div>
}
export default UGPG