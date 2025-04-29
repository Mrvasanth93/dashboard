import { useLocation, useNavigate } from "react-router-dom";
import "./Nav.css"
import { useEffect, useRef } from "react";
const Nav = () =>{
    const navigate = useNavigate();
    const link1 = useRef();
    const link2 = useRef();
    const link3 = useRef();
    const link4 = useRef();
    const location = useLocation();
    const handleBg = (data,e) =>{
        if(data == "link1" || location.pathname == "/dashboard"){
            link1.current.style.borderBottom = "2px solid rgba(128, 0, 128, 0.575)";
            link2.current.style.borderBottom = "";
            link3.current.style.borderBottom = "";
            link4.current.style.borderBottom = "";
            link1.current.style.color = "purple";
            link2.current.style.color = "black";
            link3.current.style.color = "black";
            link4.current.style.color = "black";
        }
        if(data == "link2" || location.pathname == "/dashboard/gigs"){
            link1.current.style.borderBottom = "";
            link2.current.style.borderBottom = "2px solid rgba(128, 0, 128, 0.575)";
            link3.current.style.borderBottom = "";
            link4.current.style.borderBottom = "";
            link1.current.style.color = "black";
            link2.current.style.color = "purple";
            link3.current.style.color = "black";
            link4.current.style.color = "black";
        }
        if(data == 'link3' || location.pathname == "/dashboard/orders"){
            link1.current.style.borderBottom = "";
            link2.current.style.borderBottom = "";
            link3.current.style.borderBottom = "2px solid rgba(128, 0, 128, 0.575)";
            link4.current.style.borderBottom = "";
            link1.current.style.color = "black";
            link2.current.style.color = "black";
            link3.current.style.color = "purple";
            link4.current.style.color = "black";
        }
        if(data == "link4" || location.pathname == "/dashboard/earnings"){
            link1.current.style.borderBottom = "";
            link2.current.style.borderBottom = "";
            link3.current.style.borderBottom = "";
            link4.current.style.borderBottom = "2px solid rgba(128, 0, 128, 0.575)";
            link1.current.style.color = "black";
            link2.current.style.color = "black";
            link3.current.style.color = "black";
            link4.current.style.color = "purple";
        }
    };
    useEffect(()=>{
        link1.current.style.borderBottom  = "2px solid rgba(128, 0, 128, 0.575)";
        link1.current.style.color = "purple";
        console.log(link1.current.style);
        
    },[])
    useEffect(()=>{
        handleBg();
    })
    return(
        <>
            <div className="nav">
                <div className="nav-top">
                    <div>Freelancing.</div>
                    <div className="profile">
                        Logout
                    </div>
                </div>
                <div className="nav-bottom-1">
                    <div>
                        <div ref={link1} onClick={(e)=>{navigate("/dashboard"); handleBg("link1",e)}}>Dashboard</div>
                        <div ref={link2} onClick={(e)=>{navigate("/dashboard/gigs"); handleBg("link2",e)}}>Gigs</div>
                        <div ref={link3} onClick={(e)=>{navigate("/dashboard/orders"); handleBg("link3",e)}}>Orders</div>
                        <div ref={link4} onClick={(e)=>{navigate("/dashboard/earnings"); handleBg("link4",e)}}>Earnings</div>
                    </div>
                </div>
                <div className="nav-bottom-2">
                    <div>Dashboard</div>
                </div>
            </div>
        </>
    )
}
export default Nav ;