import TimeLength from "../../UtilityComponents/TimeLength";

function SchoolInfo({ school, degree, startTime, endTime, onInputChange }) {
  const hasSubmit = false;
  // return(
  //     if (hasSubmit) {
  //         return (
  //           <>
  //             <h1>Work Experience</h1>
  //             <ul className="workSection">
  //               {workInfoList.map((workInfo) => (
  //                 <li key={workInfo.id}>
  //                   <p>{workInfo.company}</p>
  //                   <p>{workInfo.position}</p>
  //                   <p>{workInfo.startTime + "-" + workInfo.endTime}</p>
  //                   <ul>
  //                     {workInfo.workAchievementList.map((WorkAchievement) => (
  //                       <li key={WorkAchievement.id}>{WorkAchievement.text}</li>
  //                     ))}
  //                   </ul>
  //                 </li>
  //               ))}
  //             </ul>
  //           </>
  //         );
  //       } else
  return (
    <li className="schoolInfo">
      <input
        value={school}
        placeholder="School Name"
        onChange={onInputChange("school")}
      />
      <input
        value={degree}
        placeholder="Degree"
        onChange={onInputChange("degree")}
      />
      <TimeLength
        startTime={startTime}
        endTime={endTime}
        onStartTimeChange={onInputChange("startTime")}
        onEndTimeChange={onInputChange("endTime")}
      />
    </li>
  );
}

export default SchoolInfo;
