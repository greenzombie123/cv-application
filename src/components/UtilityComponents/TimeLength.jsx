import Input from "./Input";

function TimeLength({ startTime, endTime }) {
  return (
    <div className="timeLength">
      <label htmlFor="start">
        <Input type="date" id="start" value={startTime} />
      </label>{" "}
      -{" "}
      <label htmlFor="end">
        <Input type="date" id="end" value={endTime} />
      </label>
    </div>
  );
}

export default TimeLength;
