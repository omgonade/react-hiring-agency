import React from 'react';
import ApplicationForm from './ApplicationForm';
import { useState } from "react";
import { NavRender } from './NavRender';
import { Routes,Route } from 'react-router-dom';
import { ApplyNow } from './components/ApplyNow';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Policy } from './components/Policy';
import { TermsCondition } from './components/TermsCondition';
const Main = () => {
    const [post, setPost] = useState();
    const handlepostApplyChange = (event) => {
        setPost(event.target.value);
    };
    const [step, setStep] = useState(1);
    return (
        <div>
            {/* <ApplicationForm post={post} handlepostApplyChange={handlepostApplyChange} step={step} setStep={setStep} /> */}
            <Routes>
            <Route path="/" element={<ApplicationForm post={post} handlepostApplyChange={handlepostApplyChange} step={step} setStep={setStep} />}/>
            <Route path="/Apply%20Now" element={<ApplyNow/>}/>
            <Route path="/Contact%20Us" element={<Contact/>}/>
            <Route path="/About%20Us" element={<About/>}/>
            <Route path="/Privacy%20Policy" element={<Policy/>}/>
            <Route path="/Terms%20and%20Conditions" element={<TermsCondition/>}/>
        </Routes>
        </div>
    )
}

export default Main;