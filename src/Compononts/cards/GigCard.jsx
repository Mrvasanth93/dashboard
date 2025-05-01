import { useState,useEffect } from "react";
import { GigUpdateModal } from "../Modals/UpdateModal";
import "./Card.css"
const GigCard = (data) => {
    const [showModal, setShowModal] = useState();
    useEffect(() => {
        if (showModal == false) {
            setShowModal(true)
        }
    }, [showModal])
    return (
        <>
            {showModal && <GigUpdateModal/> }
            <div className="card">
                <div className="top">
                    <div className="tittle">{data.data.title}</div>
                    <div className="views"></div>
                </div>
                <div className="middle">
                    <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti odio voluptas iure quis at exercitationem.</div>
                </div>
                <div className="middle-1">
                    <h5>No of Views :{data.data.views} </h5>
                    <h5>No of Orders : {data.data.orders}</h5>
                    <h5></h5>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left-bottom">
                        <h5>{data.data.status == "active" ? "Active Now" : "Un-Approvel Gigs"} </h5>
                        <h3> Rs. {data.data.earning}</h3>
                    </div>
                    <div className="right-bottom">
                        <div onClick={() => {setShowModal(!showModal)}} className="update-btn">Update </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GigCard;