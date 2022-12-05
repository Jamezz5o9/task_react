import Home from './pages/home/components/Home';
import './james.scss';
import Hero from './pages/home/components/Hero';
import Check from './pages/home/components/Check';
import React from 'react';


class App extends React.Component{
  
  render(){
    return (
      <div className='fresh'>      
          <Home />  
          <Hero />  
          <Check />     
      </div>
    );
  }

}

export default App;
