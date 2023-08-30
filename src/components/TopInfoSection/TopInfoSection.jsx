import "../css/Top.css"
import ContactInfo from "./ContactInfo";
import Name from "./Name";

function TopInfoSection() {
    let name = "Alvin Hart"
    let contactInfo = {phoneNumber:1231321, email:"ggg@", socialMedia:"ggg.twitter", address:"Phoenix, AZ"}
    return (
        <div className="top">
           <Name name={name}/> 
           <ContactInfo {...contactInfo}/>
        </div>
    )
}

export default TopInfoSection;
