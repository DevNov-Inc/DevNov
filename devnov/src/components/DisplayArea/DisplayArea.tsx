import Button from '../Button/Button'
import { COLOURS } from '../Constants/Constants'
import LearningOutcomes from '../LearningOutcomes/LearningOutcomes'
import {PROJECTS } from '../Projects/Projects'
import './DisplayArea.css'
import {useState} from 'react'

const TABS = {
     PROBLEM_STATEMENT: "Problem Statement",
     CODE: "Code",
     OUTPUT: "Output"
     
}

let number_of_achieved_learning_outcomes = 0;

let devnov_status = false;
let clear_all_fields_status = false;


export default function DisplayArea(props:any){
    const [problemStatus,setProblemStatus] = useState(true);
    const [codeStatus,setCodetatus] = useState(false);
    const [outputStatus,setOutputStatus] = useState(false);
    const [devnovStatus,setDevnovStatus] = useState(false);
    const [clearFieldsStatus,setClearFieldsStatus] = useState(false);
    
    const setButtonStatus = (selectedTab:string) =>{
        
        setProblemStatus(false);
        setCodetatus(false);
        setOutputStatus(false);

        switch (selectedTab) {

          case TABS.PROBLEM_STATEMENT:{
               setProblemStatus(true);
          }break;

          case TABS.CODE:{
               setCodetatus(true);
          }break;

          case TABS.OUTPUT:{
               setOutputStatus(true);
          }break;
          default:{
               console.log("default");
          }break;


        }

           
    }

    

    function checkLearningOutcomes(arr:any){

          let possibleSolutions = arr.props.children;
          number_of_achieved_learning_outcomes = 0;
          setButtonStatus(TABS.OUTPUT)
          for (let i = 0; i < possibleSolutions.length; i++) {
               for (let j = 0; j < PROJECTS[props.projectIndex].learningOutcomes[i].possibleSolutions.length; j++) {
                    if (possibleSolutions[i].trim() === PROJECTS[props.projectIndex].learningOutcomes[i].possibleSolutions[j]) {
                         PROJECTS[props.projectIndex].learningOutcomes[i].isChecked = true;
                         number_of_achieved_learning_outcomes +=1;
                         break;
                    }
                    else{
                         PROJECTS[props.projectIndex].learningOutcomes[i].isChecked = false;
                    }
                    
               }
               
               
          }
    }

    const activateDevnovAssistance = () =>{
          setButtonStatus(TABS.CODE);
          devnovStatus?setDevnovStatus(false):setDevnovStatus(true);
          switch (devnovStatus) {
               case true:{
                    devnov_status = false;

               } break;
               case false:{
                    devnov_status = true;
                    setClearFieldsStatus(false);
                    clear_all_fields_status = false;
               } break;
               
          }
     } 

     const activateClearFields = () =>{
          setButtonStatus(TABS.CODE);
          clearFieldsStatus?setClearFieldsStatus(false):setClearFieldsStatus(true);
          switch (clearFieldsStatus) {
               case true:{
                    clear_all_fields_status = false;

               } break;
               case false:{
                    clear_all_fields_status = true;
                    setDevnovStatus(false);
                    devnov_status = false;
               } break;
               
          }
     } 
     
    

     


    return(

        <>
               <section className='tabsWrapper'>

                                   <Button
                                        onClickAction={()=>setButtonStatus(TABS.PROBLEM_STATEMENT)}
                                        label = {<span className='fa fa-bug'/>}
                                        title = {"Problem Statement"}
                                        width = {"40px"}
                                        height = {"40px"}
                                        bgColor = {problemStatus? COLOURS.THEME_RED:COLOURS.THEME_GRAY}
                                        float = {"left"}
                                        fontSize = {""}
                                   />
                    
                                   <Button
                                        onClickAction={()=>setButtonStatus(TABS.CODE)}
                                        label = {<span className='fa fa-code'/>}
                                        title = {"Code Space"}
                                        width = {"40px"}
                                        height = {"40px"}
                                        bgColor = {codeStatus?COLOURS.THEME_RED:COLOURS.THEME_GRAY}
                                        float = {"left"}
                                        fontSize = {""}
                                   />

                                   <Button
                                        onClickAction={()=>setButtonStatus(TABS.OUTPUT)}
                                        label = {<span className='fa fa-desktop'/>}
                                        title = {"Output Space"}
                                        width = {"40px"}
                                        height = {"40px"}
                                        bgColor = {outputStatus?COLOURS.THEME_RED:COLOURS.THEME_GRAY}
                                        float = {"left"}
                                        fontSize = {""}
                                   />

                         <section className='right_buttons'>
                                  
                                   <Button
                                        onClickAction={()=>checkLearningOutcomes(props.possibleSolutions)}
                                        label = "&#9655;"
                                        title = {"Run code"}
                                        width = {"40px"}
                                        height = {"40px"}
                                        bgColor = {COLOURS.THEME_GREEN}
                                        float = {"right"}
                                        fontSize = {""}
                                   />

                                   <Button
                                        onClickAction={activateDevnovAssistance}
                                        label = {<img className='devnov_icon' alt = "devnov_logo" src='./assets/devnov_icon_1.png' />}
                                        title = {devnovStatus?"Devnov Assistance is currently activated, Deactivate now?":"Activate Devnov Assistance"}
                                        width = {"40px"}
                                        height = {"40px"}
                                        bgColor = {devnovStatus?COLOURS.THEME_RED:COLOURS.THEME_GRAY}
                                        float = {"right"}
                                        fontSize = {""}
                                   />

                                   <Button
                                        onClickAction={activateClearFields}
                                        label = {<span className='fa fa-trash'/>}
                                        title = {clearFieldsStatus?"Click on a field to clear":"Actiate clear field"}
                                        width = {"40px"}
                                        height = {"40px"}
                                        bgColor = {clearFieldsStatus?COLOURS.THEME_ORANGE:COLOURS.THEME_GRAY}
                                        float = {"right"}
                                        fontSize = {""}
                                   />

                         </section>

                    
               </section>

               <section className='displaArea'>
                    {problemStatus&&
                         <section className='outputSection'>
                         {PROJECTS[props.projectIndex].problemStatement}
                         <h2>The learning outcomes from this project include:</h2>
                         {PROJECTS[props.projectIndex].learningOutcomes.map((learningOutcome)=>
                              <section key={learningOutcome.label}>
                                   <LearningOutcomes
                                        learningOutcome={learningOutcome.label}
                                        isChecked = {true}
                                   />
                              </section>
                         )}
                         
                         </section>
                    }

                    {codeStatus&&
                          // CLASS NAMES: THEME BLUE
                          // RETURN TYPES: GREEN
                          // OTHER RESERVED WORDS: THEME BLUE 1
                         <section className='codeSpace'>{props.codeBase}</section>
                         
                    }

                    {outputStatus&&
                         <>
                              <section style={{display: 'none'}}>{props.possibleSolutions}</section>
                              <section className='outputSection'>
                                   <section className='codeOutput'>
                                        {
                                             number_of_achieved_learning_outcomes === PROJECTS[props.projectIndex].learningOutcomes.length
                                             ?"["+number_of_achieved_learning_outcomes+"/"+PROJECTS[props.projectIndex].learningOutcomes.length+"] All test cases have been successfull: "+PROJECTS[props.projectIndex].output
                                             :"["+number_of_achieved_learning_outcomes+"/"+PROJECTS[props.projectIndex].learningOutcomes.length+"] Not all test cases have been successfull"
                                        }
                                        </section>
                                   <h2>Test Cases:</h2>
                                   {PROJECTS[props.projectIndex].learningOutcomes.map((learningOutcome)=>
                                        <section key={learningOutcome.label}>
                                             <LearningOutcomes
                                                  learningOutcome={learningOutcome.label}
                                                  isChecked = {learningOutcome.isChecked?true:false}
                                             />
                                        </section>
                                   )}
                              </section>
                         
                         </>
                    }
               </section>
        </>
    )
}

export const getDevStatus = () =>{
     return devnov_status;
}

export const getClearAllFieldsStatus = () =>{
      return clear_all_fields_status;
}

