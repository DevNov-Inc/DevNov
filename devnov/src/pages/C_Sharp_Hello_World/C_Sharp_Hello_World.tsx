import Header from "../../components/Header/Header"
import { KEYS, PROJECTS, PROJECT_INDEX } from "../../components/Projects/Projects";
import ContentArea from "../../components/ContentArea/ContentArea";
import { COLOURS } from "../../components/Constants/Constants";
import { useState } from "react";
import Input from "../../components/Input/Input";
import { getClearAllFieldsStatus, getDevStatus } from "../../components/DisplayArea/DisplayArea";

let randomSolution = 0;

function CSharpHelloWorld() {

    const projectIndex = PROJECT_INDEX.HELLO_WORLD_C_SHARP_PROGRAMMING;
    
    const [systemNamespace,setSystemNamespace] = useState("");
    const [userDefinedNamespace,setUserDefinedNamespace] = useState("");
    const [className,setClassName] = useState("");
    const [outputStream,setOutputStream] = useState("");

    const EMPTY_FIELDS = {
        SYSTEM_NAMESPACE: 0,
        USER_DEFINED_NAMESPACE: 1,
        CLASS_NAME: 2,
        OUTPUT_STREAM: 3
    }
     
   const onFocus = (i:number,field:number) =>{
        randomSolution = Math.floor(Math.random()*PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions.length);
        
       
        switch (field) {
          case EMPTY_FIELDS.SYSTEM_NAMESPACE:{
            getDevStatus()&&setSystemNamespace(PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions[randomSolution]);
            getClearAllFieldsStatus()&&setSystemNamespace("");
          } break;
          case EMPTY_FIELDS.USER_DEFINED_NAMESPACE:{
            getDevStatus()&&setUserDefinedNamespace(PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions[randomSolution]);
            getClearAllFieldsStatus()&&setUserDefinedNamespace("");
          } break;
          case EMPTY_FIELDS.CLASS_NAME:{
            getDevStatus()&&setClassName(PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions[randomSolution]);
            getClearAllFieldsStatus()&&setClassName("");
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
                        onFocus = {e=>onFocus(0,EMPTY_FIELDS.SYSTEM_NAMESPACE)}
                        style={{width: "200px"}}
                        value={systemNamespace} 
                        onChange={e => setSystemNamespace(e.target.value)}
                        title = {"System namespace"}
                      />
          </section>
         
      </section>
     
       <section className="codeLine">
          <section className="codeSegment">
                      <Input
                        onFocus = {e=>onFocus(1,EMPTY_FIELDS.USER_DEFINED_NAMESPACE)}
                        style={{width: "200px"}}
                        value={userDefinedNamespace} 
                        onChange={e => setUserDefinedNamespace(e.target.value)}
                        title = {"User-defined namespace"}
                      />
          </section>
         
      </section>

      <section className="codeLine">
        <section className="codeSegment">{"{"}</section>
      </section>

      <section className="codeLine">
        <section className="codeSegment">{""}</section>
        <section className="codeSegment">{"class"}</section>
        <section className="codeSegment">
                      <Input
                        onFocus = {e=>onFocus(2,EMPTY_FIELDS.CLASS_NAME)}
                        style={{width: "200px",color: COLOURS.THEME_BLUE_2}}
                        value={className} 
                        onChange={e => setClassName(e.target.value)}
                        title = {"Class name"}
                      />
          </section>
      </section>

      <section className="codeLine">
        <section className="codeSegment">{""}</section>
        <section className="codeSegment">{"{"}</section>
      </section>

      <section className="codeLine">
          <section className="codeSegment">{""}</section>
          <section className="codeSegment">{""}</section>
          <section className="codeSegment"><span style={{color: COLOURS.THEME_BLUE_1}}>static</span> <span style={{color: COLOURS.THEME_LIGHT_GREEN}}>void</span> Main{' ( '}<span style={{color: COLOURS.THEME_LIGHT_GREEN}}>string</span>{"[]"} args {' ) '}</section>
      </section>  

      <section className="codeLine">
        <section className="codeSegment">{""}</section>
        <section className="codeSegment">{""}</section>
        <section className="codeSegment">{"{"}</section>
      </section>
     
    
      
      <section className="codeLine">
          <section className="codeSegment"></section>
          <section className="codeSegment"></section>
          <section className="codeSegment"></section>
          <section className="codeSegment">
                      <Input
                          onFocus = {e=>onFocus(3,EMPTY_FIELDS.OUTPUT_STREAM)}
                          style={{width: "300px"}} 
                          value={outputStream} 
                          onChange={e => setOutputStream(e.target.value)}
                          title = {"Output text to the console"}
                      />
          </section>
      </section>


      <section className="codeLine">
        <section className="codeSegment">{""}</section>
        <section className="codeSegment">{""}</section>
        <section className="codeSegment">{"}"}</section>
      </section>

      <section className="codeLine">
        <section className="codeSegment">{""}</section>
        <section className="codeSegment">{"}"}</section>
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
                possibleSolutions = {[systemNamespace,userDefinedNamespace,className,outputStream]}
              /> 
        </>
        
    )
  }
  
  export default CSharpHelloWorld