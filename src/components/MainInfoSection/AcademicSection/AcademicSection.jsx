import SchoolInfo from "./SchoolInfo";
import { useSchoolInfoList } from "../../../hooks/useSchoolInfoList";
import { useHasSubmit } from "../../../context/hasSubmitContext";
import { useContext } from "react";
import "./AcademicSection.css"

function AcademicSection() {
  const { schoolInfoList, onInputChange, addNewSchoolInfo, deleteSchoolInfo } =
    useSchoolInfoList();
  const { HasSubmitContext } = useHasSubmit();
  const hasSubmit = useContext(HasSubmitContext);

  return (
    <div className="academicSection_container">
      <h1>Academic History</h1>
      <ul className="academicSection_list">
        {schoolInfoList.map((ai) => (
          <SchoolInfo
            key={ai.id}
            {...ai}
            onInputChange={onInputChange(ai.id)}
            onDeleleButtonClick={deleteSchoolInfo(ai.id)}
          />
        ))}
      </ul>
      {!hasSubmit && (
        <button onClick={addNewSchoolInfo}>Add School Entry</button>
      )}
    </div>
  );
}

export default AcademicSection;
