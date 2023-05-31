import React,{useState} from 'react';

const Signup=()=>{
    const[name,setName]=useState("");
    const[admissionNumber,setadmissionNumber]=useState("");
    const[password,setPassword]=useState("");
    const collectData=()=>{
        console.warn(name,admissionNumber,password)

    }
   


    return(<div className='register'> <h1>Register </h1>   
    <input className='inputBox' type= 'text' placeholder='Enter Name'
    value={name} onChange={(e)=>setName(e.target.value)}/>

    <input className='inputBox'type= 'text' placeholder='Enter Admission Number'
    value={admissionNumber} onChange={(e)=>setadmissionNumber(e.target.value)}/>

    <input className='inputBox' type= 'password' placeholder='Enter Password'
    value={password} onChange={(e)=>setPassword(e.target.value)}/>

    <button  onClick={collectData}    className='appButton'type='button'>Sign Up</button>
    
    </div>
    
    )
}
export default Signup;