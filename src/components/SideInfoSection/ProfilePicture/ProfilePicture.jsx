import profilePic from "../../../assets/profilePictureImg.png"
import "./ProfilePicture.css"

function ProfilePicture(){
    return (

        <div className="profilePicture">
            <img className="profilePicture_img" src={profilePic} alt="" />  
            <div className="profilePicture_button">
            +<input className="profilePicture_filePicker" type="file" />
            </div>
        </div>
    )
}

export default ProfilePicture