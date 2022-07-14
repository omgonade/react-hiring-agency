import React from 'react';
import '../css/ApplicationForm.css';
import UserForm from './UserForm';
import AdvtSelect from './AdvtSelect';

const ApplicationForm = (props) => {
    let advtNum = props.advtNum;
    let handleAdvtSelectChange = props.handleAdvtSelectChange;
    const step = props.step;
    const setStep = props.setStep;
    return (
        <div className='application-form-container'>
            <h1>Application Form</h1>
            {(step != 4) ? <AdvtSelect advtNum={advtNum} handleAdvtSelectChange={handleAdvtSelectChange} /> : null}

            {advtNum ? <UserForm step={step} setStep={setStep} /> : null}
        </div>
    )
}

export default ApplicationForm;