import { useState } from "react";
import "../css/Top.css"
import ContactInfo from "./ContactInfo";
import Name from "./Name";

function TopInfoSection({hasSubmit}) {
    const [name, setName] = useState("Alvin Hart")
    const [contactInfo, setContactInfo] = useState({phoneNumber:1231321, email:"ggg@hhh", socialMedia:"ggg.twitter", address:"Phoenix, AZ"}) 
    
    function onNameChange(e){
        setName(e.target.value)
    }

    function onContactInfoChange(e){
        const value = e.target.value
        const id = e.target.id
        if(id === "phonenumber")setContactInfo({...contactInfo, phoneNumber:value})
        if(id === "address")setContactInfo({...contactInfo, address:value})
        if(id === "email")setContactInfo({...contactInfo, email:value})
        if(id === "socialmedia")setContactInfo({...contactInfo, socialMedia:value})
    }

    return (
        <div className="top">
           <Name name={name} onChange={onNameChange} hasSubmit={hasSubmit}/> 
           <ContactInfo {...contactInfo} onChange={onContactInfoChange} hasSubmit={hasSubmit}/>
        </div>
    )
}

export default TopInfoSection;
