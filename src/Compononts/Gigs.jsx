import {  useEffect, useRef, useState } from "react";
import "./Gigs.css"
import { GigUpdateModal } from "./Modals/UpdateModal";
import { gigData } from "./DummyData";
import GigCard from "./cards/GigCard";
const Gigs = () => {
    const [data, setData] = useState(gigData);
    const [showModal, setShowModal] = useState();
    const [serchData, setSerchdData] = useState();
    const [show, setShow] = useState("all")
    const [totalGigs, setTotalGigs] = useState(data.length);
    const [activeGigs, setActiveGigs] = useState();
    const [aproovelWaitingGigs, setAproovelWaitingGigs] = useState();
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
        handleDataModify(serchData);
    }, [serchData])
    const handleDataModify = (serchData) => {
        if (serchData == undefined || serchData == "" || serchData == null) {
            setData(gigData)
        }
        else {
            setData(data.filter((val) => { return val.title.toLowerCase().includes(serchData.toLowerCase()) }));
        }
    }
    useEffect(() => {
        if (showModal == false) {
            setShowModal(true)
        }
    }, [showModal])
    const calculateGigs = () => {
        setActiveGigs(() => { return data.filter((data) => data.status == "active").length })
        setAproovelWaitingGigs(() => { return data.filter((data) => data.status == "approval waiting").length })
    }
    useEffect(() => {
        calculateGigs();
    }, [])
    return (
        <>
            {
                showModal && <GigUpdateModal />
            }
            <div className="gigs">
                <div className="filters">
                    <div onClick={() => { setShow("all") }} className="filters1">
                        <div className="count">{totalGigs}</div>
                        <div className="filter-name"><h6>All Gigs</h6></div>
                    </div>
                    <div onClick={() => { setShow("active") }} className="filters2">
                        <div className="count">{activeGigs}</div>
                        <div className="filter-name" ><h6>Active Gigs</h6></div>
                    </div>
                    <div onClick={() => { setShow("waiting") }} className="filters3">
                        <div className="count">{aproovelWaitingGigs}</div>
                        <div className="filter-name"><h6>Approvel waiting Gigs</h6></div>
                    </div>
                </div>
                <div className="serch-add">
                    <div className="serch-box">
                        <input onChange={(e) => { setSerchdData(e.target.value) }} placeholder="Serch gigs" type="text" name="" id="" />
                    </div>
                    <div className="add-btn">
                        <div className="btn">
                            + Add New Gig
                        </div>
                    </div>
                </div>
                <div className="view">
                    <h6 className="pageName">{show == "all" ? "All Gigs" : show == "active" ? "Active Gigs" : "Un Approvel Gigs"}</h6>
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
                                <th className="views">Views</th>
                                <th className="orders">Orders</th>
                                <th className="earnings">Earn</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                show == "all" &&
                                data.map((val) => {
                                    return <tr>
                                        <td>{val.title}</td>
                                        <td>{val.views}</td>
                                        <td>{val.orders}</td>
                                        <td>{val.earning}</td>
                                        <td onClick={() => { setShowModal(!showModal) }}>...</td>
                                    </tr>
                                })
                            }
                            {
                                show == "active" &&
                                data.filter((data) => { return data.status == "active" }).map((val) => {
                                    return <tr>
                                        <td>{val.title}</td>
                                        <td>{val.views}</td>
                                        <td>{val.orders}</td>
                                        <td>{val.earning}</td>
                                        <td onClick={() => { setShowModal(!showModal) }}>...</td>
                                    </tr>
                                })
                            }
                            {
                                show == "waiting" &&
                                data.filter((data) => { return data.status == "approval waiting" }).map((val) => {
                                    return <tr>
                                        <td>{val.title}</td>
                                        <td>{val.views}</td>
                                        <td>{val.orders}</td>
                                        <td>{val.earning}</td>
                                        <td onClick={() => { setShowModal(!showModal) }}>...</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>:<div className="card-view">
                    {
                        show == "all" && 
                        data.map((data)=>{return <GigCard data={data}/>})
                    }
                    {
                        show == "active" &&
                        data.filter((data) => { return data.status == "active" }).map((data)=>{return <GigCard data={data}/>})
                    }
                    {
                        show == "waiting" &&
                        data.filter((data) => { return data.status == "approval waiting" }).map((data)=>{return <GigCard data={data}/>})
                    }
                </div>
                }
                
            </div>
        </>
    )
}

export default Gigs;