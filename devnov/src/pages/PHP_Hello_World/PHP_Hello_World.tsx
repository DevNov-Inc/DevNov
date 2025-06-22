import Header from "../../components/Header/Header"
import { KEYS, PROJECTS, PROJECT_INDEX } from "../../components/Projects/Projects";
import ContentArea from "../../components/ContentArea/ContentArea";
import { COLOURS } from "../../components/Constants/Constants";
import { SetStateAction,useState } from "react";
import Input from "../../components/Input/Input";
import { getClearAllFieldsStatus, getDevStatus } from "../../components/DisplayArea/DisplayArea";

let randomSolution = 0;

function PHPHelloWorld() {

    const projectIndex = PROJECT_INDEX.HELLO_WORLD_PHP_PROGRAMMING;
    
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
          <section className="codeSegment">{"<?php"}</section>
      </section>

      <section className="codeLine">
          <section className="codeSegment"></section>
          <section className="codeSegment">
                      <Input
                        onFocus = {()=>onFocus(0,EMPTY_FIELDS.OUTPUT_STREAM)}
                        style={{width: "200px"}}
                        value={outputStream} 
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setOutputStream(e.target.value)}
                        title = {"Echo text to the web page"}
                      />
          </section>
         
      </section>

      <section className="codeLine">
          <section className="codeSegment">{"?>"}</section>
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
  
  export default PHPHelloWorld