import { useEffect, useState } from "react";
import { OrderUpdateModal } from "../Modals/UpdateModal";
import "./Card.css"
const OrderCard = (data) => {
    const [showModal, setShowModal] = useState();
    useEffect(() => {
        if (showModal == false) {
            setShowModal(true)
        }
    }, [showModal])
    return (
        <>
            {showModal && <OrderUpdateModal/>}
            <div className="card">
                <div className="top">
                    <div className="tittle">{data.data.title}</div>
                    <div className="views"></div>
                </div>
                <div className="middle">
                    <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti odio voluptas iure quis at exercitationem.</div>
                </div>
                <div className="middle-1">
                    <h5>Order Id : {data.data.orderId} </h5>
                    <h5>Order status : {data.data.status}</h5>
                    <h5></h5>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left-bottom">
                        <h5>{data.data.status == "Completed" ? "Payment completed" : "Payment Pending"} </h5>
                        <h3> Rs. {data.data.payment}</h3>
                    </div>
                    <div className="right-bottom">
                        <div onClick={() => {setShowModal(!showModal)}} className="update-btn">Update </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderCard;