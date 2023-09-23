import Input from "../UtilityComponents/Input";
import "./ContactInfo.css";
import { useContext } from "react";
import { HasSubmitContext } from "../../context/hasSubmitContext";

function ContactInfo({ phoneNumber, email, address, socialMedia, onChange }) {
  const hasSubmit = useContext(HasSubmitContext);

  return (
    <ul className="contactInfo">
      <li>
        {hasSubmit ? (
          phoneNumber ? (
            <p>{phoneNumber}</p>
          ) : (
            <p>Enter your number</p>
          )
        ) : (
          <Input
            id="phonenumber"
            type="tel"
            value={phoneNumber}
            placeholder="Enter your phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={onChange}
          />
        )}
      </li>
      <li>
        {hasSubmit ? (
          email ? (
            <p>{email}</p>
          ) : (
            <p>Enter your email address</p>
          )
        ) : (
          <Input
            id="email"
            type="email"
            value={email}
            placeholder="Enter your email address"
            onChange={onChange}
          />
        )}
      </li>
      <li>
        {hasSubmit ? (
          address ? (
            <p>{address}</p>
          ) : (
            <p>Enter your address</p>
          )
        ) : (
          <Input id="address" value={address} onChange={onChange} placeholder="Enter your address"/>
        )}
      </li>
      <li>
        {hasSubmit ? (
          socialMedia ? (
            <p>{socialMedia}</p>
          ) : (
            <p>Enter your social media</p>
          )
        ) : (
          <Input id="socialmedia" value={socialMedia} onChange={onChange} placeholder="Enter you social media"/>
        )}
      </li>
    </ul>
  );
}

export default ContactInfo;
