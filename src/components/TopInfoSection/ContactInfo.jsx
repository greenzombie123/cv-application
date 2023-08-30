import Input from "../UtilityComponents/Input";
import "../css/ContactInfo.css";

function ContactInfo({
  phoneNumber,
  email,
  address,
  socialMedia,
  onChange,
  hasSubmit,
}) {
  return (
    <ul className="contactInfo">
      <li>
        {hasSubmit ? (
          <p>{phoneNumber}</p>
        ) : (
          <Input
            id="phonenumber"
            type="tel"
            value={phoneNumber}
            placeholder="Enter your phone number"
            pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
            onChange={onChange}
          />
        )}
      </li>
      <li>
        {hasSubmit ? (
          <p>{email}</p>
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
          <p>{address}</p>
        ) : (
          <Input id="address" value={address} onChange={onChange} />
        )}
      </li>
      <li>
        {hasSubmit ? (
          <p>{socialMedia}</p>
        ) : (
          <Input id="socialmedia" value={socialMedia} onChange={onChange} />
        )}
      </li>
    </ul>
  );
}

export default ContactInfo;
