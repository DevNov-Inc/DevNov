import ToolTip from '../ToolTip/ToolTip';
import './Button.css'
import {useState} from 'react';


function Button(props:any){
    const [showMoreInformation,setMoreInfomation] = useState(false)

    return(
        <>
                <section 
                            onMouseEnter={()=>setMoreInfomation(true)} 
                            onMouseLeave={()=>setMoreInfomation(false)}
                            onClick={props.onClickAction} 
                            style={
                                        {
                                            width: props.width,
                                            height: props.height,
                                            background: props.bgColor,
                                            color: props.fgColor,
                                            lineHeight:props.height,
                                            float:props.float,
                                            fontSize: props.fontSize,
                                            marginLeft: props.marginLeft,
                                            marginRight: props.marginRight,
                                            marginTop: props.marginTop,
                                            marginBottom: props.marginBottom,
                                            borderTopLeftRadius: props.borderTopLeftRadius,
                                            borderBottomLeftRadius: props.borderBottomLeftRadius,
                                            borderTopRightRadius: props.borderTopLeftRadius,
                                            borderBottomRightRadius: props.borderBottomRightRadius,
                                        }
                                  } 
                            className='buttonWrapper'>
                    {props.label}
                   
                </section>
                {
                        showMoreInformation &&
                        
                        <ToolTip
                            title = {props.title}
                        />
                }
                
               
        </>
       
    )
}

export default Button