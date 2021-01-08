import React, { Fragment, useState } from 'react';
import Contact from './Contact';
import MoreInfo from './Info';
// import New from './new';
// import MoreInfo from './Info';
// import Modall from './new';

const Content = ({ dark }) => {
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState(false);

    return (
        <Fragment>
            <div className='mt-16 md:mt-0 grid justify-items-center'>
                <div className="">
                    <h2 className="text-white text-right md:text-3xl text-2xl font-medium md:font-extrabold mb-5">پوشش شهر ها</h2>
                    <p className="text-white leading-loose font-light text-sm text-right">هدف در نهایت حفظ محیط زیست با جمع آوری <br />
                        پسماند هایی است که قابلیت بازماند دارند. برای این کار به شما<br />
                         نیاز داریم، با ما همراه شوید تا بهروب و ناوگان آن را در سراسر <br />
                         ایران گسترش دهیم</p>
                    {/* <New dark={dark} /> */}
                    <div className="flex gap-5 custom-buttons">
                        <button
                            className="custom-contact px-8 py-4 text-white text-sm font-light focus:outline-none"
                            style={{ transition: 'all 0.15s ease' }}
                            onClick={() => setShowModal(true)}
                        > تماس با ما </button>
                        {showModal ? (
                            <div
                                className="justify-center items-center sm:flex sm:overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
                            >
                                <div className="relative w-72 sm:w-5/6 h-4/5 my-6 top-24 sm:top-0 sm:rounded-l-2xl rounded-t-2xl sm:grid sm:grid-cols-2 flex flex-col mx-auto">
                                    <img src="./img/Path 2645@2x.png" alt="exit" className={`absolute hidden sm:flex left-6 top-6 cursor-pointer ${dark ? "" : "bg-white"}`} onClick={() => setShowModal(false)} />
                                    <img src="./img/Path 2645@2x.png" alt="exit" className={`absolute flex sm:hidden left-6 top-8 cursor-pointer z-20 w-4 ${dark ? "" : "bg-white"}`} onClick={() => setShowModal(false)} />
                                    <Contact dark={dark} />
                                </div>
                            </div>
                        ) : null}
                        <button
                            className="custom-info px-8 py-4 text-black text-sm font-light focus:outline-none"
                            style={{ transition: 'all 0.15s ease' }}
                            onClick={() => setModal(true)}
                        > بیشتر بدانید </button>
                        {modal ? (
                            <div
                                className="justify-center items-center sm:flex sm:overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
                            >
                                <div className="relative w-10/12 sm:w-2/5 h-4/5 my-6 top-24 sm:top-2 sm:top-0 sm:rounded-l-2xl rounded-t-2xl flex flex-col mx-auto">
                                    <div className={`border-0 rounded-3xl shadow-lg flex sm:relative top-24 sm:top-2 flex-col w-full outline-none focus:outline-none ${dark ? 'bg-white' : 'dark-mode'}`}>
                                        <div className="relative w-full p-6 flex-auto">
                                            <img src="./img/Path 2645@2x.png" alt="exit" className={`absolute top-8 left-8 cursor-pointer ${dark ? '' : 'bg-white'}`} onClick={() => setModal(false)} />
                                            <MoreInfo dark={dark} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        {/* <MoreInfo /> */}

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Content;