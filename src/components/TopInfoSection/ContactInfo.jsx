import Input from "../UtilityComponents/Input";
import '../css/ContactInfo.css'

function ContactInfo({ phoneNumber, email, address, socialMedia }) {
  return (
    <ul className="contactInfo">
      <li>
        <Input type="tel" value={phoneNumber} placeholder='Enter your phone number' pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}/>
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
