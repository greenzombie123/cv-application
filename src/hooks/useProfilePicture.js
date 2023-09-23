import { useState } from "react";

export const useProfilePicture = ()=> {
    const [profilePicture, setProfilePicture] = useState("")

    function addPicture(e){
        // console.log(e.target.files);
        const pic = window.URL.createObjectURL(e.target.files[0])
        setProfilePicture(pic)
    }

    function deletePicture(){
        setProfilePicture("")
    }

    return {
        profilePicture, addPicture, deletePicture
    }
}