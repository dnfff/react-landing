import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div>
        <div className='header'>
        <div className='menuheader'>Basket</div>
            <div className='header__center'>
                <div className='menuheader'>Search</div>
                <div className='header__centerBlock'>Logo</div>
                <div className='menuheader'>User</div>
            </div>
            <div className='menuheader'>Menu</div>
        </div>
    </div>
  )
}

export default Header;