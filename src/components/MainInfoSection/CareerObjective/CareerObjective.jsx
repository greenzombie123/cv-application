import { useState } from "react";
import { useContext } from "react";
import { useHasSubmit } from "../../../hasSubmitContext";
import { objectiveInfo } from "../../../Data/ObjectiveInfo";

function CareerObjectiveSection() {
  const [objective, setObjective] = useState(objectiveInfo);
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
        <textarea onChange={onInputChange} placeholder="Enter your objective" value={objective} cols={60} rows={4}/>
      )}
    </div>
  );
}

export default CareerObjectiveSection;
