import thumb from '../images/thumb.png'
import Logo from '../images/logo.png'
const HeadDetail=()=>{
    return(
       <div style={{ display:'flex' ,flexDirection:'row'}}>
        <div className="text-2xl text-orange-300  mt-6 pt-10">
            <div></div>
      <h1 >
     Sylani Khana Sab kilye Service
      </h1>
      <p>  Providing Rashan  <br/>All Over Karachi.</p>
      </div>
     <img src={Logo} className='h-50'/>
     
      </div>
    )
}
export default HeadDetail;