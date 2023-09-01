import WorkInfo from './WorkInfo'
import './WorkSection.css'

function WorkSection({hasSubmit}){
    return(
        <ul className='workSection'>
            <WorkInfo startTime={"2018-07-22"} endTime={"2018-10-22"}/>
        </ul>
    )
}

export default WorkSection