import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import styled from 'styled-components';

const Login = () => {
 const history = useNavigate();
 const [userdata,setUserdata]= useState({
  userid:"",
  password:"",
});
// console.log(userdata);
const [data,setData]=useState([]); //localstorage

const handleChange =(e)=>{
//  console.log(e.target.value)
 const {name,value}=e.target;
//  console.log(value);
setUserdata(()=>{
  return{
    ...userdata,
    [name]:value
  }
})
}
const handleSubmit =(e)=>{
  e.preventDefault();
  const { userid, password } = userdata;
  // console.log("login");
  if (!userid.includes("@")){
    alert("userid field is requred")
  }else if(password === ""){
    alert ("enter your password")
  }else if (password.length < 5) {
    alert("password length greater five")
  }else{
    // alert("your login");
    swal("Success", "You are Successfully Login!", "success");
   localStorage.setItem("userlogin",JSON.stringify([...data,userdata]));
       history("/Products");
  }
}
  return (
  <Wrapper>
   <div className='form'>
   <span className='form_title'>Sing In</span>
   <form >
   <div className='form_input'>
    <input type="text" placeholder='User Id' name='userid'
    onChange={handleChange} />
    <span className='bar'></span>
   </div>
   <div className='form_input'>
    <input type="password" placeholder='Password' name='password' 
    
    onChange={handleChange}
    />
    <span className='bar'></span>
   </div>
   <button  className='form_button' onClick={handleSubmit}> Login</button>
   <span className='bar'></span>
   </form>
   </div>
  </Wrapper>
  );
};
const Wrapper = styled.section`

.form{
  position: relative;
  max-width: 40rem;
  padding: 10rem 0;
  color: #fff;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 1rem rgba(0, 0, 0, .1);
  isolation: isolate;
  left: 500px;
  top: 50px;
}
.form::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  background: linear-gradient(to left,#fc6767,#ec008c);
  border-radius: 1rem 1rem 100% 100%;
  z-index: -1;
}
.form_input {
  position: relative;
  display: flex;
  align-items: baseline;
  margin: 0 auto;
}
.form_input>i {
  font-size: 2rem;
  margin-right: 1rem;
  color: #fc6767;
}
.form_input input {
  position: relative;
  width: 100%;
  font: inherit;
  padding: 1rem 0;
  margin-top: 1.5rem;
  border: none;
  outline: none;
}
.form_input .bar {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .1);
  width: 100%;
  height: 1px;
}
.form_input .bar::before{
  content: "";
  position: absolute;
  background-color: #fc6767;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .5s;
}
.form_input>input:focus+.bar::before{
  transform: scaleX(1);
}
.form_title{
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translate(-50%);
  font-size: 2.5rem;
}
.form>form {
  padding: 2.5rem;
  background-color: inherit;
}

.form_button{
  display: block;
  margin: 2.5rem auto 3rem;
  padding: 1rem 5rem;
  background: linear-gradient(to left,#fc6767,#ec008c);
  color: #fff;
  // font: inherit;
  border: .5rem solid #fff;
  outline: none;
  cursor: pointer;
  border-radius: 3rem;
}
.form_button:hover{
  background: linear-gradient(to right,#fc6767,#ec008c);
}

@media screen and (min-width:43.75rem) {
  .form::before{
      height: 30rem;
  }
  .form_title{
      left: 10rem;
      transform: none;
  }
  .form>form {
      transform: translateX(10rem);
      border-radius: inherit;
      box-shadow: inherit;
  }
}
`;
export default Login;
