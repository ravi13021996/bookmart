import React from 'react'
import searchIcon from "../../../assest/Subtract.png"
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBarWIthSelector() {

    let categories = [
        { label: "Scify", value: "Scify" },
        { label: "Economy", value: "economy" },
        { label: "Romantic", value: "Romantic" },
        { label: "Thrill", value: "Thrill" },
        { label: "Biography", value: "Biography" }
    ]
    return (
        <div className=''>

            <div className='d-flex searchBarSelect'>
                <select>
                    {categories.map((items) => {
                        return <option value={items.value}> {items.label}</option>
                    })}

                </select>
                <div>
                    <input placeholder='Search Book here' />
                </div>
                <div className='searchIcon'>
                    {/* <img src={searchIcon}></img> */}
                    <SearchIcon/>
                </div>

            </div>
        </div>
    )
}
