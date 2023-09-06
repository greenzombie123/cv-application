import SchoolInfo from "./SchoolInfo";
import { useSchoolInfoList } from "../../hooks/useSchoolInfoList";
import "./AcademicSection.css";

function AcademicSection() {
  const { schoolInfoList, onInputChange, addNewSchoolInfo, deleteSchoolInfo } =
    useSchoolInfoList();

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
      <button onClick={addNewSchoolInfo}>Add School Entry</button>
    </div>
  );
}

export default AcademicSection;
