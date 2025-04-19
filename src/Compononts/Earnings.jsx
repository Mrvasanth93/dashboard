import { useState } from "react";
import { earningData } from "./DummyData";
import "./Gigs.css"
import Nav from "./Nav";
const Earnings = () =>{
    const [data,setData] = useState(earningData)
    const [show,setShow] = useState("all")
    const total = 0
    let pending = 0
    let withdrawn = 0
    const calculatemoney = () =>{
        data.map((val)=>{return val.amount}).forEach((val)=>{total += val})
        data.filter((data)=>data.status != "Withdrawn").map((val)=>{return val.amount}).forEach((val)=>{pending += val})
        data.filter((data)=>data.status != "Pending").map((val)=>{return val.amount}).forEach((val)=>{withdrawn += val})
    } 
    return(
        <>
            <div className="gigs">
                <div className="filters">
                    <div onClick={()=>{setShow("all")}} className="filters1">
                        <div className="count">$ {total}</div>
                        <div className="filter-name"><h6>All Earnings</h6></div>
                    </div>
                    <div onClick={()=>{setShow("pending")}} className="filters2">
                        <div className="count">$ {pending}</div>
                        <div className="filter-name" ><h6>Pending</h6></div>
                    </div>
                    <div onClick={()=>{setShow("withdrawn")}} className="filters3">
                        <div className="count">$ {withdrawn}</div>
                        <div className="filter-name"><h6>Withdrawn</h6></div>
                    </div>
                </div>
                <div className="serch-add">
                    <div style={{width:"100%" }} className="serch-box">
                        <input placeholder="Serch gigs" type="text" name="" id="" />
                    </div>
                </div>
                <h6 className="pageName">Earnings</h6>
                <div className="table">
                    <table>
                        <thead >
                            <tr>
                                <th className="tittle">Date</th>
                                <th className="views">Job</th>
                                <th className="orders">Amount</th>
                                <th className="earnings">Status</th>
                                <th className="actions">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                show == "all" &&
                                data.map((val)=>{return <tr>
                                <td>{val.date}</td>
                                <td>{val.job}</td>
                                <td>{val.amount}</td>
                                <td>{val.status}
                                </td>
                                <td className="status">
                                    ...
                                </td>
                            </tr>})
                            }
                            {
                                show == "pending" && 
                                data.filter((data)=>data.status != "Withdrawn").map((val)=>{return <tr>
                                    <td>{val.date}</td>
                                    <td>{val.job}</td>
                                    <td>{val.amount}</td>
                                    <td>{val.status}
                                    </td>
                                    <td className="status">
                                        ...
                                    </td>
                                </tr>})
                            }
                            {
                                show == "withdrawn" && 
                                data.filter((data)=>data.status != "Pending").map((val)=>{return <tr>
                                    <td>{val.date}</td>
                                    <td>{val.job}</td>
                                    <td>{val.amount}</td>
                                    <td>{val.status}
                                    </td>
                                    <td className="status">
                                        ...
                                    </td>
                                </tr>})
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Earnings;