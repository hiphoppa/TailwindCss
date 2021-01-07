import React from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(true)}
            >
                Open regular modal
      </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

                    >
                        <div className="relative w-5/6 h-4/5 my-6 rounded-l-2xl grid grid-cols-2 mx-auto">
                            <img src="./img/Path 2645@2x.png" alt="exit" className="absolute left-6 top-6 cursor-pointer" onClick={() => setShowModal(false)} />
                            <div className="border-0 rounded-r-2xl  h-full shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="relative p-6 flex-auto c-bg-blue rounded-2xl">
                                    <h1 className="text-4xl text-white mb-12">راه های تماس با ما</h1>
                                    <p className="text-white text-md leading-10 font-light">
                                        افزون بر راه های تماس پایین، با پر کردن فرم به ما کمک میکنید<br />
                                        تا در کمترین زمان ممکن با شما تماس بگیریم
                                    </p>
                                    <div className="mt-8 flex flex-col leading-8">
                                        <div className="">
                                            <img src="./img/Path 337@2x.png" alt="phone big" className="inline-block ml-8" />
                                            <p className="text-white inline-block text-md font-light">021-25252525</p>
                                        </div>
                                        <div className="">
                                            <img src="./img/Path 338@2x.png" alt="email big" className="inline-block ml-8" />
                                            <p className="text-white inline-block text-md font-light">mehran.mj9999@gmail.com</p>
                                        </div>
                                        <div className="">
                                            <img src="./img/Path 340@2x.png" alt="phone big" className="inline-block ml-8" />
                                            <p className="text-white inline-block text-md font-light">تهران  /  خیابان جمهوری  /  خیابان حسن حسینی</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-l-2xl">
                                <div className="grid grid-cols-2 gap-4 mx-16 mt-12">
                                    <div className="">
                                        <p className='c-font'>
                                            نام و نام خانوادگی
                                        </p>
                                        <input className='border-b-2 border-gray-600' type="text" placeholder='مهران محمودی' />
                                    </div>
                                    <div className="">
                                        <p className='c-font'>
                                            نام سازمان
                                        </p>
                                        <input className='border-b-2 border-gray-600' type="text" />
                                    </div>
                                    <div className="">
                                        <p className='c-font'>
                                            شماره تماس
                                        </p>
                                        <input className='border-b-2 border-gray-600' type="text" placeholder='09307065673' />
                                    </div>
                                    <div className="">
                                        <p className='c-font'>
                                            ایمیل
                                        </p>
                                        <input className='border-b-2 border-gray-600' type="text" placeholder='mehran.mj9999@gmail.com' />
                                    </div>
                                    <div className="">
                                        <p className='c-font'>
                                            استان
                                        </p>
                                        <select class="w-full border-none bg-white rounded px-3 py-2 outline-none c-font">
                                            <option class="">تهران</option>
                                            <option class="">کرج</option>
                                            <option class="">مشهد</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <p className='c-font'>
                                            شهر
                                        </p>
                                        <select class="w-full border-none bg-white rounded px-3 py-2 outline-none c-font">
                                            <option class="">تهران</option>
                                            <option class="">کرج</option>
                                            <option class="">مشهد</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="text-bold text-black mr-16 mt-12 font-light text-sm">کدام گزینه شما را معرفی میکند</p>
                                <div className="grid mt-4 grid-cols-1 md:grid-cols-3 mx-8">
                                    <div class="flex items-center gap-4 mb-2 mr-4">
                                        <input type="radio" id="radio-example-1" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                                        <label for="radio-example-1" class="text-gray-600 c-font"> شخص حقیقی </label>
                                    </div>
                                    <div class="flex items-center gap-4 mb-2">
                                        <input type="radio" id="radio-example-2" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                                        <label for="radio-example-2" class="text-gray-600 c-font"> شرکت خصوصی </label>
                                    </div>
                                    <div class="flex items-center gap-4 mb-2">
                                        <input type="radio" id="radio-example-2" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                                        <label for="radio-example-2" class="text-gray-600 c-font"> سازمان دولتی </label>
                                    </div>
                                </div>
                                <div className="mt-4 mx-16">
                                    <p className='c-font'>
                                        پیام شما
                                    </p>
                                    <textarea rows="1" className="border-b-2 border-gray-600 w-full"></textarea>
                                </div>
                                <button className='c-bg-blue text-white px-12 py-4 rounded-xl mt-8 left-16 absolute'> ارسال </button>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
