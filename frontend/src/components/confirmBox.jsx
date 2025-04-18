import cross from '../assets/cross.svg'
import { btnCSS } from './adminStudentCard'

export const bgCSS = {
    height:'100vh',width:'100vw',zIndex:'200', position:'fixed', top:0, left:0
}

const ConfirmBox = (props)=>{

    const {msg , close , callback} = props

    return(
        <div style={{position:'fixed', display:'flex', justifyContent:'center',
        alignItems:'center', width:'100vw', height:'100vh',top:0,left:0}}>

        <div style={bgCSS} className='glassmorphism'></div>

        <div style={{display:'flex' , flexDirection:'column', justifyContent:'center', zIndex:300,
            alignItems:'center', width:'20vw', position:'relative',background:'#fff',borderRadius:'10px',
            boxShadow:'0px 0px 20px #000', padding:'20px'}}>

            <img src={cross} alt='' onClick={()=>{close(false)}} 
            style={{width:'30px',position:'absolute', top:'10px', right:'10px'}}/>

            <div style={{fontSize:'1.4rem',margin:'10px'}}>{msg}</div>
            <button style={{...btnCSS,background:'#2164E8',color:'white',fontSize:'1.1rem'}}
            onClick={()=>{callback()}}>Confirm</button>

        </div>
        </div>
    )
}

export default ConfirmBox