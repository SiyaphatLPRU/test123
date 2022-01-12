import PropTypes from 'prop-types';
import './item.css'


/*
const Item =()=>{
    const name = "เดินห้างซื้อของ"
    const amount = 5000
    return(
        <li> {name} <span> -{amount} </span></li>
    );
}
*/
/*
// สร้าง prop เอง เพื่อกำหนดคุณสมบัติ ตามที่ต้องการ

const Item=(prop)=>{
    return(
        <li>{prop.title}<span> {prop.amount}</span></li>
    );
}
*/
/*
// prop destructering ลดการเขียนข้อความยาวของ prop
const Item=(prop)=>{
    const {title, amount} = prop
    return(
        <li>{title} <span>{amount}</span></li>
    );

}
*/
// หรือเขียนอีกรูปแบบหนึ่ง โดยไม่ต้องมีคำว่า prop
const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
const Item=({title, amount})=>{

    const status = amount<0 ?"expense":"income" // เอาคำเหล่านี้ ไปสร้างเป็น class
    const symbol = amount<0 ?"-":"+" // เอาคำเหล่านี้ ไปสร้างเป็น class    
        return(
        <li className={status}>{title} <span>{symbol}{formatNumber(Math.abs(amount).toFixed(2))}</span>
       
        </li>
    );
}
// ตรวจสอบ proptype คุณสมบัติของ propoty 
Item.prototype={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item