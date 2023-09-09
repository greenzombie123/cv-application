import { useContext } from "react";
import { skillData } from "../../../Data/skilldata";
import { useState } from "react";

function SkillList(){
    const [skillList, setSkillList] = useState(skillData)

    <ul className="skilllist">
        {skillList.map((skill) => (
        <li className="skillList_item" key={skill.id}>
          <Input
            id={skill.id}
            value={skill.skill}
            placeholder="Enter a skill"
            onChange={onChange(skill.id)}
          />{" "}
          <button className="skillList_deleteButton" onDeleteButtonClick={onDeleteButtonClick(skillid)}>x</button>
        </li>
      ))}
      <button onClick={addSkill}>+</button>
    </ul>
}

export default SkillList

