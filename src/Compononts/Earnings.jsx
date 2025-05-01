import { useEffect, useState,useRef } from "react";
import { earningData } from "./DummyData";
import "./Gigs.css"
import { EarningModal } from "./Modals/UpdateModal";
import EarningCard from "./cards/EarningCard";
const Earnings = () => {
    const [data, setData] = useState(earningData)
    const [showModal, setShowModal] = useState();
    const [show, setShow] = useState("all")
    const [total, setTotal] = useState(0);
    const [pending, setPending] = useState(0);
    const [withdrawn, setWithdrawn] = useState(0);
    const [serchData, setSerchdData] = useState();
    const [view,setView] = useState("table");
    const tableref = useRef();
    const cardref = useRef();
    useEffect(()=>{
        if(view == "table"){
            console.log(tableref);
            tableref.current.style.backgroundColor = "rgba(0, 128, 0, 0.445)"
            tableref.current.style.border = "1px solid rgba(0, 128, 0, 0.445)"
            tableref.current.style.borderTopLeftRadius = "5px"
            tableref.current.style.borderBottomLeftRadius = "5px"
            cardref.current.style.backgroundColor = ""
            cardref.current.style.border = ""
            cardref.current.style.borderRadius = ""
        }
        else{
            cardref.current.style.backgroundColor = "rgba(0, 128, 0, 0.445)"
            cardref.current.style.border = "1px solid rgba(0, 128, 0, 0.445)"
            cardref.current.style.borderTopRightRadius = "5px"
            cardref.current.style.borderBottomRightRadius = "5px"
            tableref.current.style.backgroundColor = ""
            tableref.current.style.border= ""
            tableref.current.style.borderRadius = ""
        }
    },[view])
    useEffect(() => {
        handleDataModify(serchData);
    }, [serchData])
    const handleDataModify = (serchData) => {
        if (serchData == undefined || serchData == "" || serchData == null) {
            setData(earningData)
            console.log(data);

        }
        else {
            setData(data.filter((val) => { return val.job.toLowerCase().includes(serchData) }));
        }
    }
    const calculatemoney = () => {
        data.map((val) => { return val.amount }).forEach((val) => { setTotal((data) => { return val + data }) });
        data.filter((data) => data.status != "Withdrawn").map((val) => { return val.amount }).forEach((val) => { setPending((data) => { return data + val }) })
        data.filter((data) => data.status != "Pending").map((val) => { return val.amount }).forEach((val) => { setWithdrawn((data) => { return data + val }) });
    }
    useEffect(() => {
        calculatemoney();
    }, [])
    useEffect(() => {
        if (showModal == false) {
            setShowModal(true)
        }
    }, [showModal])
    return (
        <>
            {
                showModal && <EarningModal />
            }
            <div className="gigs">
                <div className="filters">
                    <div onClick={() => { setShow("all") }} className="filters1">
                        <div className="count">$ {total}</div>
                        <div className="filter-name"><h6>Total Earnings</h6></div>
                    </div>
                    <div onClick={() => { setShow("pending") }} className="filters2">
                        <div className="count">$ {pending}</div>
                        <div className="filter-name" ><h6>Pending Amounts</h6></div>
                    </div>
                    <div onClick={() => { setShow("withdrawn") }} className="filters3">
                        <div className="count">$ {withdrawn}</div>
                        <div className="filter-name"><h6>Withdrawn Amounts</h6></div>
                    </div>
                </div>
                <div className="serch-add">
                    <div style={{ width: "100%" }} className="serch-box">
                        <input onChange={(e) => { setSerchdData(e.target.value) }} placeholder="Serch gigs" type="text" name="" id="" />
                    </div>
                </div>
                <div className="view">
                    <h6 className="pageName">{show == "all" ? "Total Earnings" : show == "pending" ? "Pending Amounts" : "Withdrawn Amountss"}</h6>
                    <div className="view-icon">
                        <h6 ref={tableref} onClick={()=>{setView("table")}} className="tableview">📅</h6>
                        <h6 ref={cardref} onClick={()=>{setView("card")}} className="cardview">📰</h6>
                    </div>
                </div>
                {
                    view == "table" ? <div className="table">
                    <table>
                        <thead >
                            <tr>
                                <th className="tittle">Date</th>
                                <th className="views">Job</th>
                                <th className="orders">Amount</th>
                                <th className="earnings">Status</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                show == "all" &&
                                data.map((val) => {
                                    return <tr>
                                        <td>{val.date}</td>
                                        <td>{val.job}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.status.toLowerCase()}
                                        </td>
                                        <td onClick={() => { setShowModal(!showModal) }} className="status">
                                            ...
                                        </td>
                                    </tr>
                                })
                            }
                            {
                                show == "pending" &&
                                data.filter((data) => data.status != "Withdrawn").map((val) => {
                                    return <tr>
                                        <td>{val.date}</td>
                                        <td>{val.job}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.status}
                                        </td>
                                        <td onClick={() => { setShowModal(!showModal) }} className="status">
                                            ...
                                        </td>
                                    </tr>
                                })
                            }
                            {
                                show == "withdrawn" &&
                                data.filter((data) => data.status != "Pending").map((val) => {
                                    return <tr>
                                        <td>{val.date}</td>
                                        <td>{val.job}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.status}
                                        </td>
                                        <td onClick={() => { setShowModal(!showModal) }} className="status">
                                            ...
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>:<div className="card-view">
                    {
                        show == "all" && 
                        data.map((data)=>{return <EarningCard data={data}/>})
                    }
                    {
                        show == "pending" &&
                        data.filter((data) =>{return data.status == "Pending"}).map((data)=>{return <EarningCard data={data}/>})
                    }
                    {
                        show == "withdrawn" &&
                        data.filter((data) =>{return data.status == "Withdrawn"}).map((data)=>{return <EarningCard data={data}/>})
                    }
                </div>
                }
            </div>
        </>
    )
}

export default Earnings;