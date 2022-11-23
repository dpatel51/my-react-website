import logo from './logo.svg';
import './App.css';
import React from 'react';
import ColorSchemesExample from './ColorSchemesExample';
import BasicExample from './BasicExample';
import UncontrolledExample from './UncontrolledExample';
import WithHeader from './WithHeader';
import MyTabs from './MyTabs';

function App() {
  return (
    <div className="App">
<ColorSchemesExample/>
<BasicExample/>
<UncontrolledExample/>
<WithHeader/>
<MyTabs/>
    </div>
  );
}

export default App;
