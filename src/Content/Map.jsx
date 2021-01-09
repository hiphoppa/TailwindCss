import React, { Fragment, useState } from 'react';
import Zahedan from '../Towns/Town1';
import Town from '../Towns/Towns';
// import Fars from '../Towns/Fars';

const Map = ({ dark }) => {
    const [mashhad, setMashhad] = useState(true)
    const [zahedan, setZahedan] = useState(true)
    // const [fars, setFars] = useState(false)
    return (
        <Fragment>
            <div className='border-solid border-2 p-10 m-10 md:m-0 rounded-2xl border-white relative mt-8 md:mt-0'>
                <div className='absolute sm:bottom-14 bottom-4 left-8 flex gap-4 sm:left-10'>
                    <span className="contents custom-span text-white font-normal text-xs sm:text-sm"> به زودی </span>
                    <img src="./img/Path 207@2x.png" alt="path 207 lg" className='z-10 hidden sm:flex w-8' />
                    <img src="./img/Path 207.png" alt="path 207 sm" className='z-10 flex sm:hidden w-4' />
                </div>
                <div className='absolute sm:bottom-24 bottom-12 flex gap-4 sm:left-10 left-8'>
                    <span className="contents custom-span text-white font-normal text-xs sm:text-sm"> شهر های فعال </span>
                    <img src="./img/Path 206@2x.png" alt="path 206 lg" className='z-10 hidden sm:flex w-8' />
                    <img src="./img/Path 206.png" alt="path 206 sm" className='z-10 flex sm:hidden w-4' />
                </div>
                <img src={dark ? './img/Group 28@2x.png' : './img/Group -1@2x.png'} className='c-transition' alt="group" />
                <div className="sm:-top-1/3 sm:-left-1/10 flex">
                    <img
                        src="./img/Path 207@2x.png"
                        alt="path lg"
                        className={`absolute top-60/100 left-45/100 cursor-pointer ${zahedan ? '' : 'ring-4'}`}
                        onClick={() => setZahedan(!zahedan)}
                    />
                    <Zahedan hide={zahedan} dark={dark} />
                </div>
                {/* <img src="./img/Path 207.png" alt="path sm" className='absolute top-40 left-32 cursor-pointer flex sm:hidden' /> */}
                <img src="./img/Path 207@2x.png" alt="path lg" className='absolute top-4/10 left-4/10 cursor-pointer' />
                {/* <div className="sm:-top-110 sm:-left-1/10 hidden relative sm:flex">
                    <img
                        src="./img/Path 207@2x.png"
                        alt="path lg"
                        className='absolute top-56 left-56 cursor-pointer hidden sm:flex'
                        onClick={() => setFars(!fars)}
                    />
                    <Fars hide={fars} dark={dark} />
                </div> */}
                {/* <img src="./img/Path 207.png" alt="path sm" className='absolute top-28 left-32 cursor-pointer flex sm:hidden' /> */}
                <img src="./img/Path 207@2x.png" alt="path lg" className='absolute top-28/100 left-2/4 cursor-pointer' />
                {/* <img src="./img/Path 207.png" alt="path sm" className='absolute top-20 left-40 cursor-pointer flex sm:hidden' /> */}
                <img src="./img/Path 207@2x.png" alt="path lg" className='absolute top-1/4 left-1/3 cursor-pointer' />
                {/* <img src="./img/Path 207.png" alt="path sm" className='absolute top-20 left-28 cursor-pointer flex sm:hidden' /> */}
                <img src="./img/Path 206@2x.png" alt="path lg" className='absolute top-2/4 left-2/4 cursor-pointer' />
                {/* <img src="./img/Path 206.png" alt="path sm" className='absolute top-32 left-36 cursor-pointer flex sm:hidden' /> */}
                <div className="sm:-top-3/4 sm:left-1/10 flex">
                    <img
                        src="./img/Path 206@2x.png"
                        alt="path lg"
                        className={`absolute top-1/4 left-70/100 cursor-pointer ${mashhad ? '' : 'ring-4'}`}
                        onClick={() => setMashhad(!mashhad)}
                    />
                    <Town hide={mashhad} dark={dark} />
                </div>
                {/* <img src="./img/Path 206.png" alt="path sm" className='absolute top-20 left-48 cursor-pointer flex sm:hidden' /> */}
                <img src="./img/Path 206@2x.png" alt="path lg" className='absolute top-1/3 left-17/100 cursor-pointer' />
                {/* <img src="./img/Path 206.png" alt="path sm" className='absolute top-24 left-20 cursor-pointer flex sm:hidden' /> */}
                <img src="./img/Path 206@2x.png" alt="path lg" className='absolute top-17/100 left-1/10 cursor-pointer' />
                {/* <img src="./img/Path 206.png" alt="path sm" className='absolute flex sm:hidden top-16 left-12 cursor-pointer' /> */}
            </div>
        </Fragment>
    );
}

export default Map;