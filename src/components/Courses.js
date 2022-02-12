import { useEffect, useState } from 'react';
import firebase from './firebase';
import 'firebase/firestore'

const Courses = () => {
    var arr = [];
    var brr = [];
    const [comp, setcomp] = useState(<div> Waiting</div>)
    useEffect(() => {


        firebase.firestore().collection('users').doc('uids')
            .collection('Menue')
            .get().then(res => {
                res.docs.forEach(doc => {
                    arr.push(doc.data().uids);
                    //   console.log(arr);
                })
            }
            ).then(() => {

            })

    }, [])
    setTimeout(() => {

        arr.forEach((res) => {
            console.log(res)
            firebase.firestore().collection('Request').doc(res)

                .get().then((rep) => {
                    // console.log(rep.data());
                    brr.push(rep.data())
                    console.log(brr)


                })
                .then(() => {
                    setcomp(<div style={{ width: "90%", alignSelf: 'center' }}>
                        {brr.map((bio, index) => (
                                    
                            <div className="card" style={{ width: "18rem" }} key={index}>
                                <img src={bio.imgsrc} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Name:{bio.Name}</h5>
                                    <h5 className="card-title">CNIC:{bio.CNIC}</h5>
                                    <h5 className="card-title">Phone:{bio.Phone}</h5>
                                    <h5 className="card-title">Monthly Income:{bio.Income}</h5>
                                    <h5 className="card-title">Branch:{bio.NearestBranch}</h5>

                                   
                                    <button className="text-orange-300 btn outline h-8  mt-2 mr-5 " onClick={()=>{
                                        firebase.firestore().collection('Request').doc(bio.uid).update({
                                            Request:'Accepted'
                                        }).then(()=>{
                                            alert("Accepted")
                                        })
                                    }}>Accept </button>
                                    <button className="text-orange-300 btn outline h-8  mt-2 " onClick={()=>{
                                        firebase.firestore().collection('Request').doc(bio.uid).delete().then(()=>{
                                            alert('Request Rejected')
                                        })
                                    }}>Reject </button>
                                </div>
                                </div>
       ))}</div>)
            }).catch((err)=>{
                            console.log(err)
                        })
    })

},5000)


                        return (
                        <div style={{ marginTop: '20%' }} >
                            <h1 className="text-3xl object-right mb-8"> Requests</h1>
                            <div style={{ display: 'flex', flexDirection: 'row', overflow: 'scroll', justifyContent: 'space-evenly' }}>

                               
                                {comp}
                            </div>

                        </div>

                        )
}
                        export default Courses;