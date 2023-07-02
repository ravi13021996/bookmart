import React from 'react'
import contactUsBanner from "../../assest/ContactUsBanner.png"
import "./style.css"
export default function Index() {
    return (
        <div>
            <div className='banner'>
                <img className='w-100 my-5 ' src={contactUsBanner}></img>
                <div className='bannerText '>
                    contact us
                </div>
            </div>


        </div>
    )
}
