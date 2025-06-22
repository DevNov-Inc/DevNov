import './ToolTip.css'

function ToolTip(props:any){
    return(
        <section className='moreInformationWrapper'>
                <section className='moreInformationSectionTitle'><span style={{marginRight:"10px"}} className='fa fa-info-circle'/>{props.title}</section>
        </section>
    )
}

export default ToolTip