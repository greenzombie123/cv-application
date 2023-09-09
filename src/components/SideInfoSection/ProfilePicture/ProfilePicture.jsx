import profilePic from "../../../assets/profilePictureImg.png";
import "./ProfilePicture.css";

function ProfilePicture() {
  return (
    <div className="profilePicture">
      <img className="profilePicture_img" src={profilePic} alt="" />
      <div className="profilePicture_button">
        <label htmlFor="picture">+</label>
        <input className="profilePicture_filePicker" type="file" id="picture" />
      </div>
    </div>
  );
}

export default ProfilePicture;
