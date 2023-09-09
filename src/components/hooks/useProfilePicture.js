import { useState } from "react";
import profilePic from "../../assets/profilePictureImg.png"

export const useProfilePicture = ()=> {
    const [profilePicture, setProfilePicture] = useState(profilePic)

    function addPicture(e){
        const pic = window.URL.createObjectURL(e.target.files[0])
        setProfilePicture(pic)
    }

    return {
        profilePicture, addPicture
    }
}