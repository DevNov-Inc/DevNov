import Header from "../../components/Header/Header"
import { KEYS, PROJECTS, PROJECT_INDEX } from "../../components/Projects/Projects";
import ContentArea from "../../components/ContentArea/ContentArea";
import { COLOURS } from "../../components/Constants/Constants";
import { SetStateAction,useState } from "react";
import Input from "../../components/Input/Input";
import { getClearAllFieldsStatus, getDevStatus } from "../../components/DisplayArea/DisplayArea";

let randomSolution = 0;

function JavaHelloWorld() {

    const projectIndex = PROJECT_INDEX.HELLO_WORLD_JAVA_PROGRAMMING;
    
    const [className,setClassName] = useState("");
    const [outputStream,setOutputStream] = useState("");

    const EMPTY_FIELDS = {
        CLASS_NAME: 0,
        OUTPUT_STREAM: 1
    }
     
   const onFocus = (i:number,field:number) =>{
        randomSolution = Math.floor(Math.random()*PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions.length);
        
       
        switch (field) {
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
          <section style={{color: COLOURS.THEME_BLUE_1}} className="codeSegment">public class</section>
          <section className="codeSegment">
                      <Input
                        onFocus = {()=>onFocus(0,EMPTY_FIELDS.CLASS_NAME)}
                        style={{marginLeft: "-20px",width: "200px",color: COLOURS.THEME_BLUE_2}}
                        value={className} 
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setClassName(e.target.value)}
                        title = {"Enter the class name"}
                      />
          </section>
         
      </section>
      <section className="codeLine">
        <section className="codeSegment">{"{"}</section>
      </section>
     
      <section className="codeLine">
          <section className="codeSegment"></section>
          <section className="codeSegment"><span style={{color: COLOURS.THEME_BLUE_1}}>public static</span> <span style={{color: COLOURS.THEME_LIGHT_GREEN}}>void</span> main{' ( '}<span style={{color: COLOURS.THEME_LIGHT_GREEN}}>String</span>{"[]"} args {' ) '}</section>
      </section>   
      
      <section className="codeLine">
        <section className="codeSegment"></section>
        <section className="codeSegment">{"{"}</section>
      </section>
      
      <section className="codeLine">
          <section className="codeSegment"></section>
          <section className="codeSegment"></section>
          <section className="codeSegment">
                      <Input
                          onFocus = {()=>onFocus(1,EMPTY_FIELDS.OUTPUT_STREAM)}
                          style={{width: "300px"}} 
                          value={outputStream} 
                          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setOutputStream(e.target.value)}
                          title = {"Output text to the output stream"}
                      />
          </section>
      </section>

      <section className="codeLine">
        <section className="codeSegment"></section>
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
                possibleSolutions = {[className,outputStream]}
              /> 
        </>
        
    )
  }
  
  export default JavaHelloWorld