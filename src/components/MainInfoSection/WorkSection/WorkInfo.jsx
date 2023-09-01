import './WorkInfo.css'
import TimeLength from '../../UtilityComponents/TimeLength'
import Input from "../../UtilityComponents/Input"

function WorkInfo({hasSubmit, company, position, onChange, startTime, endTime}){
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
        </li>
    )
}

export default WorkInfo