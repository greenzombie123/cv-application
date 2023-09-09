import profilePic from "../../../assets/profilePictureImg.png"
import "./ProfilePicture.css"

function ProfilePicture(){
    return (

        <div className="profilePicture">
            <img className="profilePicture_img" src={profilePic} alt="" />  
            <button className="profilePicture_button">+</button>
            <input className="profilePicture_filePicker" type="file" />
        </div>
    )
}

export default ProfilePicture