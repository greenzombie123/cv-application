import WorkInfo from "./WorkInfo";
import TimeLength from "../../UtilityComponents/TimeLength";
import Input from "../../UtilityComponents/Input";
import WorkAchievementList from "./WorkAchievementList";
import DeleteButton from "../../UtilityComponents/DeleteButton";
import "./WorkSection.css";

function WorkSection({ hasSubmit, workInfoList }) {
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
            />
            <Input
              id="position"
              value={workInfo.position}
              placeholder="Position"
            />
            <TimeLength startTime={workInfo.startTime} endTime={workInfo.endTime} />
            <WorkAchievementList workAchievementList={workInfo.workAchievementList} />
          </WorkInfo>
        );
      })}
    </ul>
  );
}

export default WorkSection;
