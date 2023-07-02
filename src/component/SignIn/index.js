import React from 'react'
import BgPaper from "../../assest/GirlReadingBookSpects.png"
import "./style.css"
import googleLogo from "../../assest/googleSIgnIn.png"
export default function index() {
    return (
        <div className='signUpMain'>
            <div className='container  text-white' >
                <div>
                    <img src={BgPaper} className='imgSty' ></img>
                </div>

                <div className='p-4 '>
                  <img src={googleLogo}></img>
                    <div className='signUp' >
                        Sign In
                    </div>
                    <div className='signUpdes'>
                        With your Google Account
                    </div>


                    <div className='mt-4'>
                        <label className='d-flex'>Email Or Phone</label>
                        <div className='d-flex mt-1'>
                            <input type='password' placeholder='*******' className='inputCss' />
                        </div>
                    </div>

                    <div>
                        <label className='d-flex mt-3'>Forgot Email?</label>
                       
                    </div>

                    <div className='instruction'>
                    Not your computer? Use  Guest  mode to sign in privately.<span className='createAc'>Learn more</span> 
                    </div>
                  

                    <div className='my-2 d-flex justify-content-between mt-5' >
                        <div className='d-flex align-items-end createAc'>Create account</div>
                         <button className='nextBtn me-4'> Next</button> 
                    </div>
                </div>
            </div>

        </div>
    )
}
