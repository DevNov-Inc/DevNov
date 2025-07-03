import './DifficultyLevel.css'

function DifficultyLevel(props:any){
    return(
        <>
            <section style={{backgroundColor:props.bgColor}} className='difficultyLevelWrapper'>
                <span>{props.title}</span>
            </section>
            <section style={{backgroundColor:props.bgColorProgrammingLanguage}} className='programmingLanguage'>
                 {props.programmingLanguage}
            </section>
        </>
        
    )
}

export default DifficultyLevel