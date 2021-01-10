import React, { Fragment, useState } from 'react';
import Alborz from '../Towns/Alborz';
import Azar from '../Towns/Azar';
import Esfahan from '../Towns/Esfahan';
import Kermanshah from '../Towns/Kermanshah';
import Semnan from '../Towns/Semnan';
import Zahedan from '../Towns/Zahedan';
import Mashhad from '../Towns/Mashhad';
import Yazd from '../Towns/Yazd';

const Map = ({ dark }) => {
    const [mashhad, setMashhad] = useState(true)
    const [zahedan, setZahedan] = useState(true)
    const [esfhan, setEsfahan] = useState(true)
    const [semnan, setSemnan] = useState(true)
    const [alborz, setAlborz] = useState(true)
    const [yazd, setYazd] = useState(true)
    const [kermanshah, setKermanshah] = useState(true)
    const [azar, setAzar] = useState(true)
    return (
        <Fragment>
            <div className='border-solid border-2 p-10 m-10 md:m-0 rounded-2xl border-white relative mt-8 md:mt-0'>
                <div className='absolute bottom-8/100 flex gap-4 left-8/100'>
                    <span className="contents custom-span text-white font-normal text-xs sm:text-sm"> به زودی </span>
                    <img src="./img/Path 207@2x.png" alt="path 207 lg" className='z-10 hidden sm:flex w-8' />
                    <img src="./img/Path 207.png" alt="path 207 sm" className='z-10 flex sm:hidden w-4' />
                </div>
                <div className='absolute bottom-17/100 flex gap-4 left-8/100'>
                    <span className="contents custom-span text-white font-normal text-xs sm:text-sm"> شهر های فعال </span>
                    <img src="./img/Path 206@2x.png" alt="path 206 lg" className='z-10 hidden sm:flex w-8' />
                    <img src="./img/Path 206.png" alt="path 206 sm" className='z-10 flex sm:hidden w-4' />
                </div>
                <img src={dark ? './img/Group 28@2x.png' : './img/Group -1@2x.png'} className='c-transition' alt="group" />
                <div className="sm:-top-1/3 sm:-left-1/10 flex">
                    <img
                        src="./img/Path 207@2x.png"
                        alt="Zahedan lg"
                        className={`absolute top-60/100 left-45/100 cursor-pointer ${zahedan ? '' : 'ring-4'}`}
                        onClick={() => setZahedan(!zahedan)}
                    />
                    <Zahedan hide={zahedan} dark={dark} />
                </div>
                <div className="sm:-top-1/3 sm:-left-1/10 flex">
                    <img
                        src="./img/Path 207@2x.png"
                        alt="esfahan lg"
                        className={`absolute top-4/10 left-4/10 cursor-pointer ${esfhan ? '' : 'ring-4'}`}
                        onClick={() => setEsfahan(!esfhan)}
                    />
                    <Esfahan hide={esfhan} dark={dark} />
                </div>
                <div className="sm:-top-1/3 sm:-left-1/10 flex">
                    <img
                        src="./img/Path 207@2x.png"
                        alt="semnan lg"
                        className={`absolute top-28/100 left-2/4 cursor-pointer ${semnan ? '' : 'ring-4'}`}
                        onClick={() => setSemnan(!semnan)}
                    />
                    <Semnan hide={semnan} dark={dark} />
                </div>
                <div className="sm:-top-1/3 sm:-left-1/10 flex">
                    <img
                        src="./img/Path 207@2x.png"
                        alt="Alborz lg"
                        className={`absolute top-1/4 left-1/3 cursor-pointer ${alborz ? '' : 'ring-4'}`}
                        onClick={() => setAlborz(!alborz)}
                    />
                    <Alborz hide={alborz} dark={dark} />
                </div>
                <div className="sm:-top-3/4 sm:left-1/10 flex">
                    <img
                        src="./img/Path 206@2x.png"
                        alt="Yazd lg"
                        className={`absolute top-2/4 left-2/4 cursor-pointer ${yazd ? '' : 'ring-4'}`}
                        onClick={() => setYazd(!yazd)}
                    />
                    <Yazd hide={yazd} dark={dark} />
                </div>
                <div className="sm:-top-3/4 sm:left-1/10 flex">
                    <img
                        src="./img/Path 206@2x.png"
                        alt="Mashhad lg"
                        className={`absolute top-1/4 left-70/100 cursor-pointer ${mashhad ? '' : 'ring-4'}`}
                        onClick={() => setMashhad(!mashhad)}
                    />
                    <Mashhad hide={mashhad} dark={dark} />
                </div>
                <div className="sm:-top-3/4 sm:left-1/10 flex">
                    <img
                        src="./img/Path 206@2x.png"
                        alt="kermanshah lg"
                        className={`absolute top-1/3 left-17/100 cursor-pointer ${kermanshah ? '' : 'ring-4'}`}
                        onClick={() => setKermanshah(!kermanshah)}
                    />
                    <Kermanshah hide={kermanshah} dark={dark} />
                </div>
                <div className="sm:-top-3/4 sm:left-1/10 flex">
                    <img
                        src="./img/Path 206@2x.png"
                        alt="AzarbayejanGh lg"
                        className={`absolute top-17/100 left-1/10 cursor-pointer ${azar ? '' : 'ring-4'}`}
                        onClick={() => setAzar(!azar)}
                    />
                    <Azar hide={azar} dark={dark} />
                </div>
            </div>
        </Fragment>
    );
}

export default Map;