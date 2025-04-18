import { useState } from "react"
import HeaderTab from "./header";
import SearchBar from "./searchbar";
import FilterButton from "./filter";
import DueCard from "./adminDueCard";
import { BoardData , DeptData, StudData } from "../pages/centralAdmin/dashboard/fakeData";
import StudentCard from "./adminStudentCard";
import AdminCSVUploader from "./adminUpload";


const AdminDashboardTeamplate = (props)=>{

    const [searchKey , setSearchKey] = useState('');
    const {data,path,setData,setPath} = props;

    const mp = [
        BoardData,
        DeptData,
        StudData
    ] // this will be dynamic when data is sent from backend as this is fake data mapping for now

    function setDataForSections(item) {
        setData(mp[item.level]);
        setPath((path)=> [...path, item.title])
    }

    function backTrack(index) {
        setData(mp[index]);
        setPath((path)=>path.slice(0,index+1));
    }

    return (
        <div style={{display:'flex', flexDirection:'column' , alignItems:'center', width:'100vw',marginTop:'16vh',gap:'20px'}}>

            {
                path.length==3 && 
                <AdminCSVUploader/>
            }

            <div className="dashboard-outer-card" style={{display:'flex', flexDirection:'column' , background:'#fff'}}>

                <HeaderTab path={path} backTrack={backTrack}/>
                
                <div style={{display:'flex',margin:'20px 0px'}}>
                    <SearchBar onSearch={setSearchKey}/>
                    <FilterButton/>
                </div>

                <div className="dashboard-inner-card" style={{display:'flex',flexDirection:'column',gap:'20px',overflowY:'scroll'}}>
                {
                 data.map((item,index) =>{
                    return(
                       
                        item.level<3? // note this for non-central admins 
                        (<span key={index} style={{cursor:'pointer'}} onClick={()=>{
                            setDataForSections(item)
                        }}>
                        <DueCard title={item.title} 
                        approvedCnt={item.approvedCnt} 
                        total={item.total} 
                        pendingCnt={item.pendingCnt} 
                        color={index%3==0?'#2364AA':(index%3==1?'#3DA5D9':'#73BFB8')} />
                        </span>):
                        (<span key={index}>
                            <StudentCard student={item}/>
                        </span>)
                       

                    )
                })
                }
                </div>
            </div>

        </div>
    )
}

export default AdminDashboardTeamplate