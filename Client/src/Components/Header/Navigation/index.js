import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";






const Navigation = () =>{

  const [isOpenSidebarValue, setisOpenSidebarValue] = useState(false)



    return(
        <nav>
        <div className='container'>
          <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
            <Button className='allCatTab align-items-center' onClick={()=>setisOpenSidebarValue(!isOpenSidebarValue)}>
                <span className='icons1 mr-2'><IoIosMenu /></span>
                <span className='text'>ALL CATEGORIES</span>
                <span className='icons2 ml-2'><FaAngleDown/></span>
            </Button>

            <div className={`sidebarNav ${isOpenSidebarValue===true? 'open' : ''}`}>
            <ul>
              <li><Link to='/'><Button>men <FaAngleRight className='ml-auto'/></Button></Link>
              <div className="submenu">
                <Link to='/'><Button>Clothing</Button></Link>
                <Link to='/'><Button>footwear</Button></Link>
                <Link to='/'><Button>watches</Button></Link>
                <Link to='/'><Button>fragrances</Button></Link>
              </div>
              </li>
              <li><Link to='/'><Button>women <FaAngleRight className='ml-auto'/></Button></Link>
              <div className="submenu">
                <Link to='/'><Button>Clothing</Button></Link>
                <Link to='/'><Button>footwear</Button></Link>
                <Link to='/'><Button>watches</Button></Link>
                <Link to='/'><Button>fragrances</Button></Link>
              </div>
              </li>
              <li><Link to='/'><Button>beauty</Button></Link></li>
              <li><Link to='/'><Button>watches</Button></Link></li>
              <li><Link to='/'><Button>kids</Button></Link></li>
              <li><Link to='/'><Button>gift</Button></Link></li>
            </ul>
            </div>
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
             <ul className='list list-inline ml-auto'>

                <li className="list-inline-item"> <Link to='/'><Button>Home</Button></Link></li>
                <li className="list-inline-item"> <Link to='/'>
                <Button>men</Button></Link>
                <div className='submenu shadow'>
                <Link to='/'><Button>Clothing</Button></Link>
                <Link to='/'><Button>footwear</Button></Link>
                <Link to='/'><Button>watches</Button></Link>
                <Link to='/'><Button>fragrances</Button></Link>
                </div>
                </li>
                <li className="list-inline-item"> <Link to='/'><Button>women</Button></Link>
                <div className='submenu shadow'>
                <Link to='/'><Button>Clothing</Button></Link>
                <Link to='/'><Button>footwear</Button></Link>
                <Link to='/'><Button>watches</Button></Link>
                <Link to='/'><Button>fragrances</Button></Link>
                </div>
                </li>
                <li className="list-inline-item"> <Link to='/'><Button>beauty</Button></Link>
                <div className='submenu shadow'>
                <Link to='/'><Button>Clothing</Button></Link>
                <Link to='/'><Button>footwear</Button></Link>
                <Link to='/'><Button>watches</Button></Link>
                <Link to='/'><Button>fragrances</Button></Link>
                </div>
                </li>
                <li className="list-inline-item"> <Link to='/'><Button>watches</Button></Link>
                <div className='submenu shadow'>
                <Link to='/'><Button>Clothing</Button></Link>
                <Link to='/'><Button>footwear</Button></Link>
                <Link to='/'><Button>watches</Button></Link>
                <Link to='/'><Button>fragrances</Button></Link>
                </div>
                </li>
                <li className="list-inline-item"> <Link to='/'><Button>kids</Button></Link>
                <div className='submenu shadow'>
                <Link to='/'><Button>Clothing</Button></Link>
                <Link to='/'><Button>footwear</Button></Link>
                <Link to='/'><Button>watches</Button></Link>
                <Link to='/'><Button>fragrances</Button></Link>
                </div>
                </li>
                <li className="list-inline-item"> <Link to='/'><Button>gift</Button></Link>
                <div className='submenu shadow'>
                <Link to='/'><Button>Clothing</Button></Link>
                <Link to='/'><Button>footwear</Button></Link>
                <Link to='/'><Button>watches</Button></Link>
                <Link to='/'><Button>fragrances</Button></Link>
                </div>
                </li>
                <li className="list-inline-item"> <Link to='/'><Button>Blog</Button></Link></li>
                <li className="list-inline-item"> <Link to='/'><Button>Contact</Button></Link></li>
                
            </ul> 
          </div>
          </div>
        </div>
      </nav>
    )
}

export default Navigation;