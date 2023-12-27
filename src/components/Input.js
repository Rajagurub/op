import { useEffect, useState } from "react";
const Input=(props)=>{
    const {initVal="",inputType="text",placeHolder="input",handelChangeFun}=props;
    const [inputValue,setInputValue]=useState(initVal)
    useEffect(
        ()=>{
            handelChangeFun(inputValue);
        },[inputValue]
    )
    return <input placeholder={placeHolder} type={inputType} value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
}
export default Input;