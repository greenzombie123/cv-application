import { useState } from "react";
import { workInfoList as Info } from "../../../cvinfo";

export const useWorkInfo = () =>{
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
    
      function onAddAchievementClick(id){
        return () => {
          const listCopy = [...workInfoList];
          const workInfoCopy = listCopy.find((wi) => wi.id === id);
          const newId = workInfoCopy.workAchievementList.length + 1
          workInfoCopy.workAchievementList.push({id:newId, text:""})
          setWorkInfoList(listCopy)
        };
      }
    return {
        onAchievementChange, onAddAchievementClick, onInputChange, workInfoList
    }
}

