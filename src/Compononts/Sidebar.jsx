import "./Sidebar.css"
import menuIcon from "../assets/icons8-menu-50.png";
import dashboardIcon from "../assets/icons8-dashboard-24 (1).png";
import gigsIcon from "../assets/icons8-notes-30.png";
import earningsIcon from "../assets/icons8-earnings-68.png";
import ordersIcon from "../assets/icons8-box-64.png";
import close from "../assets/icons8-close-30.png"
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = ()=>{
    const navigate = useNavigate();
    const [isActive,setIsActive] = useState(false);
    const sideBar = useRef();
    const menubtn = useRef();
    const sideBarClassName = "sidebar"
    const handleSideBar = () =>{
        if(isActive == true){
            sideBar.current.style.width = "80px";
        }
        else{
            sideBar.current.style.width = "250px";
            sideBar.current.style.justifyContent = "right"
        }
        setIsActive(!isActive)
    }
    return(
        <>
            <div ref={sideBar} className="sidebar">
                <div className="menu-btn">
                    <div ref={menubtn} onClick={()=>{handleSideBar()}}><img src={isActive ? close : menuIcon} alt="" /></div>
                </div>
                <div className="sidebar-btns">
                    <div onClick={()=>{navigate("/")}} className="btn">
                        <div className="icon">
                            <img src={dashboardIcon} alt="" />
                        </div>
                        <h1 className="txt" >{isActive && "Dash Board"}</h1>
                    </div>
                    <div onClick={()=>{navigate("/gigs")}} className="btn">
                        <div className="icon">
                            <img src={gigsIcon} alt="" />
                        </div>
                        <h1 className="txt">{isActive && "Gigs"}</h1>
                    </div>
                    <div onClick={()=>{navigate("/orders")}} className="btn">
                        <div className="icon">
                            <img src={ordersIcon} alt="" />
                        </div>
                        <h1 className="txt">{isActive && "My Orders"}</h1>
                    </div>
                    <div onClick={()=>{navigate("/earnings")}} className="btn">
                        <div className="icon">
                            <img src={earningsIcon} alt="" />
                        </div>
                        <h1 className="txt">{isActive && "Earnings"}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;