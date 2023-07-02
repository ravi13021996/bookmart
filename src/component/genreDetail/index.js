import React, { useEffect, useState } from 'react'
import commonCode from '../../config/constant'
import "./style.css"
import SearchBarWIthSelector from '../common/widgets/SearchBarWIthSelector'
import GenreCard from './GenreCard'
// import  from '../../config/constant'

export default function Index() {
    const [bannerPage, setbannerPage] = useState("")
    const [genreRow, setgenreRow] = useState({})
    // const [] =useState(false)
    useEffect(() => {
        commonCode.genre.map((gItem) => {
            if (gItem.routeValue === window.location.pathname.replace("/", "")) {
                setbannerPage(window.location.pathname.replace("/", ""))
                setgenreRow(gItem)
            }
        })
    }, [])
    console.log(genreRow, "genreRow")
    console.log(window.location.pathname.replace("/", ""), "window.location")
    return (
        <div className='genreContainer'>
            <div className='bannersection'>
                <img className='w-100 m-auto' src={genreRow.banner}></img>
                <text className='bannerText'>{genreRow.routeValue}</text>
            </div>
            <hr></hr>
            <SearchBarWIthSelector />
            <div>
                {
                    commonCode.romance.map((gItem) => {
                        return <div className='my-5'>
                            <GenreCard data={gItem} />
                        </div>
                    })
                }

            </div>
        </div>
    )
}
