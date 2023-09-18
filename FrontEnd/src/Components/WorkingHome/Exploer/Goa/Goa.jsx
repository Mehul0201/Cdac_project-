import React from 'react';
import '../Goa/Goa.css';
const Goa =() =>
{
    return(
        <div className="container-fluid">
           <div className="row p-5 border border-5px" id='divback'>
                <div className="col-5  p-3 " >
                    <img src="https://lp-cms-production.imgix.net/2021-11/GettyRF_157579910.jpg" class="img-fluid" alt="..."></img>
                </div>
                <div className="col-5 p-5">
                    <h1>Goa</h1>
                    <p>
                    Goa, popularly known as 'the pearl of the east', is famous for its churches, age-old ruins, palm-fringed beaches, coconut groves, ferry rides, and bubbly folk music. With its 131-km-long coastline, Goa is an important destination in every tourist's 
                    </p>
                </div>
            </div>
                <div className="row p-5">
                    <div className="col space ">
                            <div className="card" >
                                <div className="card-body">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Fort_aguada.jpg/800px-Fort_aguada.jpg" className="card-img-top" alt=""/>
                                </div>
                                <div>
                                    <h2 className="text-center" > Aguada Fort </h2>
                                    <div className='text-center p-2'>
                                        <p>
                                            Fort Aguada is a well-preserved seventeenth-century Portuguese fort, along with a lighthouse, standing in Goa, India, on Sinquerim Beach, overlooking the Arabian Sea. It is an ASI protected Monument of National Importance in Goa.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className="card" style={{height:"29rem"}}>
                            <div className="card-body" style={{height:""}}>
                                <img src="https://gumlet.assettype.com/bloombergquint/2023-07/608e89f0-ed0d-4734-b46e-c975fd44cf4d/F1Ir7AbagAEVp0i.jpg?rect=0%2C0%2C3500%2C1969&auto=format%2Ccompress&format=webp&w=1200" className="card-img-top" alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Dudhsagar Falls</h2>
                                <div className='text-center p-2'>
                                        <p>Dudhsagar Falls ( lit. 'Sea of Milk') is a four-tiered waterfall located on the Mandovi River in the Indian state of Goa. It is 60 km from Panaji by road .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col space " >
                        <div className="card" >
                            <div className="card-body">
                                <img src="https://images.pexels.com/photos/88212/pexels-photo-88212.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Beaches</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    There are four types of beaches: sandy, rocky, frozen, and tropical. Beaches are formed as a result of the weathering and coastal erosion of nearby rock cliffs. The sediment from these rock cliffs is carried by wind or water and deposited along a shoreline to create a beach
                                    </p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <div className="col space ">
                        <div className="card" >
                            <div className="card-body">
                                <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1073481062_20190822145857.jpg" className="card-img-top" alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Basilica of Bom Jesus</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    The Basilica of Bom Jesus is a Catholic basilica located in Goa, in the Konkan region of India. The iconic church is a pilgrimage centre and recognised by UNESCO as a World Heritage Site. The basilica is located in Old Goa, the former capital of Portuguese India, and holds the mortal remains of St Francis Xavier.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
       
    );
}

export default Goa;