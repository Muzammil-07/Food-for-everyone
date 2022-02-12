import im1 from '../images/1.png'
import Header from './Header';
const Crousal =()=>{
    return(
      <div style={{position:'absolute'}}>   
      <Header/>
      <div id="carouselExampleSlidesOnly" className="carousel slide place-content-start" data-bs-ride="carousel">
    
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" className="d-block w-100 " style={{height:'auto'}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

</div>

    )
}
export default Crousal;