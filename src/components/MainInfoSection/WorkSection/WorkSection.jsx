import WorkInfo from "./WorkInfo";
import TimeLength from "../../UtilityComponents/TimeLength";
import Input from "../../UtilityComponents/Input";
import WorkAchievementList from "./WorkAchievementList";
import DeleteButton from "../../UtilityComponents/DeleteButton";
// import { workInfoList as Info } from "../../../cvinfo";
import "./WorkSection.css";
// import { useState } from "react";
import { useWorkInfoList } from "./UseWorkInfo";

function WorkSection({ hasSubmit }) {
  const {onAchievementChange, onAddAchievementClick, onInputChange, workInfoList, deleteAchievement} = useWorkInfoList()

  return (
    <ul className="workSection">
      {workInfoList.map((workInfo) => {
        return (
          <WorkInfo key={workInfo.id}>
            <DeleteButton />
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
    </ul>
  );
}

export default WorkSection;
