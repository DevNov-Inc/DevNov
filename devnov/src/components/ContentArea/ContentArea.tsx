import { COLOURS } from '../Constants/Constants'
import DifficultyLevel from '../DifficultyLevel/DifficultyLevel'
import ProjectsContainer from '../ProjectContainer/ProjectContainer'
import { PROJECTS } from '../Projects/Projects'
import DisplayArea from '../DisplayArea/DisplayArea'
import './ContentArea.css'


function ContentArea(props:any){
    
    
    const populateRelatedProjects = PROJECTS.map((project)=>
            
                    <section key = {project.title}>
                        {(project.key === props.relatedKey && project.title !== props.heading)&&
                            <ProjectsContainer
                                projectTitle = {project.title}
                                difficultyTitle = {project.difficulty.title}
                                difficultyLevelBgColor = {project.difficulty.bgColor}
                                bgColorProgrammingLanguage = {COLOURS.THEME_BLUE}
                                programmingLanguage = {project.programmingLanguage}
                                navigateToPage = {project.page}
                            />
                        }
                     </section>
                
            
    );
       

    return(
        
            <>
                    <section className='contentWrapper'>
            

                        <section className='contentHeader'>
                            <h1>{props.heading}</h1>
                            <section className='difficulty'>
                            <DifficultyLevel 
                                    title = {props.difficultyTitle}
                                    bgColor = {props.difficultyLevelBgColor}
                                    bgColorProgrammingLanguage = {props.bgColorProgrammingLanguage}
                                    programmingLanguage = {props.programmingLanguage}
                            />
                          
                            </section>
                        </section>

                       <DisplayArea
                            projectIndex = {props.projectIndex}
                            codeBase = {<section className='displayArea'>{props.codeBase}</section>}
                            possibleSolutions = {<section className='displayArea'>{props.possibleSolutions}</section>}
                        />
           
                    </section>

                    <section className='contentRight'>
                    <h2>Browse More Related Projects</h2>
                    
                     {populateRelatedProjects}
                    </section>
                  
            </>
    )
}

export default ContentArea