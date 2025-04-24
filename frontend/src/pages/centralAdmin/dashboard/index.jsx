import { useContext, useEffect, useRef, useState } from "react"
import AdminDashboardTeamplate from "../../../components/adminDashboardTemplate";
import { sectionToSubSection, subsectionTpSection } from "../../../utils/hcData";
import { Context } from "../../../context/context";
import { getStudents, getStudentsBySection, getStudentsBySubSection } from "../../../api/admin";
import { AdminContext } from "../../../context/adminContext";


const AdminDashboard = ()=>{

    const [path , setPath] = useState([]);
    const [mp , setMp] = useState([]);
    const [data, setData] = useState();
    const firstRef = useRef(true);

    const context = useContext(Context);
    const {role} = context;

    const adminContext = useContext(AdminContext);
    const {setStudData} = adminContext;

    useEffect(()=>{
        async function fn () {
            let res;
            if(role==='super-admin')  res = await getStudents();
            else if(sectionToSubSection[role]!=undefined) res = await getStudentsBySection(`${role}`);
            else if(role!='student') res = await getStudentsBySubSection(`${subsectionTpSection[role]}/${role}`);

            if(!res) return;
            setStudData(res.studData);
            if(role==='super-admin') {
                setMp([sectionToSubSection['No Dues'][1]]);
                setData(sectionToSubSection['No Dues'][1]);
                setPath(['No Dues'])
            }
            else if(sectionToSubSection[role]!=undefined) {
                setMp([sectionToSubSection[role][1]]);
                setData(sectionToSubSection[role][1]);
                setPath([role]);
            }
            else if(role!=='student') {
                setMp([res.studData]);
                setData(res.studData);
                setPath([role]);
            }
        }
        
        if(!firstRef.current) return;
        firstRef.current = false;
        fn();
    },[role])

    return (
        <>
        { data!==undefined && 
        <AdminDashboardTeamplate path={path} setData={setData} data={data} setPath={setPath} mp={mp} setMp={setMp}/>
        }
        </>
    )
}

export default AdminDashboard