import { useEffect, useState } from "react"
import HeaderTab from "./header";
import SearchBar from "./searchbar";
import FilterButton from "./filter";
import DueCard from "./adminDueCard";
import { BoardData , DeptData, StudData } from "../pages/centralAdmin/dashboard/fakeData";
import StudentCard from "./adminStudentCard";
import AdminCSVUploader from "./adminUpload";


const AdminDashboardTeamplate = (props)=>{


    const {data,path,setData,setPath} = props;

    const [searchKey , setSearchKey] = useState('');
    function searchFilter(text) {
        if(!searchKey || (searchKey.trim()).length==0) return true;
        let j=0;
        for(let i=0;i<text.length;i++) {
            if((text.toLowerCase())[i]==(searchKey.toLowerCase())[j]) j++;
            if(j==searchKey.length) return true;
        }
        return false;
    }

    const [mp , setMp] = useState([
        BoardData,
        DeptData,
        StudData]);
    // this will be dynamic when data is sent from backend as this is fake data mapping for now

    function setDataForSections(item) {
        setData(mp[item.level]);
        // in prepocessing map the item.name with the appropiate data and then set data here accordingly. 
        // Then instead of mp some other varibale will be used. Keep that variable in the adminContext as will be chnaging 
        // also update this mp for adding of this data. this mp will be then used only for backtracking
        setPath((path)=> [...path, item.title]);
    }

    function backTrack(index) {
        setData(mp[index]);
        setPath((path)=>path.slice(0,index+1));
        // remove the excess data from the mp
    }

    return (
        <div style={{display:'flex', flexDirection:'column' , alignItems:'center', width:'100vw',marginTop:'16vh',gap:'20px'}}>

            {
                path.length==3 && // note this one for non central admin
                // this needs to be figured out. Probably some other dependencies
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
                        // since now the level ordering is reversed, this condition will become 
                        // item.level>1?
                        (
                        searchFilter(item.title) && 
                        <span key={index} style={{cursor:'pointer'}} onClick={()=>{
                            setDataForSections(item)
                        }}>
                        <DueCard title={item.title} 
                        approvedCnt={item.approvedCnt} 
                        total={item.total} 
                        pendingCnt={item.pendingCnt} 
                        color={index%3==0?'#2364AA':(index%3==1?'#3DA5D9':'#73BFB8')} />
                        </span>
                        ):
                        (
                        searchFilter(item.name) &&
                        <span key={index}>
                            <StudentCard student={item}/>
                        </span>
                        )
                       

                    )
                })
                }
                </div>
            </div>

        </div>
    )
}

export default AdminDashboardTeamplate