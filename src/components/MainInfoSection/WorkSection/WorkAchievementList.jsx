import DeleteButton from "../../UtilityComponents/DeleteButton"
import './WorkAchievementList.css'

function WorkAchievementList({workAchievementList}){
     
    return (
        <ul className="workAchievementList">
            {
                workAchievementList.map(workAchievement => <li className="workAchievement" key={workAchievement.id}>
                    {workAchievement.text} <DeleteButton/>
                </li>)
            }
        </ul>
     )
}

export default WorkAchievementList