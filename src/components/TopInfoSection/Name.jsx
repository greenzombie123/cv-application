import Input from "../UtilityComponents/Input"
import "../css/Name.css"

function Name({name, onChange}){
    return (
        <div className="name">
            <Input value={name} onChange={onChange}/>
        </div>
    )
}

export default Name