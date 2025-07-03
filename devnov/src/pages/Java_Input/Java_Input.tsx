import Header from "../../components/Header/Header"
import { KEYS, PROJECTS, PROJECT_INDEX } from "../../components/Projects/Projects";
import ContentArea from "../../components/ContentArea/ContentArea";
import { COLOURS } from "../../components/Constants/Constants";
import { SetStateAction, useState } from "react";
import Input from "../../components/Input/Input";
import { getClearAllFieldsStatus, getDevStatus } from "../../components/DisplayArea/DisplayArea";

let randomSolution = 0;

function JavaInput() {
    const projectIndex = PROJECT_INDEX.INPUT_JAVA_PROGRAMMING;
    
    const [scannerClassImport,setScannerClassImport] = useState("");
    const [scannerClassCreate,setScannerClassCreate] = useState("");

    const EMPTY_FIELDS = {
        SCANNER_CLASS_IMPORT: 0,
        SCANNER_CLASS_CREATE: 1
    }
     
   const onFocus = (i:number,field:number) =>{
        randomSolution = Math.floor(Math.random()*PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions.length);

       
        switch (field) {
          case EMPTY_FIELDS.SCANNER_CLASS_IMPORT:{
            getDevStatus()&&setScannerClassImport(PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions[randomSolution]);
            getClearAllFieldsStatus()&&setScannerClassImport("");
          } break;
          case EMPTY_FIELDS.SCANNER_CLASS_CREATE:{
            getDevStatus()&&setScannerClassCreate(PROJECTS[projectIndex].learningOutcomes[i].possibleSolutions[randomSolution]);
            getClearAllFieldsStatus()&&setScannerClassCreate("");
          } break;
         
        }
        
   }
   const populateCode =
   <section className="codeSpace">
      
      <section className="codeLine">
          <section style={{color: COLOURS.THEME_BLUE_1}} className="codeSegment">import</section>
          <section className="codeSegment">
                      <Input
                        onFocus = {()=>onFocus(0,EMPTY_FIELDS.SCANNER_CLASS_IMPORT)}
                        style={{marginLeft: "-20px",width: "300px"}}
                        value={scannerClassImport} 
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setScannerClassImport(e.target.value)}
                        title = {"Import scanner class"}
                      />
          </section>
         
      </section>

      <section className="codeLine">
          <section className="codeSegment"><span style={{color: COLOURS.THEME_BLUE_1}}>class</span> InputJava</section>
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
        <section className="codeSegment">{"System.out.println('Input a line of text');"}</section>
      </section>
      
      <section className="codeLine">
          <section className="codeSegment"></section>
          <section className="codeSegment"></section>
          <section className="codeSegment">
                      <Input
                          onFocus = {()=>onFocus(1,EMPTY_FIELDS.SCANNER_CLASS_CREATE)}
                          style={{width: "300px"}} 
                          value={scannerClassCreate} 
                          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setScannerClassCreate(e.target.value)}
                          title = {"Create a scanner object"}
                      />
          </section>
      </section>

      <section className="codeLine">
        <section className="codeSegment"></section>
        <section className="codeSegment"></section>
        <section className="codeSegment"><span style={{color: COLOURS.THEME_LIGHT_GREEN}}>String</span> line = sc.<span style={{color: COLOURS.THEME_BLUE}}>{"nextLine();"}</span></section>
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
                possibleSolutions = {[scannerClassImport,scannerClassCreate]}
              /> 
        </>
        
    )
  }
  
  export default JavaInput