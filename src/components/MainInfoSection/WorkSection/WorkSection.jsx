import WorkInfo from "./WorkInfo";
import TimeLength from "../../UtilityComponents/TimeLength";
import Input from "../../UtilityComponents/Input";
import WorkAchievementList from "./WorkAchievementList";
import DeleteButton from "../../UtilityComponents/DeleteButton";
import "./WorkSection.css";
import { useWorkInfoList } from "./UseWorkInfo";
import AddButton from "../../UtilityComponents/AddButton";

function WorkSection({ hasSubmit }) {
  const {
    onAchievementChange,
    onAddAchievementClick,
    onInputChange,
    workInfoList,
    deleteAchievement,
    deleteWorkInfo,
    addNewWorkInfo,
  } = useWorkInfoList();

  return (
    <ul className="workSection">
      {workInfoList.map((workInfo) => {
        return (
          <WorkInfo key={workInfo.id}>
            {workInfoList.length > 1 && <DeleteButton onDeleteButtonClick={deleteWorkInfo(workInfo.id)}/>}
            <Input
              id="company"
              value={workInfo.company}
              placeholder="Company Name"
              onChange={onInputChange(workInfo.id, "company")}
            />
            <Input
              id="position"
              value={workInfo.position}
              placeholder="Position"
              onChange={onInputChange(workInfo.id, "position")}
            />
            <TimeLength
              startTime={workInfo.startTime}
              endTime={workInfo.endTime}
              onStartTimeChange={onInputChange(workInfo.id, "startTime")}
              onEndTimeChange={onInputChange(workInfo.id, "endTime")}
            />
            <WorkAchievementList
              workAchievementList={workInfo.workAchievementList}
              onChange={onAchievementChange(workInfo.id)}
              onAddAchievementClick={onAddAchievementClick(workInfo.id)}
              onDeleteButtonClick={deleteAchievement(workInfo.id)}
            />
          </WorkInfo>
        );
      })}
      <li>
        <AddButton onClick={addNewWorkInfo}/>
      </li>
    </ul>
  );
}

export default WorkSection;
