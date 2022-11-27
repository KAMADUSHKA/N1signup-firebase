import { Profiler, useRef, useState, useEffect } from "react";
import { async } from "@firebase/util";
import { signup } from "./firebase";
import  Profile  from "./image/AAAA.png";
// import fireDb from "../firebase";
// import {toast} from "react-toastify";


// const initialState = {
//   email:"",
//   name:"",
//   contact:"",
// }
export default function App(){
  const [ loading, setLoading ] = useState(false);
  const emailRef =useRef();
  const passwordRef =useRef();

  async function handlesignup(){
    setLoading(true);
    try{
    await signup(emailRef.current.value ,passwordRef.current.value);
    }catch{
      alert("This Email Alrady Exist");
    }
    setLoading(false);
  }


  // const handleSubmitc = (e) => {
  //   e.preventDefault();
  //   if(!email|| !name|| !contact  ){
  //     TransformStream.erro("Please provide value in each input field");
  //   }else{
  //     fireDb.child("samplrproject4").push(state,(err)=>{
  //       if (err){
  //         toast.erro(err);
  //       }else{
  //         toast.success("oject4 added succesfully");
  //       }
  //     });
  //   }
  // }

  // const App = () =>{
  //   const [state, setState] = userState(initialState);
  //   const [data, setData] = userState({});

  //   const [email, name, contact ] = state;
  


  return (
    <div  id="main">
      <div id="sub-main" className="w3-padding-64 w3-panel">

        
        <div id="imag">

            <img src={ Profile } alt= "profile" className="w3-image profile"  />

       </div>


        <div id="fields" >

          <input ref={ emailRef } placeholder="Email" className="w3-input"/><br/>
          <input ref={ passwordRef } type="password" placeholder="Passworad" className="w3-input"/><br/>
          <input placeholder="User name" className="w3-input"/><br/>
          <input placeholder="Contact Number" className="w3-input"/>
          <br/>
          <button disabled={loading} onClick={handlesignup} className="w3-button w3-white" >signup</button><hr className="w3-clear"/>

        </div>


      </div>   
    </div>
  );
} 
// }
