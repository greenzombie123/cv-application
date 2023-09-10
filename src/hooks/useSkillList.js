import { useState } from "react";
import { skillData } from "../Data/skilldata";
import { v4 as uuidv4 } from "uuid";

export const useSkillList = () => {
  const [skillList, setSkillList] = useState(skillData);

  function onInputChange(stateList, setState) {
    return (id, propName) => {
      return (e) => {
        const listCopy = [...stateList];
        const itemCopy = listCopy.find((ai) => ai.id === id);
        itemCopy[propName] = e.target.value;
        setState(listCopy);
      };
    };
  }

  function deleteItemFromList(stateList, setState) {
    return (id) => {
      return () => {
        const listCopy = [...stateList];
        const itemCopy = listCopy.filter((wi) => wi.id !== id);
        setState(itemCopy);
      };
    };
  }

  function addItemToList(stateList, setState, callback) {
    return () => {
      const listCopy = [...stateList];
      const newItem = callback();
      listCopy.push(newItem);
      setState(listCopy);
    };
  }

  function createNewSkill() {
    return {
      id: uuidv4(),
      skill: "",
    };
  }

  return {
    skillList,
    onInputChange: onInputChange(skillList, setSkillList),
    deleteItemFromList: deleteItemFromList(skillList, setSkillList),
    addItemToList: addItemToList(skillList, setSkillList, createNewSkill),
  };
};
