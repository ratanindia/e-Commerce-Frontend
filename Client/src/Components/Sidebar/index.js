//import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {

    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);



    return (
        <>
            <div className="sidebar">
                <div className='sticky'>
                <div className="filterBox">
                    <h6>PRODUCT CATEGORIES</h6>
                    <div className='scroll'>
                        <ul>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />

                            </li>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Female" />

                            </li>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />

                            </li>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Fashion" />

                            </li>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Grocery" />

                            </li>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Footwear" />

                            </li>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Cloths" />

                            </li>
                        </ul>
                    </div>
                </div>


                <div className="filterBox">
                    <h6>FILTER BY PRICE</h6>
                    <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />

                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span> Form: <strong className='text-dark'>Rs.{value[0]} </strong> </span>
                        <span className='ml-auto'>Form: <strong className='text-dark'>Rs.{value[1]} </strong></span>
                    </div>
                </div>

                <div className="filterBox">
                    <h6>PRODUCT STATUS</h6>
                    <div className='scroll'>
                        <ul>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="In Stock" />

                            </li>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="On Sale" />

                            </li>


                        </ul>
                    </div>
                </div>

                <div className="filterBox">
                    <h6>PRODUCT BRANDS</h6>
                    <div className='scroll'>
                        <ul>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Oreo" />

                            </li>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Welch's" />

                            </li>
                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />

                            </li>

                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Quaker" />

                            </li>

                            <li>

                                <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />

                            </li>



                        </ul>
                    </div>
                </div>


                <br/>

                <Link to="#">
                <img src='https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp' className='w-100' />
                </Link>

            </div>
            </div>
        </>
    )
}


export { Sidebar }