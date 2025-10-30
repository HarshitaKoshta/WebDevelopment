import React from 'react'
import './Bar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {


  return (
    <div id='nav' >
        <Link to={'./'}><button>HOME</button></Link>
        <Link to={'./about'}><button>ABOUT</button></Link>
        <Link to={'./login'}><button>LOGIN</button></Link>
        <Link to={'./signup'}><button>SIGNUP</button></Link>

    </div>
  )
}

export default Navbar