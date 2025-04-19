import { useState,useEffect } from "react";

const DuesStatus = () => {
    const [dues, setDues] = useState([{'department':'Hostel Affairs','status':'Pending','location':'Core 3, Academic Complex', 'time':'2:00pm - 6:00pm'}]);

    return ( <div className="dues_status">
        
            <div className="dues_title">
                 <div className="dues_count">
                   <h1>{dues.length}</h1>   
                 </div>
                 <div className="dues_text">
                   <h2>TOTAL DUES</h2>
                 </div>
             </div>
          {dues.length === 0 ? <div className="allclear">ALL CLEARED</div> : <div className="allclear">DUES PENDING</div>}


    </div> );
}
 
export default DuesStatus;