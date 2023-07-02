import React from 'react'
import Banner from "../../assest/GirlReadingBook.png"
import "./style.css"
import { Button } from '@mui/material'
import commonCode from "../../config/constant"
import buyerImg from "../../assest/Buyer.png"
import sellerImg from "../../assest/Seller.png"
import WritterImg from "../../assest/Writter.png"
import bannerImg from "../../assest/Banner.png"
import BannerCarousal from './BannerCarousal'
import RecommendSection from './RecommendSection'
import { useNavigate,  } from 'react-router-dom'
import { decremented, incremented, routeMutate } from '../../redux/Index'

import { useDispatch } from "react-redux"

export default function Index() {
    let navigate = useNavigate()
    let dispatch = useDispatch()


    return (
        <div>
            <div className='section1 pt-4 ps-4'>
                <div className=''>

                    <div className='text-white text-start bestSeller'>
                        BEST SELLER
                    </div>
                    <div className='text-white text-start unleash' >
                        Unleash Your <br />
                        Imagination
                    </div>

                    <div className='text-white text-start w-25 unlockmagic'>
                        Unlock the magic of books.Explore, shape, and Immerse Yourself in the Stories
                    </div>

                    <div className=' buttonSec'>
                        <button className='btnCls'>By Now</button>
                        <button className='btnCls ms-3'>Read Free</button>
                    </div>
                </div>
            </div>
            <div className='py-3 '>
                <hr style={{ borderBottom: "1px solid white" }} />

                <span className='GenereSelectionTxt ' style={{ marginTop: "100px" }}> Select your Genre</span>
                <div className='generSubHeading'>
                    "Dive into the Ultimate Genre Experience: Unleash Your Passion and Explore the Finest Selection of [Genre] Books on Our Web Application."
                </div>

                <div className='d-flex text-white justify-content-between mt-4'>
                    {commonCode.genre.map((items) => {
                        return <div className='generDivIndi' onClick={() => {
                            dispatch(routeMutate(items.routeValue))
                            dispatch(decremented()) 
                            
                            navigate(`/${items.routeValue}`)
                            // window.location(`${items.routeValue}`)
                            // window.location.href=`${items.routeValue}`
                        }}>
                            <img className='genreImgcss' src={items.url}></img>
                            <div className='nameDescBox'>
                                <div className='nameGenre'>{items.name}</div>
                                <div className='descGenre'>{items.description}</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className='perfectPlaceCec'>
                <div className='heading'>~A perfect place for everyone~</div>
                <div className='content '>
                    <div>
                        <img src={buyerImg}></img>
                        <div className='bText'>Buyer</div>
                    </div>
                    <div>
                        <img src={sellerImg}></img>
                        <div className='sText'>Seller</div>
                    </div>
                    <div>
                        <img src={WritterImg}></img>
                        <div className='wText'>Writer</div>
                    </div>
                </div>

            </div>

            <hr className=' border border-white' style={{ margin: "100px 0" }}></hr>

            <div className='section3'>
                <div className='w-75 m-auto ' >
                    <BannerCarousal />
                </div>
            </div>

            <hr className=' border border-white' style={{ margin: "100px 0" }}></hr>
            <div className='section4'>
                <h3 className='text-white'>Recommended For You</h3>
                <div className=' recommendDesc'>"Embark on Literary Adventures: Discover, Purchase,
                    and Immerse Yourself in a Vast
                    Collection of Books, Anytime, Anywhere, with Our
                    Innovative Book Selling and Reading Web Application."
                </div>
                <div className='mt-5'>
                    <RecommendSection />
                </div>
                <hr className='swipeMOre m-auto'></hr>
                <span className='swipeText'> Swipe for more</span>
            </div>
            <hr className='text-white my-5'></hr>
            <div className='section4 '>
                <button className='aboutusBtn'>About us</button>
            </div>

        </div>
    )
}
