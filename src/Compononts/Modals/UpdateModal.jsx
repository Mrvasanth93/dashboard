import { useEffect, useRef } from "react";
import "./UpdateModal.css"
const GigUpdateModal = () => {
    const modal = useRef();
    const closeModal = () =>{
       modal.current.style.display = "none"
    }
    useEffect(()=>{
        modal.current.style.display = ""
    },[modal])
    return (
        <>
            <div ref={modal} className="modal">
                <div className="content">
                    <h3>Actions</h3>
                    <hr />
                    <div className="update">
                        <div>
                            <h5>Marked as :</h5>
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

export default GigUpdateModal;