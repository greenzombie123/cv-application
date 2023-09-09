import { useState } from "react";
import { academicInfo } from "../../Data/academicinfo";

export const useSchoolInfoList = () => {
  const [schoolInfoList, setSchoolInfoList] = useState(academicInfo);

  function onInputChange(id) {
    return (propName) => {
      return (e) => {
        const listCopy = [...schoolInfoList];
        const schoolInfoCopy = listCopy.find((ai) => ai.id === id);
        schoolInfoCopy[propName] = e.target.value;
        setSchoolInfoList(listCopy);
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

  function deleteSchoolInfo(id) {
    return () => {
      const listCopy = [...schoolInfoList];
      const newListCopy = listCopy.filter((wi) => wi.id !== id);
      setSchoolInfoList(newListCopy);
    };
  }

  function addNewSchoolInfo() {
    const listCopy = [...schoolInfoList];
    listCopy.push({
      id: listCopy.length + 1,
      school: null,
      degree: null,
      startTime: null,
      endTime: null,
    });
    setSchoolInfoList(listCopy);
  }

  return {
    onAddAchievementClick,
    onInputChange,
    deleteAchievement,
    addNewSchoolInfo,
    deleteSchoolInfo,
    schoolInfoList,
  };
};
