import './App.css';
import Content from './Content/Content';
import Map from './Content/Map';
import Icons from './Icons/Icons';
import React, { useEffect, useState } from 'react';

function App() {
  const [dark, setDark] = useState(getInitial)
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark))

  }, [dark])
  function getInitial (){
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }
  return (
    <div className={`h-screen c-transition ${dark ? 'light-mode ' : 'dark-mode'}`}>
      <Icons />
      <div className="fixed right-10 top-10 z-50">
        <label class="switch">
          <input type="checkbox" onChange={() => setDark(prevDark => !prevDark)} />
          <span class="round"></span>
        </label>
      </div>
      <div className='container box-border mx-auto relative top-16'>
        <div class="h-64 md:grid md:grid-cols-2 flex flex-col justify-items-center custom-direction md:gap-4">
          <Content dark={dark} />
          <Map dark={dark} />
        </div>
      </div>
    </div>
  );
}

export default App;
