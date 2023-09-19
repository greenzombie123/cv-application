import Input from "../UtilityComponents/Input"
import "./Name.css"
import { useContext } from "react";
import { HasSubmitContext } from "./../../context/hasSubmitContext";

function Name({name, onChange}){
    const hasSubmit = useContext(HasSubmitContext)
    
    return (
        <div className="name">
            {hasSubmit ? <p>{name}</p> : <Input value={name} onChange={onChange}/>}
        </div>
    )
}

export default Name