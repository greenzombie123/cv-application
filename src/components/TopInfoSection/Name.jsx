import Input from "../UtilityComponents/Input"
import "../css/Name.css"

function Name({name, onChange, hasSubmit}){
    return (
        <div className="name">
            {hasSubmit ? <p>{name}</p> : <Input value={name} onChange={onChange}/>}
        </div>
    )
}

export default Name