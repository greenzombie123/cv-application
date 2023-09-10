import Input from "../UtilityComponents/Input"
import "../css/Name.css"
import { useContext } from "react";
import { useHasSubmit } from "../../context/hasSubmitContext";

function Name({name, onChange}){
    const {HasSubmitContext} = useHasSubmit()
    const hasSubmit = useContext(HasSubmitContext)
    
    return (
        <div className="name">
            {hasSubmit ? <p>{name}</p> : <Input value={name} onChange={onChange}/>}
        </div>
    )
}

export default Name