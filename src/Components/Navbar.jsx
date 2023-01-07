import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div div className='nav-holders' >
            <Link to='/home' className='home'>
                <div>Home</div>
            </Link>
            <Link className='bookmark' to='/bookmarks'>
                <div >Bookmarks</div>
            </Link>
        </div >
    )
}

export default Navbar


