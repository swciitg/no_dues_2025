import check from '../assets/check.png'
import add from '../assets/add.svg'
import trash from '../assets/trash.svg'
import { useState } from 'react'
import ConfirmBox from './confirmBox'

export const btnCSS = {
    borderRadius:'10px',
    padding:'5px',
    border:'none',
    height:'40px',
    width:'120px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'5px'
   }

const StudentCard=(props) =>{

    const {student,path,duesOnly}  = props;

    const [confirm, setConfirm] = useState(false);
    const [dialogBoxData , setDialogBoxData] = useState({});

    function checkForDue(list,req) {
        let flag=false;
        list.forEach(item => {
            if(item.due_subsection === req){ 
                flag=true;
            }
        });
        return flag;
    }

    const imgCSS = {
        width:'16px'
    }

    return(
        <>
            {
                !confirm? (<></>) :(
                    <ConfirmBox msg={dialogBoxData.msg} callback={dialogBoxData.callback} close={setConfirm} />
                )
            }
            {
            (!duesOnly || checkForDue(student.dues,path[path.length-1])===duesOnly )
            &&   
            <div className="admin-student-card" 
            style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>{student.rollNo}</div>
                <div style={{width:'25%',textWrap:'wrap'}}>{student.name}</div>
                <div style={{color:student.dues?'red':'gray'}}>{checkForDue(student.dues,path[path.length-1])?'Dues':'No Dues'}</div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',gap:'10px'}}>
                    {
                        checkForDue(student.dues,path[path.length-1])? 
                        (<>
                        <button style={{...btnCSS,backgroundColor:'#2164E8'}} onClick={()=>{
                            setConfirm(true);
                            setDialogBoxData({
                                msg:'Confirm that Dues are Cleared?',
                                callback:{
                                    url:``,
                                    payload:{
                                        rollNo:student.rollNo,
                                        due_section:path[path.length-2],
                                        due_subsection:path[path.length-1]
                                    }, 
                                    action:'CLEAR'
                                }// this callback will call the api function
                            })
                        }}>
                            <img src={check} alt='' style={{...imgCSS}}/>
                            <span style={{color:'#fff'}}>Clear Dues</span>
                        </button>
                        </>):
                        (<>
                        <button style={{...btnCSS,backgroundColor:'#2164E8'}} onClick={()=>{
                            setConfirm(true);
                            setDialogBoxData({
                                msg:'Add New Due?',
                                callback:{
                                    url:``,
                                    payload:{
                                        rollNo:student.rollNo,
                                        name:student.name,
                                        email:student.email,
                                        due_section:path[path.length-2],
                                        due_subsection:path[path.length-1]
                                    }, 
                                    action:'ADD'}
                                // this callback will call the api function
                            })
                        }}>
                            <img src={add} alt='' style={{...imgCSS}}/>
                            <span style={{color:'#fff'}}>Add Due</span>
                        </button>
                        </>)
                    }
                    <button style={{...btnCSS,backgroundColor:'red',width:'40px'}} onClick={()=>{
                        setConfirm(true);
                        setDialogBoxData({
                            msg:'Remove the Student from the list?',
                            callback:null // this callback will call the api function
                        })
                    }}>
                        <img src={trash} alt='' style={{...imgCSS}}/>
                        {/* <span style={{color:'#fff'}}>Remove</span> */}
                    </button>
                </div>
            
            </div>
            }
        </>
    )
}

export default StudentCard