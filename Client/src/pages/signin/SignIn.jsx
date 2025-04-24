import {useState} from "react";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
const SignIn = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:1459/api/user/signin",{email,password}).then((resp)=>{
     if(resp.data.ok){
      navigate("/")
      console.log(resp.data)
      localStorage.setItem("token",resp.data.result)
     }else{
      toast("User Doesn't Exists",{
        style: {
          backgroundColor: 'red',
          color: 'white',
          fontWeight:"bold",
          fontFamily:"cursive"
        },
      })
     }
    }).catch((error)=>{
      console.log(error)
      alert("something went wrong")
    }) 
  };
 

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" >Login</button>  <br /> <br />
        <a href="" onClick={()=>{navigate("/signup")}} style={{textDecoration:"none",fontSize:"18px"}}>Create an Account</a>
                
      </form>
      
      
    </div>
  );
};

export default SignIn;
