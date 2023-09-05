import "./DeleteButton.css"

function DeleteButton({onDeleteButtonClick}){
    return (
        <button onClick={onDeleteButtonClick} className="deleteButton">x</button>
    )
}


export default DeleteButton