import SchoolInfo from "./SchoolInfo";
import { useSchoolInfoList } from "../../../hooks/useSchoolInfoList";
import { HasSubmitContext } from "../../../context/hasSubmitContext";
import { useContext } from "react";
import './AcademicSection.css'

function AcademicSection() {
  const { schoolInfoList, onInputChange, addNewSchoolInfo, deleteSchoolInfo } =
    useSchoolInfoList();
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
            noDeleteButton={schoolInfoList.length === 1}
          />
        ))}
      </ul>
      {!hasSubmit && (
        <button className="academicList_addButton" onClick={addNewSchoolInfo}>Add Another School</button>
      )}
    </div>
  );
}

export default AcademicSection;
