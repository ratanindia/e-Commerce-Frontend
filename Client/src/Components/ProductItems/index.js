
import { Button, Rating } from "@mui/material";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { myContext } from '../../App';
import { useContext } from "react";





const ProductItems = (props) => {


    const context = useContext(myContext);

    const viewProductDetails = (id) => {
        context.setisOpenProductModel(true)
    }


    return (
        <>
            <div className={`productItem ${props.itemView}`}>
                <div className="img_rapper ">
                    <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" className="w-100" />
                    <span className="bagde bagde-primary">30%</span>
                    <div className="actions">
                        <Button onClick={() => viewProductDetails(1)}><SlSizeFullscreen /></Button>
                        <Button><IoIosHeartEmpty style={{ fontSize: '20px' }} /></Button>
                    </div>
                </div>

                <div className="info">
                    <h4>Weather's Original Caremol better bickit</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                    <div className="d-flex">
                        <span className="oldPrice">$20.00</span>
                        <span className="netPrice text-danger ml-3">$15.00</span>
                    </div>
                </div>
            </div>


            {/* <ProductModel/> */}
        </>
    )
}

export default ProductItems;