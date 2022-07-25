import React from 'react';
import ApplicationForm from './ApplicationForm';
import { useState } from "react";

const Main = () => {
    const [post, setPost] = useState();
    const handlepostApplyChange = (event) => {
        setPost(event.target.value);
    };
    const [step,setStep]=useState(1);
    return(
        <div>
            <ApplicationForm post={post} handlepostApplyChange={handlepostApplyChange} step={step} setStep={setStep}/>
        </div>
    )
}

export default Main;