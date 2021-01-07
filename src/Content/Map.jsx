import React, { Fragment } from 'react';

const Map = () => {
    return (
        <Fragment>
            <div className='border-solid border-2 p-10 m-10 md:m-0 rounded-2xl border-white relative mt-8 md:mt-0'>
                <div className='absolute bottom-14 flex gap-4 left-10'>
                    <span className="contents custom-span"> به زودی </span>
                    <img src="./img/Path 207@2x.png" alt="path 207" className='z-10' />
                </div>
                <div className='absolute bottom-24 flex gap-4 left-10'>
                    <span className="contents custom-span"> شهر های فعال </span>
                    <img src="./img/Path 206@2x.png" alt="path 206" className='z-10' />
                </div>

                <img src="./img/Group 28@2x.png" className='' alt="group" />
                <img src="./img/Path 207@2x.png" alt="path lg" className='absolute top-80 left-64 cursor-pointer hidden sm:flex' />
                <img src="./img/Path 207.png" alt="path sm" className='absolute top-40 left-32 cursor-pointer flex sm:hidden' />
                <img src="./img/Path 207@2x.png" alt="path lg" className='absolute top-56 left-56 cursor-pointer hidden sm:flex' />
                <img src="./img/Path 207.png" alt="path sm" className='absolute top-28 left-32 cursor-pointer flex sm:hidden' />
                <img src="./img/Path 207@2x.png" alt="path lg" className='absolute top-36 left-72 cursor-pointer hidden sm:flex' />
                <img src="./img/Path 207.png" alt="path sm" className='absolute top-20 left-40 cursor-pointer flex sm:hidden' />
                <img src="./img/Path 207@2x.png" alt="path lg" className='absolute top-32 left-48 cursor-pointer hidden sm:flex' />
                <img src="./img/Path 207.png" alt="path sm" className='absolute top-20 left-28 cursor-pointer flex sm:hidden' />
                <img src="./img/Path 206@2x.png" alt="path lg" className='absolute top-64 left-64 cursor-pointer hidden sm:flex' />
                <img src="./img/Path 206.png" alt="path sm" className='absolute top-32 left-36 cursor-pointer flex sm:hidden' />
                <img src="./img/Path 206@2x.png" alt="path lg" className='absolute top-36 left-96 cursor-pointer hidden sm:flex' />
                <img src="./img/Path 206.png" alt="path sm" className='absolute top-20 left-48 cursor-pointer flex sm:hidden' />
                <img src="./img/Path 206@2x.png" alt="path lg" className='absolute top-40 left-20 cursor-pointer hidden sm:flex' />
                <img src="./img/Path 206.png" alt="path sm" className='absolute top-24 left-20 cursor-pointer flex sm:hidden' />
                <img src="./img/Path 206@2x.png" alt="path lg" className='absolute hidden sm:flex top-20 left-12 cursor-pointer' />
                <img src="./img/Path 206.png" alt="path sm" className='absolute flex sm:hidden top-16 left-12 cursor-pointer' />
            </div>
        </Fragment>
    );
}

export default Map;