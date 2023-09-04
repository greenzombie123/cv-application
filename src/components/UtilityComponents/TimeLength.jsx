import Input from "./Input";

function TimeLength({ startTime, endTime, onStartTimeChange, onEndTimeChange }) {
  return (
    <div className="timeLength">
      <label htmlFor="start">
        <Input type="date" id="start" value={startTime} onChange={onStartTimeChange} />
      </label>{" "}
      -{" "}
      <label htmlFor="end">
        <Input type="date" id="end" value={endTime} onChange={onEndTimeChange}/>
      </label>
    </div>
  );
}

export default TimeLength;
