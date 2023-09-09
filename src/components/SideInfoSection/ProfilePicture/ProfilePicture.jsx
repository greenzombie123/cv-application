// import profilePic from "../../../assets/profilePictureImg.png";
import "./ProfilePicture.css";
import { useProfilePicture } from "../../hooks/useProfilePicture";

function ProfilePicture() {
    const {profilePicture} = useProfilePicture() 
  return (
    <div className="profilePicture">
      <img className="profilePicture_img" src={profilePicture} alt="" />
      <div className="profilePicture_button">
        <label htmlFor="picture">+</label>
        <input className="profilePicture_filePicker" type="file" id="picture" />
      </div>
    </div>
  );
}

export default ProfilePicture;
