import React from 'react'
import Button from './Button';

function Banner() {
    return (
        <section className='herobanner'>
            <p>Your Pet needs Love <br /> Reach At <span className='hero'>Petify</span> </p>
            <div className='btns'>
                <Button btn={'secondary-btn'} content={'Explore More'} />
                <Button btn={'primary-btn'} content={'Get Started'} />
            </div>
        </section>
    )
}

export default Banner;