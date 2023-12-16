
import { useState } from 'react';
import './App.css';
function App() {
  const [email,setemail]=useState("")
  const [password,setpassword] = useState("")
  const [cpass,setcpass] = useState("")
  const [e,sete] = useState(true)
  const [c,setc] = useState(true)
  const [cp,setcp] = useState(true)
  function handleEmail(e){
    setemail(e.target.value)
     if(e.target.value.includes("@")){
        e.target.style.border="1px solid green"
        sete(false)
     }else{
      e.target.style.border="1px solid red"
     }
  }
  function handlepass(e){
    setpassword(e.target.value)
    if(e.target.value.length>=8){
      e.target.style.border="1px solid green"
      setc(false)
   }else{
    e.target.style.border="1px solid red"
   }
   
  }
  function handleCp(e){
    setcpass(e.target.value)
    if(e.target.value===password){
      e.target.style.border="1px solid green"
      setcp(false)
   }else{
    e.target.style.border="1px solid red"
   }
  }
  function submitform(){
       if(password===""|| cpass===""|| email===""){
        alert("Fill All the fields")
       }
       else if(password.length<8){
        alert("enter atleast 8 character")
       }else if(password!==cpass){
        alert("password and confirm password must be same")
       }else{
        alert("form submitted succesfully")
       }
  }
  return (
    <div className="App">
     <form action="">
      <div>
        <label>Email</label>
        <input type="email" required onChange={handleEmail}/>
        {e&&<span>invalid email formet</span>}
      </div>
      <div>
      <label>Email</label>
        <input type="password" minLength={8} required onChange={handlepass}/>
        {c&&<span>password must be atleast 8 character</span>}
      </div>
      <div>
      <label>Email</label>
        <input type="password" minLength={8} required onChange={handleCp}/>
        {cp&&<span>password and confirm password must be equal</span>}
      </div>
      <button type='submit' onClick={submitform}>submit</button>
     </form>
    </div>
  );
}

export default App;
