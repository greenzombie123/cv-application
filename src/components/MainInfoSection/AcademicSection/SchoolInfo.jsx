import TimeLength from "../../UtilityComponents/TimeLength";
import { useContext } from "react";
import { useHasSubmit } from "../../../context/hasSubmitContext";

function SchoolInfo({
  school,
  degree,
  startTime,
  endTime,
  onInputChange,
  onDeleleButtonClick,
}) {
  const {HasSubmitContext} = useHasSubmit()
  const hasSubmit = useContext(HasSubmitContext)

  if (hasSubmit) {
    return (
      <li className="schoolInfo">
        <p>{school}</p>
        <p>{degree}</p>
        <p>{startTime + "-" + endTime}</p>
      </li>
    );
  } else
    return (
      <li className="schoolInfo">
        <button className="deleteButton" onClick={onDeleleButtonClick}>
          x
        </button>
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
