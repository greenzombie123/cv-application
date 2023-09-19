import { useState } from "react";
import { workInfoList as Info } from "../../../Data/cvinfo";

export const useWorkInfoList = () => {
  const [workInfoList, setWorkInfoList] = useState(Info);

  function onInputChange(id, propName) {
    return (e) => {
      const listCopy = [...workInfoList];
      const workInfoCopy = listCopy.find((wi) => wi.id === id);
      workInfoCopy[propName] = e.target.value;
      setWorkInfoList(listCopy);
    };
  }

  function onAchievementChange(workInfoId) {
    return (achievementId) => {
      const listCopy = [...workInfoList];
      const workInfoCopy = listCopy.find((wi) => wi.id === workInfoId);
      const achievementListCopy = workInfoCopy.workAchievementList;
      return (e) => {
        const achievement = achievementListCopy.find(
          (a) => a.id === achievementId
        );
        achievement.text = e.target.value;
        setWorkInfoList(listCopy);
      };
    };
  }

  function onAddAchievementClick(id) {
    return () => {
      const listCopy = [...workInfoList];
      const workInfoCopy = listCopy.find((wi) => wi.id === id);
      const newId = workInfoCopy.workAchievementList.length + 1;
      workInfoCopy.workAchievementList.push({ id: newId, text: "" });
      setWorkInfoList(listCopy);
    };
  }

  function deleteAchievement(workInfoId) {
    return (achievementId) => {
      const listCopy = [...workInfoList];
      const workInfoCopy = listCopy.find((wi) => wi.id === workInfoId);
      const achievementListCopy = workInfoCopy.workAchievementList;
      return () => {
        const newAchievementList = achievementListCopy.filter(
          (a) => a.id !== achievementId
        );
        workInfoCopy.workAchievementList = newAchievementList;
        setWorkInfoList(listCopy);
      };
    };
  }

    function deleteWorkInfo(id) {
      return () => {
        const listCopy = [...workInfoList];
        const newListCopy = listCopy.filter((wi) => wi.id !== id);
        setWorkInfoList(newListCopy);
      };
    }

    function addNewWorkInfo() {
      const listCopy = [...workInfoList];
      listCopy.push({
        id: listCopy.length + 1,
        startTime: "",
        endTime: "",
        company: "",
        position: "",
        workAchievementList: []
      });
      setWorkInfoList(listCopy)
    }
  
  return {
    onAchievementChange,
    onAddAchievementClick,
    onInputChange,
    deleteAchievement,
    addNewWorkInfo,
    deleteWorkInfo,
    workInfoList,
  };
};
