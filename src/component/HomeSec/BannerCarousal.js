import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import buyerImg from "../../assest/Buyer.png"
import bannerTest from "../../assest/bannerTest.jpg"
import sellerImg from "../../assest/Seller.png"
import WritterImg from "../../assest/Writter.png"
import bannerImg from "../../assest/Banner.png"
export default function BannerCarousal() {
    return (
        <Carousel >
            <div>
                <img src={bannerImg}/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={bannerTest} />
                <p className="legend">Legend 2</p>
            </div>
          
        </Carousel>
    )
}
