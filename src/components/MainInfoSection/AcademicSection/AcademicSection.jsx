import SchoolInfo from "./SchoolInfo"
import { useSchoolInfoList } from "../../hooks/useSchoolInfoList"
import "./AcademicSection.css"

function AcademicSection(){
    const {schoolInfoList, onInputChange} = useSchoolInfoList()
 
    return(
        <div className="academicSection_container">
            <h1>Academic History</h1>
            <ul className="academicSection_list">
                {schoolInfoList.map(ai=><SchoolInfo key={ai.id} {...ai} onInputChange={onInputChange(ai.id)}/>)}
            </ul>
        </div>
    )
}


export default AcademicSection