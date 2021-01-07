import React, { Fragment } from 'react';

const Icons = () => {
    return (
        <Fragment>
            <img src="./img/wind@2x.png" alt="wind big" className='fixed md:flex hidden top-20 -right-80' />
            <img src="./img/wind.png" alt="wind small" className='fixed md:hidden flex top-48 -right-40' />
            <img src="./img/recycle.png" alt="recycle" className='fixed custom-recycle-position' />
            <img src="./img/mountain.png" alt="mountain" className='fixed custom-mountain-position' />
            <img src="./img/wind.png" alt="wind" className='fixed custom-wind-position' />
            <img src="./img/Ellipse 2@2x.png" alt="Ellipse 2 big" className='fixed md:flex hidden top-10 w-40 -left-20' />
            <img src="./img/Ellipse 2.png" alt="Ellipse 2 small" className='fixed top-48 flex md:hidden w-20 -left-10' />
        </Fragment>
    );
}

export default Icons;