import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import CountryDropDown from "../CountryDropDown";
import SearchBox from "../Header/SearchBox";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { TbShoppingBag } from "react-icons/tb";
import Navigation from "./Navigation";
 import useContext from 'react';
 import {myContext} from "../../App"


const Header = () => {

 const context = useContext(myContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID-19</b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">

                {/* {
                context.countryList.length!==0 && 
                } */}
                <CountryDropDown />
                

                {/* Header Search Box Start Here */}

                <SearchBox/>

                {/* Header Search Box End Here */}

                {/* Header User Login Starting Section Here */}

                <div className="part3 d-flex align-items-center ml-auto">
                 
                  {
                    context.isLogin!== true ? <Link to='/signIn'>
                      <Button className="btn-blue btn-round mr-3">
                    Sign In
                  </Button>
                    </Link> : <Button className="circle mr-3">
                    <FiUser />
                  </Button>
                  }
                  
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.40</span>
                    <div className="position-relative ml-2">
                    <Button className="circle ml-2">
                      <TbShoppingBag />
                    </Button>
                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                    </div>
                  </div>
                </div>

                {/* Header User Login Ending Section Here */}
              </div>
            </div>
          </div>
        </header>

        <Navigation/>
       
      </div>
    </>
  );
};

export default Header;
