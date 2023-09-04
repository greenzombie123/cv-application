import WorkInfo from "./WorkInfo";
import TimeLength from "../../UtilityComponents/TimeLength";
import Input from "../../UtilityComponents/Input";
import WorkAchievementList from "./WorkAchievementList";
import DeleteButton from "../../UtilityComponents/DeleteButton";
import { workInfoList as Info } from "../../../cvinfo";
import "./WorkSection.css";
import { useState } from "react";

function WorkSection({ hasSubmit }) {
  const [workInfoList, setWorkInfoList] = useState(Info);

  function onInputChange(id, propName) {
    return (e) => {
      const listCopy = [...workInfoList];
      const workInfoCopy = listCopy.find((wi) => wi.id === id);
      workInfoCopy[propName] = e.target.value;
      setWorkInfoList(listCopy);
    };
  }

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
            />
          </WorkInfo>
        );
      })}
    </ul>
  );
}

export default WorkSection;
