import { useState } from "react"
import HeaderTab from "../components/header";
import SearchBar from "../../../components/searchbar";
import FilterButton from "../../../components/filter";
import DueCard from "../../../components/adminDueCard";


const AdminDashboard = ()=>{

    const [path , setPath] = useState(['No Dues']);
    const [searchKey , setSearchKey] = useState('');

    return (
        <div style={{display:'flex' , alignItems:'center', justifyContent:'center' , width:'100vw'}}>

            <div className="dashboard-outer-card" style={{display:'flex', flexDirection:'column' , background:'#fff'}}>

                <HeaderTab path={path}/>
                
                <div style={{display:'flex',margin:'20px 0px'}}>
                    <SearchBar onSearch={setSearchKey}/>
                    <FilterButton/>
                </div>

                <div className="dashboard-inner-card">
                <DueCard title="Department Dues" approvedCnt={86} total={2056} pendingCnt={23} color={'#2364AA'} />
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard