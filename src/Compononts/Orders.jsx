import { useState, useEffect,useRef } from "react";
import "./Gigs.css"
import { OrderUpdateModal } from "./Modals/UpdateModal";
import { orderData } from "./DummyData";
import OrderCard from "./cards/OrderCard";
const Orders = () => {
    const [showModal, setShowModal] = useState();
    const [data, setData] = useState(orderData);
    const [serchData, setSerchdData] = useState();
    const [show,setShow] = useState("all")
    const [totalOrders,setTotalOrders] = useState(data.length);
    const [Completeorders,setComplteOrders] = useState(0);
    const [activeOrders,setActiveOrders] = useState(0);
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
        if (showModal == false) {
            setShowModal(true)
        }
    }, [showModal])
    useEffect(() => {
        handleDataModify(serchData);
    }, [serchData])
    const handleDataModify = (serchData) => {
        if (serchData == undefined || serchData == "" || serchData == null) {
            setData(orderData)
        }
        else {
            setData(data.filter((val) => { return val.title.toLowerCase().includes(serchData) }));
        }
    }
    const calculateOrders = () =>{
        setActiveOrders(()=>{return data.filter((data)=>data.status == "Active").length})
        setComplteOrders(()=>{return data.filter((data)=>data.status == "Completed").length})
     }
    useEffect(()=>{
        calculateOrders();
    },[])
    return (
        <>
            {
                showModal && <OrderUpdateModal />
            }
            <div className="gigs">
                <div className="filters">
                    <div onClick={()=>{setShow("all")}} className="filters1">
                        <div className="count">{totalOrders}</div>
                        <div className="filter-name"><h6>All Orders</h6></div>
                    </div>
                    <div onClick={()=>{setShow("active")}} className="filters2">
                        <div className="count">{activeOrders}</div>
                        <div className="filter-name" ><h6>Active Orders</h6></div>
                    </div>
                    <div onClick={()=>{setShow("complete")}} className="filters3">
                        <div className="count">{Completeorders}</div>
                        <div className="filter-name"><h6>Completed Orders</h6></div>
                    </div>
                </div>
                <div className="serch-add">
                    <div style={{ width: "100%" }} className="serch-box">
                        <input onChange={(e) => { setSerchdData(e.target.value) }} placeholder="Serch gigs" type="text" name="" id="" />
                    </div>
                </div>
                <div className="view">
                    <h6 className="pageName">{show == "all" ? "All Orders" : show == "active" ? "Active Orders" : "Completed Orderss"}</h6>
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
                                <th className="tittle">Tittle</th>
                                <th className="views">Order ID</th>
                                <th className="earnings">Status</th>
                                <th className="views">Payment</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                show == "all" &&
                                data.map((val) => {
                                    return <tr>
                                        <td>{val.title}</td>
                                        <td>{val.orderId}</td>
                                        <td>{val.status}</td>
                                        <td className="status">
                                            {val.payment}
                                        </td>
                                        <td onClick={() => { setShowModal(!showModal) }}>...</td>
                                    </tr>
                                })
                            }
                            {
                                show == "active" &&
                                data.filter((data) =>{return data.status == "Active"}).map((val) => {
                                    return <tr>
                                        <td>{val.title}</td>
                                        <td>{val.orderId}</td>
                                        <td>{val.status}</td>
                                        <td className="status">
                                            {val.payment}
                                        </td>
                                        <td onClick={() => { setShowModal(!showModal) }}>...</td>
                                    </tr>
                                })
                            }
                            {
                                show == "complete" &&
                                data.filter((data) =>{return data.status == "Completed"}).map((val) => {
                                    return <tr>
                                        <td>{val.title}</td>
                                        <td>{val.orderId}</td>
                                        <td>{val.status}</td>
                                        <td className="status">
                                            {val.payment}
                                        </td>
                                        <td onClick={() => { setShowModal(!showModal) }}>...</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    </div>:<div className="card-view">
                    {
                        show == "all" && 
                        data.map((data)=>{return <OrderCard data={data}/>})
                    }
                    {
                        show == "active" &&
                        data.filter((data) =>{return data.status == "Active"}).map((data)=>{return <OrderCard data={data}/>})
                    }
                    {
                        show == "complete" &&
                        data.filter((data) =>{return data.status == "Completed"}).map((data)=>{return <OrderCard data={data}/>})
                    }
                </div>
                }
            </div>
        </>
    )
}

export default Orders;