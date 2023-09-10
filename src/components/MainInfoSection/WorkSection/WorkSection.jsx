import WorkInfo from "./WorkInfo";
import TimeLength from "../../UtilityComponents/TimeLength";
import Input from "../../UtilityComponents/Input";
import WorkAchievementList from "./WorkAchievementList";
import DeleteButton from "../../UtilityComponents/DeleteButton";
import "./WorkSection.css";
import { useWorkInfoList } from "./UseWorkInfo";
import AddButton from "../../UtilityComponents/AddButton";
import { useHasSubmit } from "../../../context/hasSubmitContext";
import { useContext } from "react";

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

  const { HasSubmitContext } = useHasSubmit();
  const hasSubmit = useContext(HasSubmitContext);

  if (hasSubmit) {
    return (
      <>
        <h1>Work Experience</h1>
        <ul className="workSection">
          {workInfoList.map((workInfo) => (
            <li key={workInfo.id}>
              <p>{workInfo.company}</p>
              <p>{workInfo.position}</p>
              <p>{workInfo.startTime + "-" + workInfo.endTime}</p>
              <ul>
                {workInfo.workAchievementList.map((WorkAchievement) => (
                  <li key={WorkAchievement.id}>{WorkAchievement.text}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </>
    );
  } else
    return (
      <>
        <h1>Work Experience</h1>
        <ul className="workSection">
          {workInfoList.map((workInfo) => {
            return (
              <WorkInfo key={workInfo.id}>
                {workInfoList.length > 1 && (
                  <DeleteButton
                    onDeleteButtonClick={deleteWorkInfo(workInfo.id)}
                  />
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
            <AddButton onClick={addNewWorkInfo} />
          </li>
        </ul>
      </>
    );
}

export default WorkSection;
