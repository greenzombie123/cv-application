import { useState } from "react";
import { useContext } from "react";
import { useHasSubmit } from "../../../context/hasSubmitContext";
import { objectiveInfo } from "../../../Data/ObjectiveInfo";
import "./CareerObjective.css"
import { useResizeTextarea } from "../../../hooks/useResizeTextArea";
import { useEffect } from "react";

function CareerObjectiveSection() {
  const [objective, setObjective] = useState(objectiveInfo);
  const { HasSubmitContext } = useHasSubmit();
  const hasSubmit = useContext(HasSubmitContext);
  const {textareaRef, resizeTextarea} = useResizeTextarea()

  const onInputChange = (e) => {
    const value = e.target.value;
    setObjective(value);
  };

  useEffect(resizeTextarea)

  return (
    <div className="careerObjective">
      <h1>Career Objective</h1>
      {hasSubmit ? (
        <p>{objective}</p>
      ) : (
        <textarea ref={textareaRef} onChange={onInputChange} onInput={resizeTextarea} placeholder="Enter your objective" value={objective} cols={60} rows={4}/>
      )}
    </div>
  );
}

export default CareerObjectiveSection;
