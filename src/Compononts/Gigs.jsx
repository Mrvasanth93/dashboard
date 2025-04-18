import { useEffect, useState } from "react";
import "./Gigs.css"
import GigUpdateModal from "./Modals/UpdateModal";
const Gigs = () =>{
    const [showModal,setShowModal] = useState();
    useEffect(()=>{
        if(showModal == false){
           setShowModal(true)
        }
    },[showModal])
    return(
        <>
            {
                showModal && <GigUpdateModal/>
            }
            <div className="gigs">
                <div className="filters">
                    <div className="filters1">
                        <div className="count">20</div>
                        <div className="filter-name"><h6>All Gigs</h6></div>
                    </div>
                    <div className="filters2">
                        <div className="count">16</div>
                        <div className="filter-name" ><h6>Active Gigs</h6></div>
                    </div>
                    <div className="filters3">
                        <div className="count">4</div>
                        <div className="filter-name"><h6>Approvel Gigs</h6></div>
                    </div>
                </div>
                <div className="serch-add">
                    <div className="serch-box">
                        <input placeholder="Serch gigs" type="text" name="" id="" />
                    </div>
                    <div className="add-btn">
                        <div className="btn">
                            + Add New Gig
                        </div>
                    </div>
                </div>
                <div className="table">
                    <table>
                        <thead >
                            <tr>
                                <th className="tittle">Tittle</th>
                                <th className="views">Views</th>
                                <th className="orders">Orders</th>
                                <th className="earnings">Earn</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Web design</td>
                                <td>20</td>
                                <td>7</td>
                                <td>30000</td>
                                <td onClick={()=>{setShowModal(!showModal)}}>...</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Web design</td>
                                <td>20</td>
                                <td>7</td>
                                <td>30000</td>
                                <td onClick={()=>{setShowModal(!showModal)}}>...</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Web design</td>
                                <td>20</td>
                                <td>7</td>
                                <td>30000</td>
                                <td onClick={()=>{setShowModal(!showModal)}}>...</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Web design</td>
                                <td>20</td>
                                <td>7</td>
                                <td>30000</td>
                                <td onClick={()=>{setShowModal(!showModal)}}>...</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Web design</td>
                                <td>20</td>
                                <td>7</td>
                                <td>30000</td>
                                <td onClick={()=>{setShowModal(!showModal)}}>...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Gigs;