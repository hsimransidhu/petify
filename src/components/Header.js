import React from 'react'
import '../assets/style/index.css'
import Button from './Button';
function Header() {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='head'>
                        <h1><span>Petify</span></h1>
                        <nav>
                            <ul>
                                <li><a href='#'></a>About us</li>
                                <li><a href='#'></a>Contact Us</li>
                                <li><a href='#'></a>Services</li>
                            </ul>
                        </nav>
                        <Button btn={'primary-btn'} content={'Log In'} id={'header-btn'} />
                       
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;