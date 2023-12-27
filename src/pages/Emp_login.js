import {Input} from "../components";
const Emp_login=()=>{
    let dummyObj={name:"",pws:""};
    let onChFun=(val)=>{
        dummyObj.name=val;
    }
    return(
        <div>
   <form>
    <h2>{"login Form"}</h2>
    <Input initVal={dummyObj.name} inputType={"text"} placeHolder={"user name"} handelChangeFun={onChFun} />
</form>
<button>{"submit"}</button>
        </div>
   
    )
}
export default Emp_login;