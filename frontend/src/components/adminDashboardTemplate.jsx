import { useContext, useEffect, useState } from "react"
import HeaderTab from "./header";
import SearchBar from "./searchbar";
import FilterButton from "./filter";
import DueCard from "./adminDueCard";
import StudentCard from "./adminStudentCard";
import AdminCSVUploader from "./adminUpload";
import { sectionToSubSection } from "../utils/hcData";
import { AdminContext } from "../context/adminContext";
import { searchFilter } from "../utils/search";
import SwitchToggle from "./filterSwitch";


const AdminDashboardTeamplate = (props)=>{

    const {data,path,setData,setPath,mp,setMp} = props;

    const adminContext = useContext(AdminContext);
    const {studData} = adminContext;

    const [searchKey , setSearchKey] = useState('');
    const [duesOnly , showDuesOnly] = useState(false);

    function setDataForSections(item) {
        if(sectionToSubSection[item.title]!=undefined) {
            setData(sectionToSubSection[item.title][1]);
            setMp((mp)=>[...mp,sectionToSubSection[item.title][1]]);
        } else {
            setData(studData); 
            setMp((mp)=>[...mp,studData]); 
        }
        setPath((path)=> [...path, item.title]);
    }

    function backTrack(index) {
        setData(mp[index]);
        setPath((path)=>path.slice(0,index+1));
        setMp(prev => prev.slice(0, index + 1));
    }

    return (
        <div style={{display:'flex', flexDirection:'column' , alignItems:'center', width:'100vw',marginTop:'16vh',gap:'20px'}}>

            {
                data!=undefined && data.length>1 &&
                data[0].level===undefined &&
                <AdminCSVUploader/>
            }

            <div className="dashboard-outer-card" style={{display:'flex', flexDirection:'column' , background:'#fff'}}>

                <HeaderTab path={path} backTrack={backTrack}/>
                
                <div style={{display:'flex',margin:'20px 0px',justifyContent:'space-between',alignItems:'center'}}>
                    <SearchBar onSearch={setSearchKey}/>
                    {/* <FilterButton/> */}
                    <SwitchToggle onToggle={showDuesOnly}/>
                </div>

                <div className="dashboard-inner-card" style={{display:'flex',flexDirection:'column',gap:'20px',overflowY:'scroll'}}>
                {
                data!==undefined &&
                data.map((item,index) =>{
                    return(
                       
                        item.level>1?
                        (
                        searchFilter(item.title,searchKey) && (!duesOnly || item.pending>0) &&
                        <span key={index} style={{cursor:'pointer'}} onClick={()=>{
                            setDataForSections(item)
                        }}>
                        <DueCard title={item.title} 
                        pending={item.pending} 
                        color={index%3==0?'#2364AA':(index%3==1?'#3DA5D9':'#73BFB8')} />
                        </span>
                        ):
                        (
                        searchFilter(item.name,searchKey) && 
                        // <span key={index}>
                            <StudentCard key={index} student={item} path={path} duesOnly={duesOnly}/>
                        // </span>
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