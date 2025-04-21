import { useState, useEffect } from "react";
import "./Gigs.css"
import { OrderUpdateModal } from "./Modals/UpdateModal";
import { orderData } from "./DummyData";
const Orders = () => {
    const [showModal, setShowModal] = useState();
    const [data, setData] = useState(orderData);
    const [serchData, setSerchdData] = useState();
    const [show,setShow] = useState("all")
    const [totalOrders,setTotalOrders] = useState(data.length);
    const [Completeorders,setComplteOrders] = useState(0);
    const [activeOrders,setActiveOrders] = useState(0);
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
                <h6 className="pageName">{show == "all" ? "All Orders" : show == "active" ? "Active Orders" : "Completed Orders" }</h6>
                <div className="table">
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
                </div>
            </div>
        </>
    )
}

export default Orders;