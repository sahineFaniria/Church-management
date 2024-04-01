import React, { useEffect, useRef } from 'react';
import Landing from './components/Landing';
import Header from './components/Header';

const Home = () => {

  const changeBg = useRef();

  const change = () => {
    const hasChangeBg = localStorage.getItem('changeBg') === 'true';
    changeBg.current.classList.toggle("change-bg", !hasChangeBg);
    localStorage.setItem('changeBg', !hasChangeBg);
  }

  useEffect(()=> {
    const hasChangeBg = localStorage.getItem('changeBg') === 'true';
    if(hasChangeBg){
        changeBg.current.classList.add('change-bg')
    }
    else{
        changeBg.current.classList.remove('change-bg')
    }
  }, [])

  return (
    <div ref={changeBg} className='App w-full overflow-hidden'>
        <Header/>
        <Landing change={change} />
    </div>
  )
}

export default Home;




