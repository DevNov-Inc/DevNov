import Header from "../../components/Header/Header"
import { KEYS, PROJECTS, PROJECT_INDEX } from "../../components/Projects/Projects";
import ContentArea from "../../components/ContentArea/ContentArea";
import { COLOURS } from "../../components/Constants/Constants";
import { useState } from "react";
import Input from "../../components/Input/Input";
import { getClearAllFieldsStatus, getDevStatus } from "../../components/DisplayArea/DisplayArea";

let randomSolution = 0;

function CHelloWorld() {

    const projectIndex = PROJECT_INDEX.HELLO_WORLD_C_PROGRAMMING;
    
    const [headerFile,setHeaderFile] = useState("");
    const [outputStream,setOutputStream] = useState("");

    const EMPTY_FIELDS = {
        HEADER_FILE: 0,
        OUTPUT_STREAM: 1
    }
     
   const onFocus = (i:number,field:number) =>{
        randomSolution = Math.floor(Math.random()*PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions.length);
        
       
        switch (field) {
          case EMPTY_FIELDS.HEADER_FILE:{
            getDevStatus()&&setHeaderFile(PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions[randomSolution]);
            getClearAllFieldsStatus()&&setHeaderFile("");
          } break;
          
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
                        onFocus = {e=>onFocus(0,EMPTY_FIELDS.HEADER_FILE)}
                        style={{width: "200px"}}
                        value={headerFile} 
                        onChange={e => setHeaderFile(e.target.value)}
                        title = {"Include library for the usage of the standad input-output functionality"}
                      />
          </section>
         
      </section>

      <section className="codeLine">
          <section className="codeSegment"><span style={{color: COLOURS.THEME_LIGHT_GREEN}}>int</span> main{'()'}</section>
      </section>  

      <section className="codeLine">
        <section className="codeSegment">{"{"}</section>
      </section>
     
       <section className="codeLine">
          <section className="codeSegment"></section>
          <section className="codeSegment">
                      <Input
                        onFocus = {e=>onFocus(1,EMPTY_FIELDS.OUTPUT_STREAM)}
                        style={{width: "200px"}}
                        value={outputStream} 
                        onChange={e => setOutputStream(e.target.value)}
                        title = {"Print text using the output stream"}
                      />
          </section>
         
      </section>

      <section className="codeLine">
        <section className="codeSegment"></section>
        <section className="codeSegment">return 0</section>
      </section>

      

      
      <section className="codeLine">
        <section className="codeSegment">{"}"}</section>
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
                possibleSolutions = {[headerFile,outputStream]}
              /> 
        </>
        
    )
  }
  
  export default CHelloWorld