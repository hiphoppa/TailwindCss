import './App.css';

function App() {
  return (
    <div className='absolute custom-background'>
      <img src="./img/wind@2x.png" alt="wind" className='fixed top-10 custom-position' />
      <img src="./img/recycle.png" alt="recycle" className='fixed custom-recycle-position' />
      <img src="./img/mountain.png" alt="mountain" className='fixed custom-mountain-position' />
      <img src="./img/wind.png" alt="wind" className='fixed custom-wind-position' />
      <img src="./img/Ellipse 2.png" alt="Ellipse 2" className='fixed top-10 custom-ellipse-position' />
      <div className='container box-border mx-auto relative top-16'>
        <div class="h-64 grid grid-cols-2 justify-items-center custom-direction gap-4">
          <div>
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
          <div className='border-solid border-2 p-10 rounded-2xl border-white relative'>
            <div className='absolute bottom-14 flex gap-4 left-10'>
              <span className=""> به زودی </span>
              <img src="./img/Path 207@2x.png" alt="path 207" />
            </div>
            <div className='absolute bottom-24 flex gap-4 left-10'>
              <span className=""> شهر های فعال </span>
              <img src="./img/Path 206@2x.png" alt="path 206" />
            </div>
            <img src="./img/Group 28@2x.png" className='' alt="group" />
            <img src="./img/Path 207@2x.png" alt="path" className='absolute top-80 left-64'/>
            <img src="./img/Path 207@2x.png" alt="path" className='absolute top-56 left-56'/>
            <img src="./img/Path 207@2x.png" alt="path" className='absolute top-36 left-72'/>
            <img src="./img/Path 207@2x.png" alt="path" className='absolute top-32 left-48'/>
            <img src="./img/Path 206@2x.png" alt="path" className='absolute top-64 left-64'/>
            <img src="./img/Path 206@2x.png" alt="path" className='absolute top-36 left-96'/>
            <img src="./img/Path 206@2x.png" alt="path" className='absolute top-40 left-32'/>
            <img src="./img/Path 206@2x.png" alt="path" className='absolute top-20 left-12'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
