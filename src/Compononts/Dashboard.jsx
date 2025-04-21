import { useEffect, useState } from "react";
import "./Dashboard.css"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { earningData, gigData, orderData } from "./DummyData";
const Dashboard = () => {
    const [orderCount,setOrderCount] = useState(0);
    const [data,setData] = useState(earningData);
    useEffect(()=>{
        data.map((val)=>{return val.amount}).forEach((val)=>{setOrderCount((data)=>{return val + data})}); 
    },[])
    const navigate = useNavigate();
    return (
        <>
            <div className="gigs">
                <div className="filters">
                    <div onClick={()=>{navigate("/dashboard/gigs")}} className="filters1">
                        <div className="count">{gigData.length}</div>
                        <div className="filter-name"><h6>Gigs</h6></div>
                        <div  className="filter-name"><h6 style={{fontWeight:"bolder",fontSize:"8px"}}>Click to Explore</h6></div>
                    </div>
                    <div onClick={()=>{navigate("/dashboard/earnings")}} className="filters2">
                        <div className="count">$ {orderCount}</div>
                        <div className="filter-name" ><h6>Earnings</h6></div>
                        <div  className="filter-name"><h6 style={{fontWeight:"bolder",fontSize:"8px"}}>Click to Explore</h6></div>
                    </div>
                    <div onClick={()=>{navigate("/dashboard/orders")}} className="filters3">
                        <div className="count">{orderData.length}</div>
                        <div className="filter-name"><h6>Orders</h6></div>
                        <div  className="filter-name"><h6 style={{fontWeight:"bolder",fontSize:"8px"}}>Click to Explore</h6></div>
                    </div>
                </div>
            </div>
            <div className="updates">
                <div className="update-content">
                    <h5 className="head">Recent updates</h5>
                    <div className="update">
                        <h6 className="heading">Notification 🛎️</h6>
                        <div className="updateuser">
                            <div className="profile">
                                Vm
                            </div>
                            <div className="tittle">
                                <h6>New Order For You</h6>
                            </div>
                        </div>
                        <div className="msg-time">
                            <div className="msg">
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, mollitia!</h5>
                            </div>
                            <div className="time">
                                <h6>Just Now</h6>
                            </div>
                        </div>
                    </div>
                    <div className="update">
                        <h6 className="heading">Notification 🛎️</h6>
                        <div className="updateuser">
                            <div className="profile">
                                P
                            </div>
                            <div className="tittle">
                                <h6>Gig Approvel Successfull </h6>
                            </div>
                        </div>
                        <div className="msg-time">
                            <div className="msg">
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, mollitia!</h5>
                            </div>
                            <div className="time">
                                <h6>7 Min ago</h6>
                            </div>
                        </div>
                    </div>
                    <div className="update">
                        <h6 className="heading">Notification 🛎️</h6>
                        <div className="updateuser">
                            <div className="profile">
                                Mp
                            </div>
                            <div className="tittle">
                                <h6>3 days Reamaining For complete The Order</h6>
                            </div>
                        </div>
                        <div className="msg-time">
                            <div className="msg">
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, mollitia!</h5>
                            </div>
                            <div className="time">
                                <h6>1 hr ago</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;