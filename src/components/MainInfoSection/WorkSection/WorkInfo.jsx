import './WorkInfo.css'
import TimeLength from '../../UtilityComponents/TimeLength'
import Input from "../../UtilityComponents/Input"
import WorkAchievementList from './WorkAchievementList'

function WorkInfo({company, position, onChange, startTime, endTime, workAchievementList, hasSubmit }){
  return(
        <li className="workInfo">
          <Input
            id="company"
            value={company}
            placeholder="Company Name"
            onChange={onChange}
          />
          <Input
            id="position"
            value={position}
            placeholder="Position"
            onChange={onChange}
          /> 
          <TimeLength startTime={startTime} endTime={endTime}/>
          <WorkAchievementList workAchievementList={workAchievementList}/>
        </li>
    )
}

export default WorkInfo