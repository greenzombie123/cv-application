import Input from "../UtilityComponents/Input";
import '../css/ContactInfo.css'

function ContactInfo({ phoneNumber, email, address, socialMedia }) {
  return (
    <ul className="contactInfo">
      <li>
        <Input />
      </li>
      <li>
        <Input />
      </li>
      <li>
        <Input />
      </li>
      <li>
        <Input />
      </li>
    </ul>
  );
}

export default ContactInfo;
