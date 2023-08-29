import Input from "../UtilityComponents/Input"
import "../css/Name.css"

function Name({name}){
    return (
        <div className="name">
            <Input value={name}/>
        </div>
    )
}

export default Name