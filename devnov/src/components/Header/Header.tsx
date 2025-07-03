import {useState} from 'react';
import Button from '../Button/Button'
import { COLOURS, TOOL_TIP_MESSAGES } from '../Constants/Constants'
import ProjectsContainer from '../ProjectContainer/ProjectContainer';
import { PROJECTS } from '../Projects/Projects'
import './Header.css'


function Header(props:any){
    const [moreProjectsStatus,setMoreProjectsStatus] = useState(false);
    function toggleMoreProjects(){
        if (moreProjectsStatus) {
            setMoreProjectsStatus(false)
            document.body.style.overflow = "visible";
        }
        else{
            setMoreProjectsStatus(true)
            document.body.style.overflow = "hidden";
        }
    }
    
    const populateProjects = PROJECTS.map((project)=>
            
                    <section key = {project.title}>
                        <ProjectsContainer
                            projectTitle = {project.title}
                            difficultyTitle = {project.difficulty.title}
                            difficultyLevelBgColor = {project.difficulty.bgColor}
                            bgColorProgrammingLanguage = {COLOURS.THEME_BLUE}
                            programmingLanguage = {project.programmingLanguage}
                            navigateToPage = {project.page}
                        />
                     </section>
                
            
    );
    return(
            <>
                <header className='headerWrapper'>
                        <section className='headerSection'><img alt='Denov logo' src='./assets/devnov_logo.png'/></section>
                        <section className='headerButtons'>
                        <Button
                                onClickAction={()=>toggleMoreProjects()}
                                label = {<><span className='header_label'>{TOOL_TIP_MESSAGES.MORE_PROECTS_BTN}</span><section className='header_icon'><span className='fa fa-bars'/></section></>}
                                title = {TOOL_TIP_MESSAGES.MORE_PROECTS_BTN}
                                width = {"auto"}
                                height = {"40px"}
                                bgColor = {moreProjectsStatus?COLOURS.THEME_WHITE:COLOURS.THEME_BLACK}
                                fgColor = {!moreProjectsStatus?COLOURS.THEME_WHITE:COLOURS.THEME_BLACK}
                                marginLeft = {"0"}
                                marginTop = {"0"}
                                marginRight = {"0"}
                                marginBottom = {"0"}
                                borderBottomLeftRadius = {"0"}
                                borderBottomRightRadius = {"0"}
                                borderTopRightRadius = {"0"}
                                float = {"right"}
                                fontSize = {"13px"}
                        />
                        <Button
                                onClickAction={()=>toggleMoreProjects()}
                                label = {props.fileName}
                                title = {props.title}
                                width = {"auto"}
                                height = {"40px"}
                                bgColor = {!moreProjectsStatus?COLOURS.THEME_WHITE:COLOURS.THEME_BLACK}
                                fgColor = {moreProjectsStatus?COLOURS.THEME_WHITE:COLOURS.THEME_BLACK}
                                marginLeft = {"0"}
                                marginTop = {"0"}
                                marginRight = {"0"}
                                marginBottom = {"0"}
                                borderBottomLeftRadius = {"0"}
                                borderBottomRightRadius = {"0"}
                                float = {"right"}
                                fontSize = {"13px"}
                        />

                        </section>
                        
                </header>
               {moreProjectsStatus&&
                    <section className='toggleWindowWrapper'>
                
                                <h1>Browse {PROJECTS.length} Coding Projects</h1>
                               
                            <section className='toggleWindowSection'>{populateProjects}</section>
                        

                    </section>
                }


               
            </>
    )
}

export default Header