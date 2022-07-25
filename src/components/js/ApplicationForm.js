import React from 'react';
import '../css/ApplicationForm.css';
import UserForm from './UserForm';
import ApplyFor from './ApplyFor';
const ApplicationForm = (props) => {
    let post = props.post;
    let handlepostApplyChange = props.handlepostApplyChange;
    const step = props.step;
    const setStep = props.setStep;
    return (
        <div className='application-form-container'>
            <h1>Application Form</h1>
            {(step != 5) ? <ApplyFor post={post} handlepostApplyChange={handlepostApplyChange} /> : null}

            {post ? <UserForm step={step} setStep={setStep} /> : null}
        </div>
    )
}

export default ApplicationForm;