import react, { useState, useEffect } from "react";
import imagees from './header.png'
import Crousal from "./Crousal";
import HeadDetail from "./HeadDetail";
import { useNavigate } from 'react-router-dom'
import firebase from "./firebase";
const Header = () => {
  const [bname, setbname] = useState(<p> bname</p>);
  const navigate =useNavigate();
  console.log(bname)
  const branch = [
    {
      "branch_name": "Aliabad",
      "latitude": 24.9200172,
      "longitude": 67.0612345
    },
    {
      "branch_name": "Numaish chowrangi",
      "latitude": 24.8732834,
      "longitude": 67.0337457
    },
    {
      "branch_name": "Saylani house phase 2",
      "latitude": 24.8278999,
      "longitude": 67.0688257
    },
    {
      "branch_name": "Touheed commercial",
      "latitude": 24.8073692,
      "longitude": 67.0357446
    },
    {
      "branch_name": "Sehar Commercial",
      "latitude": 24.8138924,
      "longitude": 67.0677652
    },
    {
      "branch_name": "Jinnah avenue",
      "latitude": 24.8949528,
      "longitude": 67.1767206
    },
    {
      "branch_name": "Johar chowrangi",
      "latitude": 24.9132328,
      "longitude": 67.1246195
    },
    {
      "branch_name": "Johar chowrangi 2",
      "latitude": 24.9100704,
      "longitude": 67.1208811
    },
    {
      "branch_name": "Hill park",
      "latitude": 24.8673515,
      "longitude": 67.0724497
    }
  ]


  const modal = () => {

    setbname(<ol>{
      branch.map((res, index) => {
        <li key={index}>{res.branch_name} </li>



      })}</ol>)
  }

  return (
    <div className=" bg-[url('./images/header1.png')]" style={{ width: '100%', height: '60vh', backgroundSize: 'cover' }}>
      <div style={{}} >
        {/* <img src={imagees} alt="..." /> */}


        <nav className="navbar navbar-expand-lg navbar-light mt-2 ">
          <div className="container-fluid" >
            <a className="navbar-brand " href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button className="text-gray-50 btn outline h-8 mr-3">Home</button>
                </li>
                <li className="nav-item">
                  <button className="text-gray-50 btn outline h-8 mr-3">Courses</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="text-gray-50 btn outline h-8 mr-3  " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={modal}>Branches</button>
                </li>
              </ul>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: "flex-end" }}>


              <button className="text-gray-50 btn outline h-8 mr-3  " onClick={()=>{
                firebase.auth().signOut().then(() => {
                alert("signout");
                localStorage.clear()
                navigate('/',{ replace: true });
           
                }).catch((error) => {
              alert(error)
                });
              }}>LogOut</button>
              <button className="text-gray-50 btn outline h-8 mr-3 " >SignUp</button>

            </div>

          </div>
        </nav>

      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }} className="ml-3 mt-4 ">
        <HeadDetail />

      </div>



      <div className="modal bg " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">


            </div>
            <div className="modal-footer">
              <button className="text-gray-50 btn outline h-8 bg-slate-500 " data-bs-dismiss="modal">Close</button>
              <button className="text-gray-50 btn outline h-8  bg-slate-500">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {bname}
    </div>

  )
}
export default Header