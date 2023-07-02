import React from 'react'
import "./style.css"
export default function GenreCard(props) {
    console.log(props, "propsprops")
    return (
        <div >
            <div className='cardDivMain'>
                <div className='row'>
                    <div className='col-sm-3 '>
                        <div className='cardImgDiv '>
                            <img className='cardImgStyle' src={props.data.url}></img>                            
                        </div>
                    </div>
                    <div className='col-sm-7  cardDetails'>
                        <h2 className='text-white cardName'>{props.data.name}</h2>
                        <div className='d-flex text-white  justify-content-between py-3'>
                            <div className='cardPrice'> Rs.{props.data.price}</div>
                            <div className='cardStrikeThroughPrice'>Rs. {props.data.strikeThroughPrice}</div>
                        </div>

                        <div className='d-flex text-white justify-content-between'>
                            <button className='cardBtn'>View Details</button>
                            <button className='cardBtn'>Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
