import "../css/Top.css"
import ContactInfo from "./ContactInfo";
import Name from "./Name";

function TopInfoSection() {
    let name = "Alvin Hart"
    return (
        <div className="top">
           <Name name={name}/> 
           <ContactInfo/>
        </div>
    )
}

export default TopInfoSection;
