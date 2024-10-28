import { Button, Link } from '@mui/material';
import Rating from '@mui/material/Rating';
import { QuantityBox } from '../../Components/QuantityBox';
import { IoIosClose } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";



const Cart = () => {

    return (
        <>
            <section className='section'>
                <div className='container'>
                    <h2 className='hd mb-1'>Your Cart</h2>
                    <p>There are <b className='text-red'>3</b> products in your cart</p>
                    <div className='row'>
                        <div className='col-md-9 pr-5'>


                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th width="35%">Products</th>
                                            <th width="15%">Unit Price</th>
                                            <th width="15%">Quantity</th>
                                            <th width="15%">Subtotal</th>
                                            <th width="10%">Remove</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr>
                                            <td width="35%">
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img className="w-100"
                                                                src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                            <Rating name="read-only" size='small' value={4.5} precision={0.5} readOnly />

                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="25%">
                                                <QuantityBox />
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="10%">
                                                <span className='remove'><IoIosClose /></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img className="w-100"
                                                                src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                            <Rating name="read-only" size='small' value={4.5} precision={0.5} readOnly />

                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="25%">
                                                <QuantityBox />
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="10%">
                                                <span className='remove'><IoIosClose /></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img className="w-100"
                                                                src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                            <Rating name="read-only" size='small' value={4.5} precision={0.5} readOnly />

                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="25%">
                                                <QuantityBox />
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="10%">
                                                <span className='remove'><IoIosClose /></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img className="w-100"
                                                                src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                            <Rating name="read-only" size='small' value={4.5} precision={0.5} readOnly />

                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="25%">
                                                <QuantityBox />
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="10%">
                                                <span className='remove'><IoIosClose /></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to='/product/1'>
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img className="w-100"
                                                                src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                                                            <Rating name="read-only" size='small' value={4.5} precision={0.5} readOnly />

                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="25%">
                                                <QuantityBox />
                                            </td>
                                            <td width="15%">$7.25</td>
                                            <td width="10%">
                                                <span className='remove'><IoIosClose /></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>


                        <div className='col-md-3'>

                            <div className='card p-3 cartDetails'>
                                <h4>CART TOTALS</h4>
                                    <div className='d-flex align-items-center mr-3'>
                                        <span>Subtotal</span>
                                        <span className='ml-auto text-red'>$7.25</span>
                                    </div>
                                    <div className='d-flex align-items-center mr-3'>
                                        <span>Shipping</span>
                                        <span className='ml-auto text-red'><b>Free</b></span>
                                    </div>
                                    <div className='d-flex align-items-center mr-3'>
                                        <span>Estimate for</span>
                                        <span className='ml-auto '><b>United Kingdom</b></span>
                                    </div>
                                    <div className='d-flex align-items-center '>
                                        <span>Total</span>
                                        <span className='ml-auto text-red'>$7.25</span>
                                    </div>


                                                <br/>
                                    <Button className='btn-blue btn-lg btn-big bg-red'><IoCartSharp/>Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export { Cart }