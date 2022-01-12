import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent3 from './component/HelloComponent';

// การ return ค่าในรูปแบบของ ตัวแปร
/*const data =  (<h2>สวัสดี React</h2>);
// การเรียกใช้
ReactDOM.render(data,document.getElementById('root'));
*/

// การสร้าง component
function HelloComponent(){
  return <h1>สวัสดี component</h1>
}

// การสร้าง class component
class HelloComponent2 extends React.Component{
  render(){
    return <h1>สวัสดี component2</h1>
  }
}

//ReactDOM.render(<HelloComponent3/>,document.getElementById('root'));
ReactDOM.render(<App/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
