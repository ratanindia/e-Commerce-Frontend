import { Sidebar } from "../../Components/Sidebar"
import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import {ProductItem} from "../../Components/ProductItem"
import Pagination from '@mui/material/Pagination';




const Listing = ()=>{

    
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setproductView] = useState('four');
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




    return(
        <>
        <section className="product_Listing_Page">
            <div className="container">
            <div className="productListing d-flex">
            <Sidebar/>
            <div className="content_right">
                <img 
                src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" 
                className="w-100" style={{borderRadius: "8px"}}/>


                <div className="showBy mt-3 mb-3 d-flex align-items-center">
                       <div className="d-flex align-items-center btnWrapper">

                        <Button className={productView === `one` && `act`} onClick={()=>setproductView('one')}><IoIosMenu/></Button>
                        <Button className={productView === `two` && `act`} onClick={()=>setproductView('two')}><HiViewGrid/></Button>
                        <Button className={productView === `three` && `act`} onClick={()=>setproductView('three')}><CgMenuGridR/></Button>
                        <Button className={productView === `four` && `act`} onClick={()=>setproductView('four')}><TfiLayoutGrid4Alt/></Button>
                       </div>

                       <div className="mt-auto showByFilter">
                        <Button onClick={handleClick} className="">Show 9 <FaAngleDown/> </Button>
                        <Menu
        className="w-100 showPerPageDropdown"               
        id="basic-menu"
        anchorEl={anchorEl}
        open={openDropDown}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>10</MenuItem>
        <MenuItem onClick={handleClose}>20</MenuItem>
        <MenuItem onClick={handleClose}>30</MenuItem>
        <MenuItem onClick={handleClose}>40</MenuItem>
        <MenuItem onClick={handleClose}>50</MenuItem>
      </Menu>
                       </div>
                </div>


                    <div className="productListing">
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                        <ProductItem itemView={productView}/>
                    </div>

                    <div className="d-flex align-items-center justify-content-center mt-5">
                    <Pagination count={10} color="primary" size="large" />
                    </div>


            </div>
            </div>
            </div>
        </section>
        </>
    )
}


export {Listing}