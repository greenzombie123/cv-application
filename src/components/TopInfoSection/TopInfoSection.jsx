import { useState } from "react";
import "../css/Top.css"
import ContactInfo from "./ContactInfo";
import Name from "./Name";

function TopInfoSection() {
    const [name, setName] = useState("Alvin Hart")
    const [contactInfo, setContactInfo] = useState({phoneNumber:1231321, email:"ggg@hhh", socialMedia:"ggg.twitter", address:"Phoenix, AZ"}) 
    
    function onNameChange(e){
        setName(e.target.value)
    }

    function onContactInfoChange(e){
        setContactInfo(e)
    }
    
    //let name = "Alvin Hart"
    //let contactInfo = {phoneNumber:1231321, email:"ggg@hhh", socialMedia:"ggg.twitter", address:"Phoenix, AZ"}

    return (
        <div className="top">
           <Name name={name} onChange={onNameChange}/> 
           {/* <ContactInfo {...contactInfo}/> */}
        </div>
    )
}

export default TopInfoSection;
