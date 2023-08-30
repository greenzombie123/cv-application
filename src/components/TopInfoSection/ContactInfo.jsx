import Input from "../UtilityComponents/Input";
import '../css/ContactInfo.css'

function onPhoneNumberChange(){
    
}

function ContactInfo({ phoneNumber, email, address, socialMedia, onChange, contactInfo }) {

    function onPhoneNumberChange(e){
        const number = e.target.value
        onChange({...contactInfo, phoneNumber:number})
    }    

  return (
    <ul className="contactInfo">
      <li>
        <Input type="tel" value={phoneNumber} placeholder='Enter your phone number' pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"} onChange={onPhoneNumberChange}/>
      </li>
      <li>
        <Input type="email" value={email} placeholder="Enter your email address"/>
      </li>
      <li>
        <Input value={address}/>
      </li>
      <li>
        <Input value={socialMedia}/>
      </li>
    </ul>
  );
}

export default ContactInfo;
