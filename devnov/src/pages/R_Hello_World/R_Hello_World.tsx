import Header from "../../components/Header/Header"
import { KEYS, PROJECTS, PROJECT_INDEX } from "../../components/Projects/Projects";
import ContentArea from "../../components/ContentArea/ContentArea";
import { COLOURS } from "../../components/Constants/Constants";
import { useState } from "react";
import Input from "../../components/Input/Input";
import { getClearAllFieldsStatus, getDevStatus } from "../../components/DisplayArea/DisplayArea";

let randomSolution = 0;

function RHelloWorld() {

    const projectIndex = PROJECT_INDEX.HELLO_WORLD_R_PROGRAMMING;
    
    const [outputStream,setOutputStream] = useState("");

    const EMPTY_FIELDS = {
        OUTPUT_STREAM: 0
    }
     
   const onFocus = (i:number,field:number) =>{
        randomSolution = Math.floor(Math.random()*PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions.length);
        
       
        switch (field) {
          case EMPTY_FIELDS.OUTPUT_STREAM:{
            getDevStatus()&&setOutputStream(PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions[randomSolution]);
            getClearAllFieldsStatus()&&setOutputStream("");
          } break;
         
        }
        
   }
   const populateCode =
   <section className="codeSpace">
      
      <section className="codeLine">
          <section className="codeSegment">
                      <Input
                        onFocus = {e=>onFocus(0,EMPTY_FIELDS.OUTPUT_STREAM)}
                        style={{width: "400px"}}
                        value={outputStream} 
                        onChange={e => setOutputStream(e.target.value)}
                        title = {"Print text using the output stream without quoatation marks"}
                      />
          </section>
         
      </section>

     
   </section>
   
     
    return (

        <>
            <Header
                fileName = {PROJECTS[projectIndex].fileName}
                title = {PROJECTS[projectIndex].title}
            />

           
             <ContentArea
                heading = {PROJECTS[projectIndex].title}
                difficultyTitle = {PROJECTS[projectIndex].difficulty.title}
                programmingLanguage = {PROJECTS[projectIndex].programmingLanguage}
                difficultyLevelBgColor = {PROJECTS[projectIndex].difficulty.bgColor}
                bgColorProgrammingLanguage = {COLOURS.THEME_BLUE}
                relatedKey = {KEYS.output}
                projectIndex = {projectIndex}
                codeBase = {populateCode}
                possibleSolutions = {[outputStream]}
              /> 
        </>
        
    )
  }
  
  export default RHelloWorld