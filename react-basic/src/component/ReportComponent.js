import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportComponent.css'
const ReportComponent=()=>{
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const {income,expense} = useContext(DataContext)
    return(   
             
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿ {formatNumber((income - expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">฿ {formatNumber(income.toFixed(2))}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">฿ {formatNumber(expense.toFixed(2))}</p>
                </div>
            </div>
        </div>
    )
}
export default ReportComponent