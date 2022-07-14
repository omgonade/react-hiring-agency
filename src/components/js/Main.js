import React from 'react';
import ApplicationForm from './ApplicationForm';
import { useState } from "react";

const Main = () => {
    const [advtNum, setAdvtNum] = useState();
    const handleAdvtSelectChange = (event) => {
        setAdvtNum(event.target.value);
    };
    const [step, setStep] = useState(1);
    return (
        <div>
            <ApplicationForm advtNum={advtNum} handleAdvtSelectChange={handleAdvtSelectChange} step={step} setStep={setStep} />
        </div>
    )
}

export default Main;