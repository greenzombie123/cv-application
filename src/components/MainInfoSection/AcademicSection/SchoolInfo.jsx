import TimeLength from "../../UtilityComponents/TimeLength";
import { useContext } from "react";
import { HasSubmitContext } from "../../../context/hasSubmitContext";
import { formatDate } from "../../../util/formatDate";

function SchoolInfo({
  school,
  degree,
  startTime,
  endTime,
  onInputChange,
  onDeleleButtonClick,
}) {
  const hasSubmit = useContext(HasSubmitContext);

  if (hasSubmit) {
    return (
      <li className="schoolInfo schoolInfo_submit">
        <p>{school}</p>
        <p>{degree}</p>
        <p>{formatDate(startTime, endTime)}</p>
      </li>
    );
  } else
    return (
      <li className="schoolInfo">
        <button className="schoolInfo_deleteButton" onClick={onDeleleButtonClick}>
          x
        </button>
        <input
          className="schoolInfo_input"
          value={school}
          placeholder="School Name"
          onChange={onInputChange("school")}
        />
        <input
          className="schoolInfo_input"
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
