import Input from "./Input";
import "./TimeLength.css";

function TimeLength({
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
}) {
  return (
    <div className="timeLength">
      <div className="timeLength_timeSlot">
        <label htmlFor="start">Start</label>
        <Input
          type="date"
          id="start"
          value={startTime}
          onChange={onStartTimeChange}
        />
      </div>
      <div className="timeLength_timeSlot">
        <label htmlFor="end">End</label>
        <Input
          type="date"
          id="end"
          value={endTime}
          onChange={onEndTimeChange}
        />
      </div>
    </div>
  );
}

export default TimeLength;
