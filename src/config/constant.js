import fantasy from "../assest/Fantasy.png"
import horror from "../assest/Paranormal.png"
import Love from "../assest/Love_Romantic.png"
import detective from "../assest/Detective.png"

import jadewar from "../assest/genre/jadeWar.png"
import erthesa from "../assest/genre/erthesa.png"
import lordOfRing from "../assest/genre/lordOfTheRing.png"
import poppyWar from "../assest/genre/poppyWar.png"
import shadeOfMagic from "../assest/genre/shadeOfMagic.png"
import fantasyBanner from "../assest/genre/fantasyBanner.png"
import crimeBanner from "../assest/genre/crimeBanner.png"
import horrorBanner from "../assest/genre/horrorBanner.png"
import romanticBanner from "../assest/genre/romanticBanner.png"


let bgPrimary = "#000000"
let bgSecondry = "#064124"

let genre=[
    {id:"1",name:"Fantasy",banner:fantasyBanner, routeValue:"fantasy", description:"Escape into magical realms awaits.", url:fantasy},
    {id:"2",name:"Horror, Paranormal stuffs",banner:horrorBanner,routeValue:"horror", description:"Chilling nightmares lurking within pages.", url:horror},
    {id:"3",name:"Love,Romantic drama, Relationship-based fiction",banner:romanticBanner,routeValue:"romance", description:"Heart's journey through love's embrace.", url:Love},
    {id:"4",name:"Detective fiction,Crime thriller,Enigma", banner:crimeBanner,routeValue:"crime",description:"Unravel secrets, embrace thrilling enigma.", url:detective},
]

let romance =[
    {id:1,name:"The Green Bone Saga", url:jadewar, price:"200",strikeThroughPrice:"300"},
    {id:2,name:"The Poppy War By R.F Kuang",url:poppyWar, price:"234",strikeThroughPrice:"300"},
    {id:3,name:"Earthsea Cycle by Ursula K. Le Guin",url:erthesa, price:"198",strikeThroughPrice:"300"},
    {id:4,name:"Lord of the Rings ", url:lordOfRing,price:"200",strikeThroughPrice:"300"},
    {id:4,name:"Shades of Magic", url:shadeOfMagic,price:"200",strikeThroughPrice:"300"},
]
const commonCode = {
    bgPrimary,
    bgSecondry,
    genre,
    romance
}
export default commonCode
