import {useState} from 'react';
import { useNavigate } from "react-router-dom"
import DifficultyLevel from '../DifficultyLevel/DifficultyLevel'
import './ProjectContainer.css'
import ToolTip from '../ToolTip/ToolTip';


function ProjectsContainer(props:any){
    const navigate = useNavigate();

    function navigateToPage(toPage:any) {
  
      navigate(toPage, {replace: true});
    }
    const [showMoreInformation,setMoreInfomation] = useState(false)
    return(
        <>
        <section 
                onMouseEnter={()=>setMoreInfomation(true)} 
                onMouseLeave={()=>setMoreInfomation(false)}
                className='projects'
                onClick={() => navigateToPage(props.navigateToPage)}
            >
                <h3>{props.projectTitle}</h3>

                <section>
                    <DifficultyLevel
                        title = {props.difficultyTitle}
                        bgColor = {props.difficultyLevelBgColor}
                        bgColorProgrammingLanguage = {props.bgColorProgrammingLanguage}
                        programmingLanguage = {props.programmingLanguage}
                    />
                
                </section>
                
        </section>

            {
                showMoreInformation &&
                
                <ToolTip
                    title = {props.projectTitle}
                />
            }
        </>
    )
}

export default ProjectsContainer