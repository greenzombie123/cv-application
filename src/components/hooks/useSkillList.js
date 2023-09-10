import { useState } from "react";
import { skillData } from "../../Data/skilldata";
import { v4 as uuidv4 } from "uuid";

export const useSkillList = () => {
  const [skillList, setSkillList] = useState(skillData);

  //   function onInputChange(id) {
  //     return (propName) => {
  //       return (e) => {
  //         const listCopy = [...schoolInfoList];
  //         const schoolInfoCopy = listCopy.find((ai) => ai.id === id);
  //         schoolInfoCopy[propName] = e.target.value;
  //         setSchoolInfoList(listCopy);
  //       };
  //     };
  //   }

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

  function addItemToList(stateList, setState, newItem) {
    const listCopy = [...stateList];
    listCopy.push(newItem);
    setState(listCopy);
  }

  function incrementID() {
    const newId = skillList.length + 1;
    return newId;
  }

  function createNewSchoolInfo() {
    return {
      id: incrementID(),
      school: "",
      degree: "",
      startTime: "",
      endTime: "",
    };
  }

  return {
    skillList,
    onInputChange:onInputChange(skillList, setSkillList)
  };
};
