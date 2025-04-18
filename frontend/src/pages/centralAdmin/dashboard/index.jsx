import { useState } from "react"
import AdminDashboardTeamplate from "../../../components/adminDashboardTemplate";
import { BoardData } from "./fakeData";


const AdminDashboard = ()=>{

    const [path , setPath] = useState(['No Dues']);
    const [data, setData] = useState(BoardData);

    return (
        <>
        <AdminDashboardTeamplate path={path} setData={setData} data={data} setPath={setPath}/>
        </>
    )
}

export default AdminDashboard