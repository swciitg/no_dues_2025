import { useState,useEffect } from "react";

const DuesList = () => {
    const [dues, setDues] = useState([{'department':'Hostel Affairs','status':'NO DUE','location':'Core 3, Academic Complex', 'time':'2:00pm - 6:00pm'},{'department':'Hostel Affairs','status':'Pending','location':'Core 3, Academic Complex', 'time':'2:00pm - 6:00pm'},{'department':'Hostel Affairs','status':'Pending','location':'Core 3, Academic Complex', 'time':'2:00pm - 6:00pm'}]);
    const firstindex = dues.findIndex((item) => item.status === 'Pending');
    useEffect(() => {
        console.log(dues);
        console.log(firstindex);
    }, []);

    return ( <div className="dues_list">        
            {dues.map((item, index) => (
                <div className={item.status=='Pending' ? 'card_container_active' : 'card_container'} key={index}>
                <div style={firstindex == index ? {background:'#2164E8', color:'white'}: {}}className="card_index"><h1>{index+1}</h1></div>
                <div style={firstindex == index ? {background:'#2164E8'}: {}} className="card_outer">
                <div className="card_inner">
                <div className="card_details">
                    <div className="container1">
                        <div className="title"><h1 style={firstindex == index ? {color:'white'}: {}}>{item.department}</h1></div>
                        <div className="location"><p style={firstindex == index ? {color:'#C7D7F6'}: {}}>{item.location}</p></div>
                    </div>
                    <div className="container2">
                        <div style={firstindex == index ? {color:'white'}: {}} className="status"><p>{item.status}</p></div>
                        <div className="time"><p style={firstindex == index ? {color:'white'}: {}}>{item.time}</p></div>
                    </div>
                </div>
                </div>
                <div style={firstindex == index ? {background:'#3DA5D9'}: {}} className="carddesign"></div>
                </div>
                </div>
            ))}
        </div>
     );
}
 
export default DuesList;