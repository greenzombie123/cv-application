import { useState } from "react";
import "./Top.css"
import ContactInfo from "./ContactInfo";
import Name from "./Name";

function TopInfoSection() {
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
           <Name name={name} onChange={onNameChange}/> 
           <ContactInfo {...contactInfo} onChange={onContactInfoChange}/>
        </div>
    )
}

export default TopInfoSection;
