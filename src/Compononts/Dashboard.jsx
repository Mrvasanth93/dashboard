import "./Dashboard.css"
import Nav from "./Nav";
const Dashboard = () => {
    return (
        <>
            <div className="gigs">
                <div className="filters">
                    <div className="filters1">
                        <div className="count">$ 20,000</div>
                        <div className="filter-name" ><h6>Total Earnings</h6></div>
                    </div>
                </div>
                <div className="filters2">
                    <div className="count">20</div>
                    <div className="filter-name"><h6>Total Gigs</h6></div>

                    <div className="filters3">
                        <div className="count">18</div>
                        <div className="filter-name"><h6>Total Orders</h6></div>
                    </div>
                </div>
                <h5>Recent updates</h5>
                <div className="updates">
                    <div className="update">Hello every One</div>
                    <div className="update">Hello Every One</div>
                    <div className="update">Hello Every One</div>
                    <div className="update">Hello Every One</div>
                    <div className="update">Hello Every One</div>
                    <div className="update">Hello Every One</div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;