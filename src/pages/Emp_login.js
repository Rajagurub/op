import {Input} from "../components";
const Emp_login=()=>{
    let dummyObj={name:"",pws:""};
    const  onChFun=(val)=>{
        dummyObj.name=val;
    }
    const onChfunPws=(val)=>{
        dummyObj.pws=val;
    }
    const submitForm=()=>{
     if(dummyObj.name!==""&&dummyObj.pws!==""&&dummyObj.name==="employee1"&&dummyObj.pws==="emp@123"){
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
    <Input initVal={dummyObj.name} inputType={"text"} placeHolder={"user name"} handelChangeFun={onChFun} />
    <Input initVal={dummyObj.pws} inputType={"password"} placeHolder={"password"} handelChangeFun={onChfunPws} />
</form>
<button onSubmit={submitForm}>{"submit"}</button>
        </div>
   
    )
}
export default Emp_login;