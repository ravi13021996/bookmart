import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import "./style.css"
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import logo from "../../assest/Logo.png"
import CircleImg from "../../assest/Ellipse169.png"
import { Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import commonCode from "../../config/constant"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchBarWIthSelector from './widgets/SearchBarWIthSelector';
import { useNavigate } from 'react-router-dom';



export default function MainCompo(props) {
    const navigate = useNavigate()
    const theme = createTheme({
        palette: {
            primary: green,
        },
    });

    let bgPrimary = commonCode.bgPrimary
    let bgSecondry = commonCode.bgSecondry
    const AppbarComp = () => <div className='row border-bottom' style={{ border: "" }}>
        <div className='col-md-2 text-primary '>
            <img style={{ width: "150px" }} src={logo}></img>
        </div>

        <div className='col-md-5 text-primary d-flex align-items-center'>
            <ul className='d-flex  manulisting '>
                <li onClick={()=>navigate("/home")}>Home</li>
                <li>Shop</li>
                <li>About Us</li>
                <li onClick={()=>navigate("/contactUs")}>Contact Us</li>
            </ul>
        </div>

        <div className='col-md-5 text-primary d-flex justify-content-center align-items-center' >
            <ul className='manulisting d-flex thirdCol'>
                <li><AddShoppingCartIcon /></li>
                <li><FavoriteIcon /></li>
                <li>
                    <div style={{ backgroundColor: bgSecondry, width: "fit-content" }}>
                        Get In Touch
                    </div>
                </li>
            </ul>
        </div>
    </div>
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: bgPrimary, paddingLeft: "5%", paddingRight: "5%" }}>
            <AppbarComp />
            <div style={{}}>
                <hr></hr>
            </div>
            {/* <div className='text-danger  fs-2'> testint t t</div> */}

            <div className=''>
                <div className='d-flex mt-2  justify-content-between'>
                    <div className='d-flex'>
                        <div>
                            <img style={{}} src={CircleImg}></img>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div style={{ color: "white" }}>
                                <p className=' m-auto'>Hi Lira <br />Example@gamil.com</p>
                            </div>
                        </div>
                    </div>

                    <div >
                        <SearchBarWIthSelector />
                    </div>
                </div>
            </div>
            <div className='h-100 w-100'>
                {props.children}
            </div>

        </Box>
    );
}