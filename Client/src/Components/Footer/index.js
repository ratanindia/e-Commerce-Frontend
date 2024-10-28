import { Link } from "react-router-dom";
import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";




const Footer = ()=>{

return(
    <footer>
        <div className="container">
        <div className="topInfo row">
            <div className="col d-flex align-items-center">
                <span><LuShirt/></span>
                <span className="ml-2">Everyday fresh products</span>
            </div>
            <div className="col d-flex align-items-center">
                <span><TbTruckDelivery/></span>
                <span className="ml-2">Free delivery for over $70</span>
            </div>
            <div className="col d-flex align-items-center">
                <span><TbRosetteDiscount/></span>
                <span className="ml-2">Daily Mega Discounts</span>
            </div>
            <div className="col d-flex align-items-center">
                <span><CiBadgeDollar/></span>
                <span className="ml-2">Best price on the market</span>
            </div>
        </div>


          <div className="row mt-5 linkWraps">
            

            <div className="col">

                <h5>FRUIT & VEGETABLES</h5>
                <ul>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                </ul>
            </div>
            <div className="col">

                <h5>BREAKFAST & DAIRY</h5>
                <ul>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                </ul>
            </div>

            <div className="col">

                <h5>MEAT & SEAFOOD</h5>
                <ul>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                </ul>
            </div>
            <div className="col">

                <h5>BEVREGES </h5>
                <ul>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                </ul>
            </div>
            <div className="col">

                <h5>BREADS & BEKERY</h5>
                <ul>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                    <li><Link to='#'/>Fresh Vegetables</li>
                </ul>
            </div>
          </div>
       <div className="copyright mt-3 pt-3 pb-3 d-flex">

        <p className="mb-0">Copyright 2024 All right are reseved. </p>
        <ul className="list list-inline ml-auto mb-0 socials">
            <li className="list-inline-item">
                <Link to='#'><MdFacebook/></Link>
            </li>
            <li className="list-inline-item">
                <Link to='#'><AiOutlineInstagram/></Link>
            </li>
            <li className="list-inline-item">
                <Link to='#'><RiTwitterXFill/></Link>
            </li>
        </ul>
       </div>
       
        </div>
    </footer>
)
}

export {Footer}