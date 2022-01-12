import React from "react";
import './App.css'
import Transaction2 from "./component/Transaction";
import FormComponent from "./component/FormComponent";
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./component/ReportComponent";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
function App() {

  // external กำหนด style อยู่ที่ข้างนอก
  const desige = { color: 'blue', textAlign: 'center', fontSize: '1.5rem' }
  const initData = [
    { id: 1, title: "ค่ารักษาพยาบาล", amount: -2500 },
    { id: 2, title: 'ค่าที่พัก', amount: -4000 },
    { id: 3, title: 'ค่าโทรศัพทืและอินเตอร์เน็ต', amount: -1800 },
    { id: 4, title: "รายได้จากสวัสดิการรัฐ", amount: 4500 },
    { id: 5, title: 'ค่าน้ำมัน', amount: -5000 },
    { id: 6, title: 'เงินเดือน', amount: 60500 }
  ]
  const [item, setItem] = useState([])
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpende] = useState(0)
  // onAddNewItem รับข้อมูลที่ถูกส่งมาจาก FormComponent
  const onAddNewItem = (newItem) => {
    setItem((prevItem) => {
      return [newItem, ...prevItem]
    })
    //console.log('ข้อมูลท่ส่งมาจาก Form Component = ',newItem)
  }
  useEffect(() => {
    const amounts = item.map(item => item.amount)
    console.log(amounts)
    const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0)
    console.log("รายได้ = ", income)
    const expense = (amounts.filter(element => element < 0).reduce((total, element) => total += element, 0)) * -1
    console.log("รายจ่าย = ", expense)
    setReportIncome(income)
    setReportExpende(expense)
  }, [item, reportIncome, reportExpense])
  return (
    //ส่งเป็น object ไปจะได้เก็บได้หลายค่า
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <Title />
        <Router>
          <div className="horizontal-menu">
            <ul>
              <li>
                <Link to='/' exact>ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to='/insert' >บันทึกข้อมูล</Link>
              </li>
            </ul>
            ก่อนหน้านี้ ติด error ที่ Switch จาก package react-router-dom@6.0.2
            ให้เปลี่ยนเป็น react-router-dom@5.2.0
            โดยใช้คำสั่ง npm install --save react-router-dom@5.2.0
            <Switch>
              <Route path='/' exact>
                <ReportComponent />
              </Route>
              <Route path='/insert'>
                <FormComponent onAddItem={onAddNewItem} />
                <Transaction />
              </Route>
            </Switch>
          </div>
        </Router>
        <Description />
        มีการส่งข้อมูล initData ในรูปแบบ props คือ item ไปยัง Transaction2
        ข้อมูลให้ ที่เกิดจากการเพิ่มข้อมูล
        <Transaction2 item={initData} />
        <Transaction2 item={item} />
      </div>
      <div align='center'>
      </div>
    </DataContext.Provider>
  );
  /*(
    <div>
      <h1>โปรแกรมบัญชีรายรับรายจ่าย</h1>
      <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
      <ul>
        <li>ค่าเดินทาง <span>-200</span></li>
        <li>เงินเดือน <span>-20000</span></li>
        <li>ค่าอาหาร <span>-500</span></li>
      </ul>
      หรือเขียนแบบ section
      <section>
        <article>
          <ul>
            <li>ค่าเดินทาง <span>-200</span></li>
            <li>เงินเดือน <span>-20000</span></li>
            <li>ค่าอาหาร <span>-500</span></li>
          </ul>
        </article>
      </section>
      หรือเขียนแบบ React.Fragment
      จากที่มี สามารถเขียนได้เป็น <></>
      <React.Fragment>
        <ul>
          <li>ค่าเดินทาง <span>-200</span></li>
          <li>เงินเดือน <span>+20000</span></li>
          <li>ค่าอาหาร <span>-500</span></li>
        </ul>
      </React.Fragment>

    </div>
  );
  */


}

const Transaction = () => {
  return (
    <div className="container">
      <ul>
        <li>ค่าเดินทาง <span>-200</span></li>
        <li>เงินเดือน <span>+20000</span></li>
        <li>ค่าอาหาร <span>-500</span></li>
      </ul>
    </div>
  );
}
// กำหนด style เป็นแบบ inline
const Title = () => <h1 style={{ color: 'red', textAlign: 'center', fontSize: '1.5rem' }}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>

/*
const Item =()=><li>ค่าเดินทาง <span> -200 </span></li>
const Transaction2 =()=>{
  return(
    <ul>
      <Item/>
      <Item/>
      <Item/>
      <Transaction/>
    </ul>
  );
}
*/
export default App;
