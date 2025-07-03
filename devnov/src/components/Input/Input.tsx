import ToolTip from '../ToolTip/ToolTip';
import './Input.css'
import {useState} from 'react';

function Input(props:any){
    const [showMoreInformation,setMoreInfomation] = useState(false)
    return(
        <>
                 <input 
                    onMouseEnter={()=>setMoreInfomation(true)} 
                    onMouseLeave={()=>setMoreInfomation(false)}
                    onFocus={props.onFocus} 
                    style={props.style} 
                    type="Text" 
                    value={props.value} 
                    spellCheck={false}
                    onChange={props.onChange}
                />
                {
                        showMoreInformation &&
                        
                        <ToolTip
                            title = {props.title}
                        />
                }
        </>
       
    )
}

export default Input;