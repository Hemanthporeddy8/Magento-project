import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'> 
    <div className="left">
      <div className="title">
        Shopping App
      </div>
    </div>
    <div className="right">
      <div className="signin">
        Signin/Signup
      </div>
      <div className="cart">Cart</div>
     
    </div>
    <div className="search">
      <input type="text" placeholder='Search...' />
    </div>
    <div className="center">
      <ul>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Beauty</li>
        <li>Electronics</li>
      </ul>
    </div>
    </div>
  )
}

export default Header
