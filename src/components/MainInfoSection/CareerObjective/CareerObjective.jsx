import { useState } from "react";
import { useContext } from "react";
import { useHasSubmit } from "../../../hasSubmitContext";

function CareerObjectiveSection() {
  const [objective, setObjective] = useState("");
  const { HasSubmitContext } = useHasSubmit();
  const hasSubmit = useContext(HasSubmitContext);

  const onInputChange = (e) => {
    const value = e.targer.value;
    setObjective(value);
  };

  return (
    <div className="careerObjective">
      <h1>Career Objective</h1>
      {hasSubmit ? (
        <p>{objective}</p>
      ) : (
        <input onChange={onInputChange} placeholder="Enter your objective"></input>
      )}
    </div>
  );
}

export default CareerObjectiveSection;
