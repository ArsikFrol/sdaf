import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import WrapperContent from './components/UI/WrapperContent';

function App() {
  return (
    <div className="App">
      <WrapperContent background='#FFDF8C' padding='43px 55px 63px 45px'>
        <WrapperContent background='white' padding='50px 38px 102px 67px' borderRadius='10px'>
          <Header />
        </WrapperContent>
      </WrapperContent>
    </div>
  );
}

export default App;
