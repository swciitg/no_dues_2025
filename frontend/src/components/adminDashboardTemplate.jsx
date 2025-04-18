import { useState } from "react"
import HeaderTab from "./header";
import SearchBar from "./searchbar";
import FilterButton from "./filter";
import DueCard from "./adminDueCard";
import { BoardData , DeptData } from "../pages/centralAdmin/dashboard/fakeData";


const AdminDashboardTeamplate = (props)=>{

    const [searchKey , setSearchKey] = useState('');
    const {data,path,setData,setPath} = props;

    function setDataForSections(item) {
        setData(DeptData);
        setPath((path)=> [...path, item.title])
    }

    function backTrack() {
        setData(BoardData);
        setPath(["No Dues"]);
    }

    return (
        <div style={{display:'flex' , alignItems:'center', justifyContent:'center' , width:'100vw'}}>

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
                        <span style={{cursor:'pointer'}} onClick={()=>{
                            setDataForSections(item)
                        }}>
                        <DueCard title={item.title} 
                        approvedCnt={item.approvedCnt} 
                        total={item.total} 
                        pendingCnt={item.pendingCnt} 
                        color={index%3==0?'#2364AA':(index%3==1?'#3DA5D9':'#73BFB8')} />
                        </span>
                    )
                })
                }
                </div>
            </div>

        </div>
    )
}

export default AdminDashboardTeamplate