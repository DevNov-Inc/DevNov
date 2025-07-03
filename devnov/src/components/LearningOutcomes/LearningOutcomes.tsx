import { COLOURS } from '../Constants/Constants'
import './LearningOutcomes.css'

function LearningOutcomes(props:any){
    return(
        <section className='learningOutcomesWrapper'>
             <section className='learningOutcomesContainer'>
                <section style={{backgroundColor: props.isChecked?COLOURS.THEME_GREEN:COLOURS.THEME_RED}} className='learningOutcomesCheck'><span className={props.isChecked?'fa fa-check':'fa fa-close'}></span></section>
                <section className='learningOutcomeLabel'>{props.learningOutcome}</section>
            </section>
        </section>
       
    )
}

export default LearningOutcomes
