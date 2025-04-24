import { useState , useRef} from 'react'
import { changeDue } from '../api/admin'
import cross from '../assets/cross.svg'
import { btnCSS } from './adminStudentCard'
import Loader from  './loading.jsx'

export const bgCSS = {
    height:'100vh',width:'100vw',zIndex:'200', position:'fixed', top:0, left:0
}

const ConfirmBox = (props)=>{

    let {msg , close , callback} = props
    const [loading, setLoading] = useState(false);
    const firstRef = useRef(true);

    async function callApi() {
        try {
            const res = await changeDue(callback);
            if(!res) throw new Error();
        } catch (error) {
            firstRef.current = false;
        } finally {
            setLoading(false);
        }
    }


    return(
        <>
        {
            loading && 
            <Loader/>
        }
        <div style={{position:'fixed', display:'flex', justifyContent:'center',
        alignItems:'center', width:'100vw', height:'100vh',top:0,left:0}}>

        <div style={bgCSS} className='glassmorphism'></div>

        <div style={{display:'flex' , flexDirection:'column', justifyContent:'center', zIndex:300,
            alignItems:'center', width:'20vw', position:'relative',background:'#fff',borderRadius:'10px',
            boxShadow:'0px 0px 20px #000', padding:'20px'}}>

            <img src={cross} alt='' onClick={()=>{close(false)}} 
            style={{width:'30px',position:'absolute', top:'10px', right:'10px'}}/>

            <div style={{fontSize:'1.4rem',margin:'10px'}}>{firstRef.current?msg:'Changes could be made due to some error'}</div>
            <button style={{...btnCSS,background:'#2164E8',color:'white',fontSize:'1.1rem'}}
            onClick={()=>{
                setLoading(true);
                callApi();
            }}>{firstRef.current?'Proceed':'Try Again'}</button>

        </div>
        </div>
        </>
    )
}

export default ConfirmBox