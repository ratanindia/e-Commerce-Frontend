import { useContext, useEffect } from "react"
import { myContext } from "../../App"
import logo from "../../images/logo.png";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";



const SignIn = () => {


    const context = useContext(myContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false)

    }, [])

    return (
        <>
            <section className="section signInPage">
                <div className="shape-bottom">
                    <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8"
                        style={{ enableBackground: 'new 0 0 1921 819.8' }}
                    ><path className="st0" d="M1921,413.1v406.7H0V0.5h0.41228.1, 598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1
                40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path> </svg>
                </div>



                <div className="contanier">
                    <div className="box card p-3 shadow border-0">
                        <div className="text-center">
                            <img src={logo} />
                        </div>

                        <form className="mt-3">
                            <h2>Sign In</h2>

                            <div className="form-group">
                                <TextField id="standard-basic" type="email" label="Email"
                                    required variant="standard" className="w-100" />
                            </div>
                            <div className="form-group">
                                <TextField id="standard-basic" type="password" label="Password"
                                    required variant="standard" className="w-100" />
                            </div>


                            <a className="border-effect cursor">Forget Password?</a>


                            <Button className="btn-blue btn-lg btn-big w-100 mt-3 mb-3">Sign In</Button>

                            <p>Not Registered? <Link to='/signUp' className="border-effect">Sign Up</Link></p>


                            <h6 className="text-center mt-3 font-weight-bold">Or continue with social account  </h6>

                            <ul className="list list-inline mt-3 mb-1 socials text-center">
                                <li className="list-inline-item">
                                    <Link to='#'><MdFacebook /></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to='#'><AiOutlineInstagram /></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to='#'><RiTwitterXFill /></Link>
                                </li>
                            </ul>

                        </form>
                    </div>

                </div>
            </section>
        </>
    )

}


export { SignIn }