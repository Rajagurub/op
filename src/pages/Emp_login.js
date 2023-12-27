import {Input} from "../components";
import {useState} from "react"
const Emp_login=()=>{
    const [userData,setUserData]=useState({name:"",pws:""})
    const  onChFun=(val)=>{
        setUserData({...userData,name:val});
    }
    const onChfunPws=(val)=>{
        setUserData({...userData,pws:val});
    }
    const submitForm=()=>{
     if(userData.name!==""&&userData.pws!==""&&userData.name==="employee1"&&userData.pws==="emp@123"){
       let token= Math.random().toString(36);
       localStorage.setItem("token",token );
       localStorage.setItem("type","emp" );
     }
    }
    console.log(dummyObj,"dummyObj")
    return(
        <div>
   <form>
    <h2>{"login Form"}</h2>
    <Input initVal={userData.name} inputType={"text"} placeHolder={"user name"} handelChangeFun={onChFun} />
    <Input initVal={userData.pws} inputType={"password"} placeHolder={"password"} handelChangeFun={onChfunPws} />
</form>
<button onSubmit={submitForm}>{"submit"}</button>
        </div>
   
    )
}
export default Emp_login;