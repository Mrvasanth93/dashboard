import { useState,useEffect } from "react";
import { EarningModal } from "../Modals/UpdateModal";
import "./Card.css"
const EarningCard = (data) => {
    const [showModal, setShowModal] = useState();
    useEffect(() => {
        if (showModal == false) {
            setShowModal(true)
        }
    }, [showModal])
    return (
        <>
            { showModal && <EarningModal/> }
            <div className="card">
                <div className="top">
                    <div className="tittle">{data.data.job}</div>
                    <div className="views"></div>
                </div>
                <div className="middle">
                    <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti odio voluptas iure quis at exercitationem.</div>
                </div>
                <div className="middle-1">
                    <h5>Transaction Date :{data.data.date} </h5>
                    <h5></h5>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left-bottom">
                        <h5>{data.data.status == "Withdrawn" ? "Withdrawn" : "Pending"} </h5>
                        <h3> Rs. {data.data.amount}</h3>
                    </div>
                    <div className="right-bottom">
                        <div onClick={() => {setShowModal(!showModal)}} className="update-btn">Update </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EarningCard;