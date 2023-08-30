function Input({value, onChange, className, becameText, type = "text", placeholder = null, pattern=null}){
    return(
        <input type={type} className={className} value={value} onChange={e=>onChange(e)} placeholder={placeholder} pattern={pattern}/>
    )
}

export default Input