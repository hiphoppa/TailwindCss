import React, { Fragment } from 'react';

const Icons = () => {
    return (
        <Fragment>
            <img src="./img/wind@2x.png" alt="wind big" className='fixed md:flex hidden top-20 -right-80' />
            <img src="./img/wind.png" alt="wind small" className='absolute md:hidden flex top-48 -right-40' />
            <img src="./img/recycle@2x.png" alt="recycle big" className='fixed md:flex hidden top-80 -right-20 w-60' />
            <img src="./img/recycle.png" alt="recycle small" className='absolute flex md:hidden c-top-big -right-12 w-28' />
            <img src="./img/mountain.png" alt="mountain" className='absolute custom-mountain-position' />
            <img src="./img/wind@2x.png" alt="wind big" className='fixed hidden md:flex top-80 -left-36 w-72' />
            <img src="./img/wind.png" alt="wind small" className='absolute flex md:hidden -left-32 c-top-big' />
            <img src="./img/Ellipse 2@2x.png" alt="Ellipse 2 big" className='fixed md:flex hidden top-10 w-40 -left-20' />
            <img src="./img/Ellipse 2.png" alt="Ellipse 2 small" className='absolute top-48 flex md:hidden w-20 -left-10' />
        </Fragment>
    );
}

export default Icons;