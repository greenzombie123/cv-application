function Input({value, className, becameText, type = "text"}){
    return(
        <input type={type} className={className} value={value}/>
    )
}

export default Input