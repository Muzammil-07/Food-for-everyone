

import Header from './Header';
import Crousal from './Crousal';
import Courses from './Courses';
import Footer from './Footer';
import Login from './Login';
import firebase from './firebase';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Home =()=>{
  const navigate = useNavigate();
  useEffect(() => {
  
   
    const user= firebase.auth().currentUser;
    const user1 = localStorage.getItem("User");
   
   
  },[])
return(
    <div className="App">
    {/* <Login/> */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <Header />
          </div>
          <div className='row'>
            <div className='col'>
              <Courses />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </div>
)
} 

export default Home;