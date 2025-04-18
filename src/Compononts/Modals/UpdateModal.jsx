import { useEffect, useRef } from "react";
import "./UpdateModal.css"
export const GigUpdateModal = () => {
    const modal = useRef();
    const closeModal = () => {
        modal.current.style.display = "none"
    }
    useEffect(() => {
        modal.current.style.display = ""
    }, [modal])
    return (
        <>
            <div ref={modal} className="modal">
                <div className="content">
                    <h3>Actions</h3>
                    <hr />
                    <div className="update">
                        <div>
                            <h5>Gig Status : </h5>
                            <select name="" id="">
                                <option value="">Active</option>
                                <option value="">Approvel pending</option>
                            </select>
                            <div className="btns">
                                <div onClick={closeModal}>Close</div>
                                <div>Delete</div>
                                <div>Update</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export const OrderUpdateModal = () => {
    const modal = useRef();
    const closeModal = () => {
        modal.current.style.display = "none"
    }
    useEffect(() => {
        modal.current.style.display = ""
    }, [modal])
    return (
        <>
            <div ref={modal} className="modal">
                <div className="content">
                    <h3>Actions</h3>
                    <hr />
                    <div className="update">
                        <div>
                            <h5> Order Status : </h5>
                            <select name="" id="">
                                <option value="">Avtive</option>
                                <option value="">Completed</option>
                            </select>
                            <h5> Payment Status : </h5>
                            <select name="" id="">
                                <option value="">Not recived</option>
                                <option value="">Received</option>
                            </select>
                            <div className="btns">
                                <div onClick={closeModal}>Close</div>
                                <div>Update</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}