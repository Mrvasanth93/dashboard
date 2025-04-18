import { useNavigate } from "react-router-dom";
import "./Nav.css"
const Nav = () =>{
    const navigate = useNavigate();
    return(
        <>
            <div className="nav">
                <div className="nav-top">
                    <div>Admin dashboard</div>
                    <div className="profile">
                        Name
                    </div>
                </div>
                <div className="nav-bottom-1">
                    <div>
                        <div onClick={()=>{navigate("/dashboard")}}>Dashboard</div>
                        <div onClick={()=>{navigate("/dashboard/gigs")}}>Gigs</div>
                        <div onClick={()=>{navigate("/dashboard/orders")}}>My Orders</div>
                        <div onClick={()=>{navigate("/dashboard/earnings")}}>Earnings</div>
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