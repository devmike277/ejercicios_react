import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FunComponent from './components/FunComponent';
import MyClass from './components/MyClass';
import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';
import MyFragment from './components/MyFragment';
import ComponentA from './components/ComponentA';
import React from 'react';


export const MyContext = React.createContext()


function App() {


  // function ClickMe2(){
  //     alert("click to class component")
  // }


  return (
    <div  className="container">
      {/* <Hello name="Mike" lastname="developer"/>
      <MyClass email="mike@developer.com" myclick={ClickMe2}/> */}
      {/* <Name/>
      <Example  name={['Python','Java','JavaScript','C#']}/>
      <Example2  name={['React','ReactNative','Django']}/>
      <Form/> */}
      {/* <MyFragment/> */}

      <MyContext.Provider value="This is a value from context">
        <ComponentA/>
      </MyContext.Provider>

    </div>
  );
}

export default App;
