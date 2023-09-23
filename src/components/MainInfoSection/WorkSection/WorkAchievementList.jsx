import AddButton from "../../UtilityComponents/AddButton";
import DeleteButton from "../../UtilityComponents/DeleteButton";
import Input from "../../UtilityComponents/Input";
import "./WorkAchievementList.css";

function WorkAchievementList({
  workAchievementList,
  onChange,
  onAddAchievementClick,
  onDeleteButtonClick,
}) {
  return (
    <>
      <h4 className="workAchievement_heading">Work Achievements</h4>
      <ul className="workAchievementList">
        {workAchievementList.map((workAchievement) => (
          <li className="workAchievement" key={workAchievement.id}>
            <DeleteButton
              onDeleteButtonClick={onDeleteButtonClick(workAchievement.id)}
            />
            <Input
              id={workAchievement.id}
              value={workAchievement.text}
              placeholder="Achievement"
              onChange={onChange(workAchievement.id)}
            />
          </li>
        ))}
        <AddButton text="Add" onClick={onAddAchievementClick} />
      </ul>
    </>
  );
}

export default WorkAchievementList;
