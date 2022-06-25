import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='navborder'>
        <div className='navbar'>
            <div className='titel'>MakeUser.com</div>
            <Link to="/" className="home">Home</Link>
            <Link to="/MakeUser" className="makeUser">Make user</Link>
        </div>
    </div>
  )
}
