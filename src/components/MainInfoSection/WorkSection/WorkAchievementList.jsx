import AddButton from "../../UtilityComponents/AddButton";
import DeleteButton from "../../UtilityComponents/DeleteButton";
import Input from "../../UtilityComponents/Input";
import "./WorkAchievementList.css";

function WorkAchievementList({ workAchievementList, onChange, onAddAchievementClick }) {
  return (
    <ul className="workAchievementList">
      {workAchievementList.map((workAchievement) => (
        <li className="workAchievement" key={workAchievement.id}>
          <Input
            id={workAchievement.id}
            value={workAchievement.text}
            placeholder="Achievement"
            onChange={onChange(workAchievement.id)}
          />{" "}
          <DeleteButton />
        </li>
      ))}
      <AddButton text="Add Achievement" onClick={onAddAchievementClick}/>
    </ul>
  );
}

export default WorkAchievementList;
