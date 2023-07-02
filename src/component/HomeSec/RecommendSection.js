import React from 'react'
import rec1 from "../../assest/homePage/rec1.png"
import rec2 from "../../assest/homePage/rec2.png"
import rec3 from "../../assest/homePage/rec3.png"
import rec4 from "../../assest/homePage/rec4.png"
import rec5 from "../../assest/homePage/rec5.png"
import rec6 from "../../assest/homePage/rec6.png"
import rec7 from "../../assest/homePage/rec7.png"
import rec8 from "../../assest/homePage/rec8.png"
import rec9 from "../../assest/homePage/rec9.png"
import rec10 from "../../assest/homePage/rec10.png"
import { Grid } from '@mui/material'

export default function RecommendSection() {
    return (
        <div>
            
            {
                [rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8, rec9, rec10].map((resItem) => {
                    return <img className='m-3' src={resItem}></img>
                })
            }


        </div>
    )
}
