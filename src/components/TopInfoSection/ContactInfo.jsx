import Input from "../UtilityComponents/Input";
import '../css/ContactInfo.css'

function onPhoneNumberChange(){
    
}

function ContactInfo({ phoneNumber, email, address, socialMedia, onChange}) {

  return (
    <ul className="contactInfo">
      <li>
        <Input id="phonenumber" type="tel" value={phoneNumber} placeholder='Enter your phone number' pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"} onChange={onChange}/>
      </li>
      <li>
        <Input id="email "type="email" value={email} placeholder="Enter your email address"/>
      </li>
      <li>
        <Input id="address" value={address}/>
      </li>
      <li>
        <Input id="socialmedia" value={socialMedia}/>
      </li>
    </ul>
  );
}

export default ContactInfo;
