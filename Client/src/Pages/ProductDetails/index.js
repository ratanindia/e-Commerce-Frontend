
import { useState } from 'react';
import { Button } from '@mui/material';
import { ProductZoom } from '../../Components/ProductZoom';
import Rating from '@mui/material/Rating';
import { QuantityBox } from '../../Components/QuantityBox';
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { RelatedProducts } from './RelatedProducts';




const ProductDetails = () => {

    const [activeSize, setactiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);


    const isActive = (index) => {
        setactiveSize(index)
    }



    return (
        <>
            <section className="productDetails section">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 pl-5'>
                            <ProductZoom />
                        </div>

                        <div className='col-md-7 pl-5 pr-5'>
                            <h2 className='hd text-capitalize'>PHILIPS S1151/03 Shaver For Men  (Blue)</h2>
                            <ul className='list list-inline d-flex align-items-center'>
                                <li className='list-inline-item'>
                                    <div className='d-flex align-items-center'>
                                        <span className='text-light mr-2'>Brands :</span>
                                        <span className=''>Welch's</span>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <div className='d-flex align-items-center'>
                                        <Rating name="read-only" value={4.5}
                                            precision={0.5} size="small" readOnly />
                                        <span className='text-light cursor ml-2'>1 Review</span>
                                    </div>
                                </li>

                            </ul>


                            <div className='d-flex info mb-3'>
                                <span className='oldPrice '>$9.35</span>
                                <span className='netPrice text-danger ml-2'>$7.25</span>
                            </div>
                            <span className='badge badge-success'>IN STOCK</span>
                            <p className='mt-3'>Gifting your little munchkin a set of baby learning toys
                                can be an ideal gift for little budding scientists, aspiring artists, would-be doctors and more. </p>


                            <div className='productSize d-flex align-items-center'>
                                <span>Size / Weight:</span>
                                <ul className='mb-0 pl-4 list list-inline'>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`}
                                            onClick={() => isActive(0)}>50mg</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`}
                                            onClick={() => isActive(1)}>100mg</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`}
                                            onClick={() => isActive(2)}>150mg</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`}
                                            onClick={() => isActive(3)}>200mg</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 4 ? 'active' : ''}`}
                                            onClick={() => isActive(4)}>500mg</a>
                                    </li>
                                </ul>
                            </div>




                            <div className='d-flex align-items-center mt-3'>
                                <QuantityBox />
                                <Button className='btn-blue btn-lg btn-big btn-round '>
                                    <BsCartFill /> &nbsp; Add to Cart</Button>


                                <Tooltip title="Add to WishList" placement="top-start">


                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-4'>
                                        <FaRegHeart /></Button>
                                </Tooltip>
                                <Tooltip title="Add to Compare" placement="top-start">

                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-2'>
                                        <MdOutlineCompareArrows /></Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>


                    <br />



                    <div className='card mt-5 p-5 detailsPageTabs'>
                        <div className='customTabs'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 0 && 'active'}`}
                                        onClick={() => { setActiveTabs(0) }}>Description</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 1 && 'active'}`}
                                        onClick={() => { setActiveTabs(0) }}>Additional Info</Button>
                                </li>
                                {/* <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 2 && 'active'}`}
                                    onClick={()=> {setActiveTabs(0)}}> Vendor</Button>
                                </li> */}
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 2 && 'active'}`}
                                        onClick={() => { setActiveTabs(0) }}> Reviews (1)</Button>
                                </li>
                            </ul>




                            <br />


                            {
                                activeTabs === 0 && <div className='tabContent'>
                                    <p>To adjust the distance between the tooltip and its anchor, 
                                    you can use the slotProps prop to modify the offset of the popper</p>
                                </div>
                            }
                            {
                                activeTabs === 1 && <div className='tabContent'>
                                    <div className='table-responsive'>
                                        <table className='table table-bordered'>
                                            <tbody>
                                                <tr className='stand-up'>
                                                    <th>stand up</th>
                                                    <td>
                                                        <p>35"L x 37.45"H (front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr className='folded-wo-wheels'>
                                                    <th>Folded (w/o wheels) </th>
                                                    <td>
                                                        <p>32.5"L x 18.5"W x 16.5"H </p>
                                                    </td>
                                                </tr>
                                                <tr className='folded-wo-wheels'>
                                                    <th>Folded (w/o wheels) </th>
                                                    <td>
                                                        <p>32.5"L x 24"W x 18.5"H </p>
                                                    </td>
                                                </tr>
                                                <tr className='door-pass-through'>
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>25</p>
                                                    </td>
                                                </tr>
                                                <tr className='frame'>
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr className='weight-wo-wheels'>
                                                    <th>Weight (w/o wheels) </th>
                                                    <td>
                                                        <p>60 LBS </p>
                                                    </td>
                                                </tr>
                                                <tr className='width'>
                                                    <th>width</th>
                                                    <td>
                                                        <p>24"</p>
                                                    </td>
                                                </tr>
                                                <tr className='handle-height-ground-to-handle'>
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-56"</p>
                                                    </td>
                                                </tr>
                                                <tr className='wheels'>
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>14" air/ wide track slick tread </p>
                                                    </td>
                                                </tr>
                                                <tr className='seat-back-height'>
                                                    <th>Seat back height</th>
                                                    <td>
                                                        <p>24.5"</p>
                                                    </td>
                                                </tr>
                                                <tr className='head-room-inside-canopy'>
                                                    <th>Head room  (inside canopy)</th>
                                                    <td>
                                                        <p>25"</p>
                                                    </td>
                                                </tr>
                                                <tr className='pa-color'>
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Green, Red</p>
                                                    </td>
                                                </tr>
                                                <tr className='pa-size'>
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }


                            
                                
                                <div className='tabContent'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <h3>Customer's Question & Answers</h3>
                                            <br />

                                            <div className='card p-4 reviewsCard
                                                                                flex-row' >
                                                <div className='rounded-circle'>
                                                    <img src='https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=' />
                                                </div>
                                                <span className='text-g d-block 
                                                                                font-weight-bold text-center'>
                                                    Ratan Kumar
                                                </span>
                                            </div>

                                            <div className='info pl-5'>
                                                <div className='d-flex align-items-center
                                                                                    w-100'>
                                                    <h5 className='text-light'>
                                                        02/01/2024</h5>
                                                    <div className='ml-auto'>
                                                                <Rating name="half-rating-read"
                                                                value={4.5} precision={0.5} readOnly size='small' />
                                                    </div>
                                                </div>
                                                <p>To adjust the distance between the tooltip and its anchor, 
                                                you can use the slotProps prop to modify the offset of the popper</p>
                                            </div>
                                        </div>

                                                <br className='res-hide'/>
                                                <br className='res-hide'/>

                                             <form className='reviewForm'>
                                                <h4>Add a review</h4>
                                               
                                                <div className='form-group'>
                                                    <textarea className='form-control' 
                                                    placeholder='Write your review' name='review'></textarea>
                                                </div>

                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <input type='text' name='userName' placeholder='Name' className='form-control'/>
                                                </div>

                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <Rating name='rating' value={4.5} precision={0.5}/>
                                                </div>



                                                <br/>

                                                <div className='form-group'>
                                                    <Button type='submit'  
                                                     className='btn-blue btn-big btn-round btn-lg'>Submit Review</Button>
                                                </div>

                                                    </div>




                                             </form>


                                    </div>
                                            

                                </div>
                    </div>

                    </div>

                    <br/>

                    <RelatedProducts title="RELATED PRODUCTS"/>
                    <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>
                    </div>
            </section>
        </>
    )
}

export { ProductDetails }





