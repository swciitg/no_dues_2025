import { useState,useEffect } from "react";
import DuesStatus from "../components/duestatus";
import './index.css';
import DuesList from "../components/duelist";
const StudentDashboard = () => {

    return ( <div className="main">
        <DuesStatus/>
        <div className="certificate">
            <div className="certificate_title">
                 <p>Download Your No Dues Certificate</p>
            </div>
            <div className="certificate_button">
                <button>Download Certificate</button>
                </div>
        </div>
        <DuesList/>
    </div> );
}
 
export default StudentDashboard;