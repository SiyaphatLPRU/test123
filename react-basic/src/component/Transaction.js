import Item from "./Item";
import './Transaction.css'

const Transaction2 =(props)=>{
  // props เป็นข้อมูลที่รับมา
  // การทำงานกับก้อนข้อมูล
  /*
  const data =[
    /*
    // กรณีที่มีการกำหนดแบบง่ายๆ
    {id: 1, title:'ค่ารักษาพยาบาล', amount:-2000},
    {id: 2,title:'ค่าที่พัก', amount:-4000},
    {id: 3,title:'ค่าโทรศัพทืและอินเตอร์เน็ต', amount:-1800},
    {id: 4,title:'ค่าบริการส่วนกลาง', amount:-250},
    {id: 5,title:'ค่าน้ำมัน', amount:5000},
    {id: 6,title:'ค่าเดินทาง', amount:2500}
    */
   // กรณีที่ใช้ package ของ uuid
   /*
   {title:"ค่ารักษาพยาบาล", amount:-2500},
   {title:'ค่าที่พัก', amount:-4000},
   {title:'ค่าโทรศัพทืและอินเตอร์เน็ต', amount:-1800},
   {title:"ค่าใช้จ่ายทั่วไป", amount:-250},
   {title:'ค่าน้ำมัน', amount:-5000},
   {title:'ค่าเดินทาง', amount:2500}
  ]
  */

    const {item} = props
    return(
      <div>
      <ul className='item-list'>
      ตัวอย่างการอ้างอิงข้อมูลจากก้อนข้อมูล โดยการ map และ array
        ในส่วนี้ สามารถเอาไปประยุกต์ใช้ในเรื่องการเก็บข้อมูลเพื่อเแสดงผลได้
        {item.map((element)=>{

         // return <Item title = {element.title} amount = {element.amount}/>
         /*
         // เขียนแบบ spead ได้ดังนี้
         return <Item {...element} key ={element.id}/>
         */
        // gen id โดยใช้คำสั่ง uuidv4()
         return <Item {...element} key ={element.id}/>
        })}
        <Item title ='ค่ารักษาพยาบาล' amount= '- 2500'/>
        <Item title ='ค่าใช้จ่ายทั่วไป' amount= '- 5500'/>
        <Item title ='เงินเดือน' amount= '+ 50000'/>
        <Item title ='ค่ารักษาพยาบาล' />
      </ul>
      </div>

    );
  }
export default Transaction2
/*
spead จะเป็นการยุบตัวแปรที่มี ชื่อเหมือนกัน เช่น 
return <Item title = {element.title} amount = {element.amount}/>
ที่ "title" เป็นชื่อที่ซ้ำกับ "{element.title}"
*/