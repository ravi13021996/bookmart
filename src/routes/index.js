import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainCompo from '../component/common/MainCompo'
import Section1 from "../component/HomeSec/index"
import SignUpPage from "../component/Signup"
import SignInPage from "../component/SignIn"
import {useSelector,useDispatch} from "react-redux"
import GenrePage from "../component/genreDetail"
import ContactUs from "../component/ContactUs/index"
export default function Index() {
    const store = useSelector(state=>state)

    console.log(store,"store")
    return (        
            <Routes>
                <Route  path='/home' element={<MainCompo><Section1/></MainCompo>}> </Route>
                <Route path='/signUp' element={<SignUpPage/>}> </Route>
                <Route path='/signIn' element={<SignInPage/>}> </Route>
                <Route path='/contactUs' element={<MainCompo><ContactUs/></MainCompo>}> </Route>
                <Route path={`/${window.location.pathname}`} element={<MainCompo><GenrePage/></MainCompo>}> </Route>
               
                
            </Routes>
       
    )
}
