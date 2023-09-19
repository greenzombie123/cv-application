import { useSkillList } from "../../../hooks/useSkillList";
import { HasSubmitContext } from "../../../context/hasSubmitContext";
import { useContext } from "react";
import './SkillList.css'

function SkillList() {
  const { skillList, onInputChange, addItemToList, deleteItemFromList } =
    useSkillList();
  const hasSubmit = useContext(HasSubmitContext);

  if (hasSubmit) {
    return (
      <div className="skillList_container">
        <h1>Skills</h1>
        <ul className="skillList">
          {skillList.map((skill) => (
            <li className="skillList_item" key={skill.id}>
              <p>{skill.skill}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Skills</h1>
      <ul className="skillList">
        {skillList.map((skill) => (
          <li className="skillList_item" key={skill.id}>
            <input
              placeholder="Enter a skill"
              onChange={onInputChange(skill.id, "skill")}
              value={skill.skill}
            />{" "}
            <button
              className="skillList_deleteButton"
              onClick={deleteItemFromList(skill.id)}
            >
              x
            </button>
          </li>
        ))}
        <button className="skillList_addButton" onClick={addItemToList}>
          Add
        </button>
      </ul>
    </div>
  );
}

export default SkillList;
