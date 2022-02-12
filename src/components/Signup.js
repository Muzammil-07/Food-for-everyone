import reactDom from "react-dom";
import React from "react";
import firebase from '../firebase';
import 'firebase/firestore'
import 'firebase/auth'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import Login from "./Login";


function Signup(){
  const db = firebase.firestore();
const history = useHistory();

    const [email, setEmail] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [Name, setName] = React.useState('')
    const [Dob, setDob] = React.useState('')
    const [color, setcolor] = React.useState('')
    const eEmail =event=>{
      setEmail(event.target.value)

     }
     const epass =event=>{
      setpassword(event.target.value)

     }
     const dob=event=>{
      setDob(event.target.value)
     }
     const fcolor=event=>{
        setcolor(event.target.value)
    }
    const userName=event=>{
      setName(event.target.value)
  }
    const Submit= event=>{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // Signed in 
   
        alert("SignedIn")
        console.log(res)
       let user= (res.uid)
       
      
        db.collection('Users').doc(user).set({
          name: Name,
          Email: email,
          FavoriteColor: color,
          Date_of_birth: Dob,
          uid : user
        })
        setTimeout(()=>{
          history.push('/Login')
        },500)
     
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });

      event.preventDefault()
    }
    
    return(
      <div className="container">
          <form className="row g-3" onSubmit={Submit}>
          <div className="col-md-6">
    <label for="inputEmail4" className="form-label" >UserName</label>
    <input type="text" className="form-control" id="inputEmail4" onChange={userName} required/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label" >Email</label>
    <input type="email" className="form-control" id="inputEmail4" onChange={eEmail} required/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" onChange={epass} required/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">DATE-OF-BIRTH</label>
    <input type="number" className="form-control" id="inputPassword4" onChange={dob} placeholder='Year' required/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Favorite Color</label>
    <input type="text" className="form-control" id="inputPassword4" onChange={fcolor} placeholder='Color' required/>
  </div>

  

  
 
  <div className="col-12">
    <button type="submit" className="btn btn-primary" >Sign in</button>
  </div>
</form>
      </div>
        
    )
}
export default Signup;