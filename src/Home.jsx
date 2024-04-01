import React from 'react';
import Landing from './components/Landing';
import Header from './components/Header';

const Home = ({onPasse}) => {
  return (
    <div className='App w-full overflow-hidden'>
      <Header/>
      <Landing  onLogin={onPasse} />
    </div>
  )
}

export default Home;




