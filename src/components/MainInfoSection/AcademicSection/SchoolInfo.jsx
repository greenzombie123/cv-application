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
        // onChange={onInputChange(workInfo.id, "company")}
      />
      <input
        value={degree}
        placeholder="Position"
        // onChange={onInputChange(workInfo.id, "position")}
      />
      <TimeLength
        startTime={startTime}
        endTime={endTime}
        // onStartTimeChange={onInputChange(id, "startTime")}
        // onEndTimeChange={onInputChange(id, "endTime")}
      />
    </li>
  );
}

export default SchoolInfo;
