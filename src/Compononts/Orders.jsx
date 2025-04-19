import { useState,useEffect } from "react";
import "./Gigs.css"
import { OrderUpdateModal } from "./Modals/UpdateModal";
const Orders = () =>{
    const [showModal,setShowModal] = useState();
    useEffect(()=>{
            if(showModal == false){
               setShowModal(true)
            }
        },[showModal])
    return(
        <>
            {
                showModal && <OrderUpdateModal/>
            }
            <div className="gigs">
                <div className="filters">
                    <div className="filters1">
                        <div className="count">20</div>
                        <div className="filter-name"><h6>All Orders</h6></div>
                    </div>
                    <div className="filters2">
                        <div className="count">12</div>
                        <div className="filter-name" ><h6>Active Orders</h6></div>
                    </div>
                    <div className="filters3">
                        <div className="count">12</div>
                        <div className="filter-name"><h6>Completed Orders</h6></div>
                    </div>
                </div>
                <div className="serch-add">
                    <div style={{width:"100%" }} className="serch-box">
                        <input placeholder="Serch gigs" type="text" name="" id="" />
                    </div>
                </div>
                <h6 className="pageName">Orders</h6>
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
                            <tr>
                                <td>Web design</td>
                                <td>#203131</td>
                                <td>Completed</td>
                                <td className="status">
                                    pending
                                </td>
                                <td onClick={()=>{setShowModal(!showModal)}}>...</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Orders;