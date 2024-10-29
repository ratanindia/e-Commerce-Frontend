import  Rating  from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { MdClose } from "react-icons/md";
import { useContext } from 'react';
import { QuantityBox } from '../QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { myContext } from '../../App';
import { ProductZoom } from '../ProductZoom';
import { IoCartSharp } from 'react-icons/io5';






const ProductModel = () => {

   
    const context = useContext(myContext);



   


    return (
        <>
            <Dialog open={true} className='productModel' onClose={() => context.setisOpenProductModel(false)}>


                <Button className='close_' onClick={() => context.setisOpenProductModel(false)}><MdClose /></Button>
                <h4 className='mb-1 font-weight-bold'>WONDERLAND Foods Roasted and Salted Jumbo Size Pistachios  (500 g)</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Brands</span>
                        <span className='ml-2'> Welch's</span>
                    </div>

                    <Rating name="read-only" value={5} precision={0.5} size="small" readOnly />
                </div>


                <hr />


                <div className='row mt-2 productDetailsModel'>
                    <div className='col-md-5'>
                        <ProductZoom/>
                    </div>
                    
                    <div className='col-md-7 '>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg mr-2'>$9.35</span>
                            <span className='netPrice text-danger lg'>$7.25</span>
                        </div>
                        <span className='badge bg-success'>IN STOCK</span>
                        <p className='mt-2'>fddvdf j fdjvlvlflvvdl vklvvlvvlvfl/ vejfelfeflvdn/vv fddfefe</p>

                        <div className='d-flex align-items-center'>
                            <QuantityBox />
                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'><IoCartSharp/>Add to Cart</Button>
                        </div>


                        <div className='d-flex align-items-center mt-3 actions'>
                            <Button className='btn-round btn-sml'
                                variant="outlined"><IoIosHeartEmpty /> &nbsp; ADD TO WISHLIST</Button>
                            <Button className='btn-round btn-sml ml-3' variant='outlined'>
                                <MdOutlineCompareArrows /> &nbsp; COMPARE
                            </Button>
                        </div>
                    </div>

                </div>


            </Dialog>
        </>
    )
}

export default  ProductModel ;