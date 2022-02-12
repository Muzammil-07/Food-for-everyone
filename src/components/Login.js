import reactDom from "react-dom";
import React from "react";
import firebase from './firebase';
import image from '../images/logo.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";




// import {
//     BrowserRouter ,
//     Switch,
//     Route,
//     Link,
//     Redirect,
//     useHistory
//   } from "react-router-dom";


function Login() {

  const navigate = useNavigate();
  useEffect(() => {
 const user= localStorage.getItem("User");
 if(user=="LogedIn")
 navigate('Home')
   
  },[])
  var provider = new firebase.auth.GoogleAuthProvider();
  // let history = useHistory();

  const [email, setEmail] = React.useState('')
  const [password, setpassword] = React.useState('')
  const eEmail = event => {
    setEmail(event.target.value)

  }
  const epass = event => {
    setpassword(event.target.value)

  }

  const Submit = () => {
   
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        // Logedin

        console.log(res.user.uid)
        alert("LogedIn")
        if (res.user.uid=="b2xtyfXyjHeFg9wpgUd9hh2EtP42"){
          localStorage.setItem('User',"LogedIn")
        // history.push('/Dashboard')
        navigate('Home')

      }
      else{
        alert("You Are Not Admin")
      }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
        // ..
      });


  }
  const gLogin = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // console.log(result.user)
        // console.log(result.user.displayName)
        // console.log(result.user.photoURL)
        // console.log(result.user.uid)

        alert("login")
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error)
        // ...
      });
  }
  return (
    <div className="container-fluid   bg-[url('./images/background.png')]  " style={{ height: "100vh", backgroundSize: 'cover' ,justifyContent: 'center', alignItems: "center" }}>
      <div className="container h-4/6  bg-slate-400 mt-20 bg-opacity-30  border-b border-gray-200" style={{ width: 300, justifyContent: 'center', alignItems: "center" }}>
        <div className="row">
          <div className="col">
            <img src={image} style={{ height: 200, marginLeft:40,alignSelf:"center"}} />
          </div>
        </div>
        <div className="row mt-0 ">
          <div className="col">
            <label htmlFor="inputEmail4" className="form-label" >Email</label>
            <input type="email" className="form-control" id="inputEmail4" onChange={eEmail} style={{width:275,alignSelf:'center'}}/>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" onChange={epass} style={{width:275,alignSelf:'center'}}/>
            </div>

          </div>


          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-primary mt-4 ml-5" onClick={Submit} >Sign in</button>
            </div>
          </div>
        </div>
        {/* <button onClick={gLogin}> Login With Google</button> */}
      </div>
    </div>
  )
}
export default Login;