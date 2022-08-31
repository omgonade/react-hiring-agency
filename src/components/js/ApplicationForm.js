import React from 'react';
import '../css/ApplicationForm.css';
import UserForm from './UserForm';
import ApplyFor from './ApplyFor';
import {Route,Routes} from "react-router-dom";
import { About } from './components/About';
import { ApplyNow } from './components/ApplyNow';
import { Contact } from './components/Contact';
import { Policy } from './components/Policy';
import { TermsCondition } from './components/TermsCondition';

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
            {/* <Routes>
                <Route path="/" element={}></Route>
            </Routes> */}
        </div>
    )
}

export default ApplicationForm;