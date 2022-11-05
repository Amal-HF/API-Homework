import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
        <Link to={"/Read"}>View Images</Link>
        <Link to={"/ReadDB"}>Database </Link>
        <Link to={"/"}>Sign in</Link>
    </div>
  )
}

export default Nav