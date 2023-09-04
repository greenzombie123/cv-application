function AddButton({onClick, text = "Add"}){
    return (
        <button onClick={e => onClick(e)}>{text}</button>
    )
}

export default AddButton