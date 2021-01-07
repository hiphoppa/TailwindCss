import './App.css';
import Icons from './Icons/Icons';

function App() {
  return (
    <div className='absolute custom-background'>
      <Icons />
      <div className="absolute right-10 top-10">
        <label class="switch">
          <input type="checkbox" />
          <span class="round"></span>
        </label>
      </div>
      <div className='container box-border mx-auto relative top-16'>
        <div class="h-64 md:grid md:grid-cols-2 flex flex-col justify-items-center custom-direction md:gap-4">
          <div className='mt-16 md:mt-0 grid justify-items-center'>
            <div className="">
              <h2 className="text-white text-right text-3xl font-extrabold mb-5">پوشش شهر ها</h2>
              <p className="text-white leading-loose font-light text-sm text-right">هدف در نهایت حفظ محیط زیست با جمع آوری <br />
            پسماند هایی است که قابلیت بازماند دارند. برای این کار به شما<br />
             نیاز داریم، با ما همراه شوید تا بهروب و ناوگان آن را در سراسر <br />
             ایران گسترش دهیم</p>
              <div className="flex gap-5 custom-buttons">
                <button className="custom-contact px-8 py-4 text-white text-sm font-light focus:outline-none"> تماس با ما </button>
                <button className="custom-info px-8 py-4 text-black text-sm font-light focus:outline-none"> بیشتر بدانید </button>
              </div>
            </div>
          </div>
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
            <img src="./img/Path 207@2x.png" alt="path" className='absolute top-80 left-64 cursor-pointer' />
            <img src="./img/Path 207@2x.png" alt="path" className='absolute top-56 left-56 cursor-pointer' />
            <img src="./img/Path 207@2x.png" alt="path" className='absolute top-36 left-72 cursor-pointer' />
            <img src="./img/Path 207@2x.png" alt="path" className='absolute top-32 left-48 cursor-pointer' />
            <img src="./img/Path 206@2x.png" alt="path" className='absolute top-64 left-64 cursor-pointer' />
            <img src="./img/Path 206@2x.png" alt="path" className='absolute top-36 left-96 cursor-pointer' />
            <img src="./img/Path 206@2x.png" alt="path" className='absolute top-40 left-32 cursor-pointer' />
            <img src="./img/Path 206@2x.png" alt="path" className='absolute top-20 left-12 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
