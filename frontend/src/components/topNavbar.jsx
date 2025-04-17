import { useContext, useState } from "react"
import { Context } from "../context/context"
import iitg from '../assets/iitg.png'
import profile from '../assets/profile.png'


const TopNavbar = ()=> {

    const context = useContext(Context);
    const {name} = context;
    
    return (
        <>
            <div className="top-navbar" style={{background:'#fff' , width:'100%' , display:'flex' , 
            justifyContent:'space-between' , alignItems:'center' , position:'fixed' , top:0 , left:0}}>

                <div className="no-dues-logo" style={{display:'flex' , alignItems:'center' , margin:'20px' , gap:'5px'}}>
                    <img src={iitg} alt="" style={{width:'40px'}}/>
                    <div style={{fontSize:'1.5rem', fontWeight:'600'}}>No Dues Portal</div>
                </div>

                <div className="profile" style={{display:'flex' , alignItems:'center' , margin:'20px' , gap:'5px'}}>
                    <img src={profile} alt="" style={{width:'15px'}}/>
                    <div style={{color:'#2164E8' , fontSize:'1rem'}}>{name}</div>
                </div>

            </div>
        </>
    )

}

export default TopNavbar;