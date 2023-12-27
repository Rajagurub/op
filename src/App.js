import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Emp_login from "./pages/Emp_login"
const App=()=>{
  return(
    <BrowserRouter>
      <Emp_login/>
    </BrowserRouter>
  )
}

export default App;
