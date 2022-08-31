import React from 'react';
import PersonalDetails from './PersonalDetails';
import PostalDetails from './PostalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Education from './Education';
import WorkExperience from './workExperience';
import { useState } from "react";

const UserForm = (props) => {
    const minAge = 18;
    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() - minAge);
    const [dateOfBirth, setdateOfBirth] = React.useState(maxDate);
    const handleDateChange = (input) => (date) => {
        setdateOfBirth({ ...values, [input]: date });
    }
    const step = props.step;
    const setStep = props.setStep;
    const [values, setValues] = useState({
        step: 1,
        name: '',
        fatherName: '',
        gender: '',
        maritalStatus: '',
        nationality: ''
    });

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleChange = (input) => (event) => {
        setValues({ ...values, [input]: event.target.value });
    };

    switch (step) {
        case 1:
            return (
                <PersonalDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                    maxDate={maxDate}
                    dateOfBirth={dateOfBirth}
                    handleDateChange={handleDateChange}
                />
            );
        case 2:
            return (
                <PostalDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                />
            );
        case 3:
            return(
                <Education
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                />
            );
        case 4:
            return (
                <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                />
            );
        case 5:
            return <Success />;
        default:
            (console.log('This is a multi-step form built with React.'))
    }
}

export default UserForm;
