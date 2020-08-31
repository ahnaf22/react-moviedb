import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import hulu from '../images/hulu.png';
import './cssfiles/header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-icons">
                <div className="header-icon active">
                    <HomeIcon />
                    <p>home</p>
                </div>

                <div className="header-icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header-icon">
                    <LiveTvOutlinedIcon />
                    <p>tv</p>
                </div>
                <div className="header-icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header-icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header-icon">
                    <PersonOutlineOutlinedIcon />
                    <p>account</p>
                </div>

            </div>
            <img src={hulu} alt="site logo" />

        </div>
    )
}

export default Header
