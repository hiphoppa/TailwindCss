import React, { Fragment } from 'react';

const Contact = ({dark}) => {
    return (
        <Fragment>
            <div className={`border-0 sm:rounded-r-2xl rounded-t-2xl sm:rounded-tl-none h-full shadow-lg sm:relative flex flex-col sm:w-full outline-none focus:outline-none ${dark ? 'bg-white' : 'dark-mode'}`}>
                <div className={`relative p-6 flex-auto rounded-2xl ${dark ? "c-bg-blue" : "light-dark"}`}>
                    <h1 className="sm:text-4xl text-2xl text-white mb-12">راه های تماس با ما</h1>
                    <p className="text-white text-sm sm:text-base leading-10 font-light">
                        افزون بر راه های تماس پایین، با پر کردن فرم به ما کمک میکنید<br />
                                        تا در کمترین زمان ممکن با شما تماس بگیریم
                                    </p>
                    <div className="mt-8 flex flex-col leading-9 sm:leading-8">
                        <div className="">
                            <img src="./img/Path 337@2x.png" alt="phone big" className="inline-block ml-8" />
                            <p className="text-white inline-block text-sm sm:text-base font-light">021-25252525</p>
                        </div>
                        <div className="">
                            <img src="./img/Path 338@2x.png" alt="email big" className="inline-block ml-8" />
                            <p className="text-white inline-block text-sm sm:text-base font-light">mehran.mj9999@gmail.com</p>
                        </div>
                        <div className="">
                            <img src="./img/Path 340@2x.png" alt="phone big" className="inline-block w-3 ml-3" />
                            <p className="text-white inline-block text-xs sm:text-base font-light">تهران  /  خیابان جمهوری  /  خیابان حسن حسینی</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`sm:rounded-l-2xl rounded-b-2xl sm:rounded-b-none ${dark ? 'bg-white' : 'dark-mode'}`}>
                <div className="sm:grid sm:grid-cols-2 flex flex-col gap-4 sm:mx-16 mx-8 mt-12">
                    <div className="mb-4 sm:mb-0">
                        <p className={`${dark ? "c-font" : "light-dark-color"}`}>
                            نام و نام خانوادگی
                                        </p>
                        <input className={`w-full ${dark ? "input-light" : "input-dark"}`} type="text" placeholder='مهران محمودی' />
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <p className={`${dark ? "c-font" : "light-dark-color"}`}>
                            نام سازمان
                                        </p>
                        <input className={`w-full ${dark ? "input-light" : "input-dark"}`} type="text" />
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <p className={`${dark ? "c-font" : "light-dark-color"}`}>
                            شماره تماس
                                        </p>
                        <input className={`w-full ${dark ? "input-light" : "input-dark"}`} type="text" placeholder='09307065673' />
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <p className={`${dark ? "c-font" : "light-dark-color"}`}>
                            ایمیل
                                        </p>
                        <input className={`w-full ${dark ? "input-light" : "input-dark"}`} type="text" placeholder='mehran.mj9999@gmail.com' />
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <p className={`${dark ? "c-font" : "light-dark-color"}`}>
                            استان
                                        </p>
                        <select class={`w-full border-none bg-white rounded px-3 py-2 outline-none ${dark ? "input-light" : "input-dark"}`}>
                            <option class="">تهران</option>
                            <option class="">کرج</option>
                            <option class="">مشهد</option>
                        </select>
                    </div>
                    <div className="mb-4 sm:mb-0">
                        <p className={`${dark ? "c-font" : "light-dark-color"}`}>
                            شهر
                                        </p>
                        <select class={`w-full border-none bg-white rounded px-3 py-2 outline-none ${dark ? "input-light" : "input-dark"}`}>
                            <option class="">تهران</option>
                            <option class="">کرج</option>
                            <option class="">مشهد</option>
                        </select>
                    </div>
                </div>
                <p className={`text-bold sm:mr-16 mr-8 mt-12 font-light text-sm ${dark ? "c-text-light" : "text-white"}`}>کدام گزینه شما را معرفی میکند</p>
                <div className="grid mt-4 grid-cols-1 md:grid-cols-3 mx-8">
                    <div class="flex items-center gap-4 mb-2 sm:mr-4">
                        <input type="radio" id="radio-example-1" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                        <label for="radio-example-1" class={`text-xs font-medium ${dark ? "c-text-light" : "text-white"}`}> شخص حقیقی </label>
                    </div>
                    <div class="flex items-center gap-4 mb-2">
                        <input type="radio" id="radio-example-2" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                        <label for="radio-example-2" class={`text-xs font-medium ${dark ? "c-text-light" : "text-white"}`}> شرکت خصوصی </label>
                    </div>
                    <div class="flex items-center gap-4 mb-2">
                        <input type="radio" id="radio-example-2" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                        <label for="radio-example-2" class={`text-xs font-medium ${dark ? "c-text-light" : "text-white"}`}> سازمان دولتی </label>
                    </div>
                </div>
                <div className="mt-4 mx-16">
                    <p className={`text-xs font-medium ${dark ? "c-text-light" : "text-white"}`}>
                        پیام شما
                                    </p>
                    <textarea rows="1" className={`w-full ${dark ? "input-light" : "input-dark"}`}></textarea>
                </div>
                <button className='c-bg-blue text-white px-12 py-4 rounded-xl sm:mt-8 sm:left-16 mt-8 w-full sm:w-32 focus:outline-none  sm:absolute'> ارسال </button>
            </div>
        </Fragment>
    );
}

export default Contact;