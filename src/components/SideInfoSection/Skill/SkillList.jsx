import { useSkillList } from "../../hooks/useSkillList";

function SkillList() {
  const { skillList, onInputChange, addItemToList, deleteItemFromList } = useSkillList();

  return (
    <ul className="skillList">
      {skillList.map((skill) => (
        <li className="skillList_item" key={skill.id}>
          <input
            id={skill.id}
            placeholder="Enter a skill"
            onChange={onInputChange(skill.id,'skill')}
            value={skill.skill}
          />{" "}
          <button className="skillList_deleteButton" onClick={deleteItemFromList(skill.id)}>x</button>
        </li>
      ))}
      <button className="skillList_addButton" onClick={addItemToList}>Add</button>
    </ul>
  );
}

export default SkillList;
