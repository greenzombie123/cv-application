import { useContext } from "react";
import { useSkillList } from "../../hooks/useSkillList";

function SkillList() {
  const { skillList, onInputChange } = useSkillList();

  return (
    <ul className="skilllist">
      {skillList.map((skill) => (
        <li className="skillList_item" key={skill.id}>
          <input
            id={skill.id}
            value={skill.skill}
            placeholder="Enter a skill"
            onChange={onInputChange(skill.id,'skill')}
          />{" "}
          <button className="skillList_deleteButton">x</button>
        </li>
      ))}
      <button>+</button>
    </ul>
  );
}

export default SkillList;
