import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div id='head'>
            <Link to='' className='home'>Home</Link>
            <Link to='/Student' className='student'>Students</Link>
            <Link to='/Contact' className='contact'>Contact us</Link>
        </div>
    )
}
export default Header;