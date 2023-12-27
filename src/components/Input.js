import { useState } from "react";
const Input=(props)=>{
    const {initVal="",inputType="text",placeHolder="input",handelChangeFun}=props;
    return <input placeholder={placeHolder} type={inputType} value={initVal} onChange={(e)=>handelChangeFun(e.target.value)}/>
}
export default Input;