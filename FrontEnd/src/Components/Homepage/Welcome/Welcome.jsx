import Carousel from 'react-bootstrap/Carousel';
import earth from '../Welcome/earth.png'
import '../Welcome/welcome.css';

const Welcome =() =>
{
    return(
        <div>
            <div className=''>
                <div className="row justify-content-center align-items-center" >
                    <div className="col-12">
                        <Carousel fade>
                            <Carousel.Item>
                                <div className='row'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/BeachFun.jpg"  style={{height:'30rem'}}/>
                                </div>
                                <Carousel.Caption>
                                    <h3>Goa</h3>
                                    <p>Explore</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='row'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg" style={{height:'30rem'}}/>
                                </div>
                                <Carousel.Caption>
                                    <h3>Taj Mahal</h3>
                                    <p>Explore</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='row'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/BackBay_skyline.jpg" style={{height:'30rem'}}/>
                                </div>
                                <Carousel.Caption>
                                    <h3>Mumbai</h3>
                                    <p>Explore</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div> 
            </div>
            <div class="main text-center mt-5">
        </div>
        <div class="container d-flex justify-content-center " style={{height:"17rem"}}>
         <div class="row " >
           <div class="col-md-4 border-right">
                <div class="cards">
                <div class="first bg-white p-2 text-center">
                  <div>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d5/77/rambagh-palace-exterior.jpg?w=1200&h=-1&s=1" style={{height:"10rem", width:"15rem"}} />
                  </div>
                  <br/>
                  <div className=''>
                     <a href="#" class="btn btn-primary">Hotels</a>
                  </div>
                </div>
                 </div>
           </div>
        <div class="col-md-4 ">
            <div class="cards">
           <div class=" second bg-white p-2 text-center">
                    <div>
                        <img src="https://askthescientists.com/wp-content/uploads/2022/09/Family-Travel-Tips.jpeg" style={{height:"10rem", width:"15rem"}}/>
                    </div>
                    <br/>
                    <div className=''>
                      <a href="#" class="btn btn-primary">Packages</a>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="col-md-4 ">
            <div class="cards">
            <div class=" third bg-white p-2 text-center">
                    <div>
                      <img src="https://thumbs.dreamstime.com/b/hiker-mountain-looking-forward-travel-photo-man-relaxing-top-cliff-above-river-canyon-hiker-mountain-110450868.jpg" style={{height:"10rem", width:"15rem"}}/>
                    </div>
                    <br/>
                    <div className=''>
                      <a href="Result" class="btn btn-primary text-center">Explorer</a>
                    </div>
                </div>
                </div>
        </div>
     </div>   
    </div>
        <div class="container mt-4 d-flex justify-content-center p-5 ">
         <div class="row g-0">

           <div class="col-md-4 border-right">
                <div class="cards">
                <div class="first bg-white p-4 text-center">
                    <img src="https://img.icons8.com/clouds/100/000000/box.png" />
                    <h5>Trusted </h5>
                <p class="line1">No limitation - Its got everything that you 'll need for your data </p>
                </div>
                 </div>
           </div>
        <div class="col-md-4 border-right">
            <div class="cards">
           <div class=" second bg-white p-4 text-center">
                    <img src="https://img.icons8.com/clouds/100/000000/groups.png"/>

                    <h5>User-friendly</h5>
                    <p class="line2">With this types of interface you can easily book your trip </p>
                </div>
            </div>
        </div>
        <div class="col-md-4">

            <div class="cards">
            <div class=" third bg-white p-4 text-center">
                     <img src="https://img.icons8.com/fluent/100/000000/trophy.png"/>
                    <h5>World Class Support</h5>
                    <p class="line3">We'll help you get started and be there when you have questions</p>
                </div>
                </div>
        </div>
     </div>   
    </div>
        </div>
    );
}

export default Welcome;