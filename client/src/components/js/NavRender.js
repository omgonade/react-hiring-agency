import React from 'react'

import '../css/ApplicationForm.css';
import UserForm from './UserForm';
import ApplyFor from './ApplyFor';
import {Route,Routes} from "react-router-dom";
import ApplicationForm from './ApplicationForm';
import { About } from './components/About';
import { ApplyNow } from './components/ApplyNow';
import { Contact } from './components/Contact';
import { Policy } from './components/Policy';
import { TermsCondition } from './components/TermsCondition';
export const NavRender = (props) => {
  return (
    <div>
        <Routes>
            {/* <Route path="/" element={<ApplicationForm/>}/> */}
            <Route path="/Apply%20Now" element={<ApplyNow/>}/>
            <Route path="/Contact%20Us" element={<Contact/>}/>
            <Route path="/About%20Us" element={<About/>}/>
            <Route path="/Privacy%20Policy" element={<Policy/>}/>
            <Route path="/Terms%20and%20Conditions" element={<TermsCondition/>}/>
        </Routes>
    </div>
  )
}
