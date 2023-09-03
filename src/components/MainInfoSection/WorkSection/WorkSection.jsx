import WorkInfo from './WorkInfo'
import './WorkSection.css'

function WorkSection({hasSubmit, workInfoList}){
    return(
        <ul className='workSection'>
            {workInfoList.map(workInfo => {
                return (<WorkInfo key={workInfo.id} {...workInfo}/>)
            })}
        </ul>
    )
}

export default WorkSection