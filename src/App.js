import './App.css';
import Content from './Content/Content';
import Map from './Content/Map';
import Icons from './Icons/Icons';

function App() {
  return (
    <div className=' custom-background'>
      <Icons />
      <div className="absolute right-10 top-10">
        <label class="switch">
          <input type="checkbox" />
          <span class="round"></span>
        </label>
      </div>
      <div className='container box-border mx-auto relative top-16'>
        <div class="h-64 md:grid md:grid-cols-2 flex flex-col justify-items-center custom-direction md:gap-4">
          <Content />
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
