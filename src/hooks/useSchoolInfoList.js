import { useState } from "react";
import { academicInfo } from "../Data/cvinfo";

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
      school: "",
      degree: "",
      startTime: "2024-12-31",
      endTime: "2024-12-31",
    });
    setSchoolInfoList(listCopy);
  }

  return {
    onInputChange,
    addNewSchoolInfo,
    deleteSchoolInfo,
    schoolInfoList,
  };
};
