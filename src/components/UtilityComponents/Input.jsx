function Input({value, onChange, className, becameText, id=null, type = "text", placeholder = null, pattern=null}){
    return(
        <input id={id} type={type} className={className} value={value} onChange={e=>onChange(e)} placeholder={placeholder} pattern={pattern}/>
    )
}

export default Input