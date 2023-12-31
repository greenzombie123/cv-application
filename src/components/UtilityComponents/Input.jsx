function Input({value, onChange, className, id=null, type = "text", placeholder = "null"}){
    return(
        <input id={id} type={type} className={className} value={value} onChange={e=>onChange(e)} placeholder={placeholder}/>
    )
}

export default Input