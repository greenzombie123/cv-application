import { useState } from "react";
import profilePic from "../../assets/profilePictureImg.png"

export const useProfilePicture = ()=> {
    const [profilePicture, setProfilePicture] = useState(profilePic)

    function addPicture(e){
        const pic = e.target.value
        setProfilePicture(pic)
    }

    return {
        profilePicture, addPicture
    }
}