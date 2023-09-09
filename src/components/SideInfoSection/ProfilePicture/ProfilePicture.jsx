import "./ProfilePicture.css";
import { useProfilePicture } from "../../hooks/useProfilePicture";
import blankPic from "../../../assets/blank.webp";
import { useContext } from "react";
import { useHasSubmit } from "../../../hasSubmitContext";

function ProfilePicture() {
  const { profilePicture, addPicture, deletePicture } = useProfilePicture();
  const { HasSubmitContext } = useHasSubmit();
  const hasSubmit = useContext(HasSubmitContext);

  
  if (hasSubmit) {
    return (
      <div className="profilePicture">
        <img
          className="profilePicture_img"
          src={profilePicture || blankPic}
          alt=""
        />
        </div>
    );
  }

  return (
    <div className="profilePicture">
      <img
        className="profilePicture_img"
        src={profilePicture || blankPic}
        alt=""
      />
      <div className="profilePicture_button">
        <label htmlFor="picture">{profilePicture ? "⟳" : "+"}</label>
        <input
          className="profilePicture_filePicker"
          type="file"
          id="picture"
          onChange={addPicture}
        />
      </div>

      <button className="profilePicture_deleteButton" onClick={deletePicture}>
        x
      </button>
    </div>
  );
}

export default ProfilePicture;
