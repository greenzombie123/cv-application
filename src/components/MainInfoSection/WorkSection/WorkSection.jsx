import WorkInfo from "./WorkInfo";
import TimeLength from "../../UtilityComponents/TimeLength";
import Input from "../../UtilityComponents/Input";
import WorkAchievementList from "./WorkAchievementList";
import DeleteButton from "../../UtilityComponents/DeleteButton";
import "./WorkSection.css";
import { useWorkInfoList } from "./UseWorkInfo";
import AddButton from "../../UtilityComponents/AddButton";
import { HasSubmitContext } from "../../../context/hasSubmitContext";
import { useContext } from "react";
import { formatDate } from "../../../util/formatDate";

function WorkSection() {
  const {
    onAchievementChange,
    onAddAchievementClick,
    onInputChange,
    workInfoList,
    deleteAchievement,
    deleteWorkInfo,
    addNewWorkInfo,
  } = useWorkInfoList();

  const hasSubmit = useContext(HasSubmitContext);

  if (hasSubmit) {
    return (
      <div>
        <h1>Work Experience</h1>
        <ul className="workSection">
          {workInfoList.map((workInfo) => (
            <li key={workInfo.id} className="workSection_item">
              <p className="workSection_company">{workInfo.company}</p>
              <p className="workSection_position">{workInfo.position}</p>
              <p className="workSection_Time">{formatDate(workInfo.startTime, workInfo.endTime)}</p>
              <ul className="workSection_achievementList">
                {workInfo.workAchievementList.map((WorkAchievement) => (
                  <li className="achievementList_item_previewText" key={WorkAchievement.id}>{WorkAchievement.text}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  } else
    return (
      <div>
        <h1>Work Experience</h1>
        <ul className="workSection">
          {workInfoList.map((workInfo) => {
            return (
              <WorkInfo key={workInfo.id}>
                {workInfoList.length > 1 && (
                  <button className="workInfo_deleteButton" onClick={deleteWorkInfo(workInfo.id)}>x</button>
                )}
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
            <button className="workSection_button" onClick={addNewWorkInfo}>Add</button>
          </li>
        </ul>
      </div>
    );
}

export default WorkSection;
