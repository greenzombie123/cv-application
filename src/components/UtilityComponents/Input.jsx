function Input({value, className, becameText, type = "text", placeholder = null, pattern=null}){
    return(
        <input type={type} className={className} value={value} placeholder={placeholder} pattern={pattern}/>
    )
}

export default Input