import "../css/Top.css"
import Name from "./Name";

function TopInfoSection() {
    let name = "Alvin Hart"
    return (
        <div className="top">
           <Name name={name}/> 
        </div>
    )
}

export default TopInfoSection;
