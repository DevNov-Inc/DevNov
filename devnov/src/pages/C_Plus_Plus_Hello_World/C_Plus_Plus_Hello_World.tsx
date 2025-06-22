import Header from "../../components/Header/Header"
import { KEYS, PROJECTS, PROJECT_INDEX } from "../../components/Projects/Projects";
import ContentArea from "../../components/ContentArea/ContentArea";
import { COLOURS } from "../../components/Constants/Constants";
import { SetStateAction,useState } from "react";
import Input from "../../components/Input/Input";
import { getClearAllFieldsStatus, getDevStatus } from "../../components/DisplayArea/DisplayArea";

let randomSolution = 0;

function CPlusPlusHelloWorld() {

    const projectIndex = PROJECT_INDEX.HELLO_WORLD_C_PLUS_PLUS_PROGRAMMING;
    
    const [headerFile,setHeaderFile] = useState("");
    const [systemNamespace,setSystemNamespace] = useState("");
    const [outputStream,setOutputStream] = useState("");

    const EMPTY_FIELDS = {
        HEADER_FILE: 0,
        SYSTEM_NAMESPACE: 1,
        OUTPUT_STREAM: 2
    }
     
   const onFocus = (i:number,field:number) =>{
        randomSolution = Math.floor(Math.random()*PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions.length);
        
       
        switch (field) {
          case EMPTY_FIELDS.HEADER_FILE:{
            getDevStatus()&&setHeaderFile(PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions[randomSolution]);
            getClearAllFieldsStatus()&&setHeaderFile("");
          } break;
          case EMPTY_FIELDS.SYSTEM_NAMESPACE:{
            getDevStatus()&&setSystemNamespace(PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions[randomSolution]);
            getClearAllFieldsStatus()&&setSystemNamespace("");
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
                        onFocus = {()=>onFocus(0,EMPTY_FIELDS.HEADER_FILE)}
                        style={{width: "200px",color: COLOURS.THEME_BROWN}}
                        value={headerFile} 
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setHeaderFile(e.target.value)}
                        title = {"Header file name"}
                      />
          </section>
         
      </section>
     
       <section className="codeLine">
          <section className="codeSegment">
                      <Input
                        onFocus = {()=>onFocus(1,EMPTY_FIELDS.SYSTEM_NAMESPACE)}
                        style={{width: "200px"}}
                        value={systemNamespace} 
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSystemNamespace(e.target.value)}
                        title = {"User-defined namespace"}
                      />
          </section>
         
      </section>

      <section className="codeLine">
          <section className="codeSegment"><span style={{color: COLOURS.THEME_BLUE_1}}>int</span> main{' ()'}</section>
      </section>  

      <section className="codeLine">
        <section className="codeSegment">{"{"}</section>
      </section>
     
    
      
      <section className="codeLine">
          <section className="codeSegment"></section>
          <section className="codeSegment">
                      <Input
                          onFocus = {()=>onFocus(2,EMPTY_FIELDS.OUTPUT_STREAM)}
                          style={{width: "300px"}} 
                          value={outputStream} 
                          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setOutputStream(e.target.value)}
                          title = {"Output text to the output stream"}
                      />
          </section>
      </section>

      <section className="codeLine">
        <section className="codeSegment"></section>
        <section className="codeSegment"><span style={{color: COLOURS.THEME_BLUE_1}}>return</span> 0</section>
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
                possibleSolutions = {[headerFile,systemNamespace,outputStream]}
              /> 
        </>
        
    )
  }
  
  export default CPlusPlusHelloWorld