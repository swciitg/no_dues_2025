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

    const {student}  = props;

    const [confirm, setConfirm] = useState(false);
    const [dialogBoxData , setDialogBoxData] = useState({});

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
            <div className="admin-student-card" 
            style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>{student.roll}</div>
                <div>{student.name}</div>
                <div style={{color:student.dues?'red':'gray'}}>{student.dues?'Dues':'No Dues'}</div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',gap:'10px'}}>
                    {
                        student.dues? 
                        (<>
                        <button style={{...btnCSS,backgroundColor:'#2164E8'}} onClick={()=>{
                            console.log('click')
                            setConfirm(true);
                            setDialogBoxData({
                                msg:'Confirm that Dues are Cleared?',
                                callback:null // this callback will call the api function
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
                                msg:'Add New Dues?',
                                callback:null // this callback will call the api function
                            })
                        }}>
                            <img src={add} alt='' style={{...imgCSS}}/>
                            <span style={{color:'#fff'}}>Add Dues</span>
                        </button>
                        </>)
                    }
                    <button style={{...btnCSS,backgroundColor:'red'}} onClick={()=>{
                        setConfirm(true);
                        setDialogBoxData({
                            msg:'Remove the Student from the list?',
                            callback:null // this callback will call the api function
                        })
                    }}>
                        <img src={trash} alt='' style={{...imgCSS}}/>
                        <span style={{color:'#fff'}}>Remove</span>
                    </button>
                </div>
            
            </div>
        </>
    )
}

export default StudentCard