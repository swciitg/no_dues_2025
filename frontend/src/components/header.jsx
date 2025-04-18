import arrow from '../assets/arrow_forward.png'

const HeaderTab = (props)=> {

    const {path,backTrack} = props

    return(
        <>
        <div className="admin-dashboard-header" > 
            <div style={{fontSize:'1.3rem' , textAlign:'left',display:'flex', justifyContent:'left'}}>
                {
                    path.map((lvl, index) => {
                        return(
                            <div style={{color:index!=path.length-1?'#7B7B7B':'#2A3F54',fontWeight:'500',cursor:'pointer'}}
                            onClick={()=>{
                                if(index!=path.length-1) backTrack(index);
                            }}>
                                {index!=0?
                                <>
                                <img src={arrow} style={{width:'10px' , margin:'0px 10px'}}/>
                                </>
                                :
                                ''}
                                {lvl}
                            </div>
                            )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default HeaderTab