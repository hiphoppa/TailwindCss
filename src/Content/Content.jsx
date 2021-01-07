import React, { Fragment, useState } from 'react';
import Modal from './Modal';

const Content = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <Fragment>
            <div className='mt-16 md:mt-0 grid justify-items-center'>
                <div className="">
                    <h2 className="text-white text-right md:text-3xl text-2xl font-medium md:font-extrabold mb-5">پوشش شهر ها</h2>
                    <p className="text-white leading-loose font-light text-sm text-right">هدف در نهایت حفظ محیط زیست با جمع آوری <br />
            پسماند هایی است که قابلیت بازماند دارند. برای این کار به شما<br />
             نیاز داریم، با ما همراه شوید تا بهروب و ناوگان آن را در سراسر <br />
             ایران گسترش دهیم</p>
<Modal />
                    <div className="flex gap-5 custom-buttons">
                        <button
                            className="custom-contact px-8 py-4 text-white text-sm font-light focus:outline-none"
                            style={{ transition: 'all 0.15s ease' }}
                            onClick={() => setShowModal(true)}
                        > تماس با ما </button>
                        



                        <button className="custom-info px-8 py-4 text-black text-sm font-light focus:outline-none"> بیشتر بدانید </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Content;