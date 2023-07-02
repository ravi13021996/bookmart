import React from 'react'
import BgPaper from "../../assest/GirlReadingBookSpects.png"
import "./style.css"
import googleImg from "../../assest/googleImg.png"
export default function index() {
    return (
        <div className='signUpMain'>
            <div className='container  text-white' >
                <div>
                    <img src={BgPaper} className='imgSty' ></img>
                </div>

                <div className='p-4 '>
                    <div className='signUp' >
                        Sign Up
                    </div>
                    <div className='signUpdes'>
                        Sign up now and gain access to the exclusive world of content
                    </div>

                    <div className='mt-4'>
                        <label className='d-flex'>Email address</label>
                        <div className='d-flex mt-1'>
                            <input placeholder='name@email.com' className='inputCss' />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <label className='d-flex'>Password</label>
                        <div className='d-flex mt-1'>
                            <input type='password' placeholder='*******' className='inputCss' />
                        </div>
                    </div>

                    <div>
                        <label className='d-flex mt-3'>Forgot password? Reset pasword</label>
                        <div className='d-flex mt-3'>
                            <button className='buttonCss'>Sign Up</button>
                        </div>
                    </div>

                    <div className='instruction'>
                        By clicking on Sign up you agree to our Term of service  and privacy policy
                    </div>
                    <div className='d-flex align-items-center  justify-content-center mt-4'>
                        <div className='w-25 bordor border-top' style={{ height: "25px" }}></div>
                        <div className='d-flex align-items-bottom px-2' style={{ height: "50px" }}>or</div>
                        <div className='w-25 bordor border-top' style={{ height: "25px" }}></div>
                    </div>

                    <div className='my-2'>
                        <button className='googleSignIn '><img src={googleImg} /> Sign with Google</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
