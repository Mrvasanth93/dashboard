import "./Gigs.css"
import Nav from "./Nav";
const Gigs = () =>{
    return(
        <>
            <div className="gigs">
                <div className="filters">
                    <div className="filters1">
                        <div className="count">12</div>
                        <div className="filter-name"><h6>All Gigs</h6></div>
                    </div>
                    <div className="filters2">
                        <div className="count">12</div>
                        <div className="filter-name" ><h6>Active Gigs</h6></div>
                    </div>
                    <div className="filters3">
                        <div className="count">12</div>
                        <div className="filter-name"><h6>Completed Gigs</h6></div>
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
                                <th className="earnings">Earnings</th>
                                <th className="status">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Web design</td>
                                <td>20</td>
                                <td>7</td>
                                <td>30000</td>
                                <td className="status">
                                    <select name="" id="">
                                        <option value="">Active</option>
                                        <option value="">Completed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Figma to psd </td>
                                <td>20</td>
                                <td>7</td>
                                <td>30000</td>
                                <td className="status">
                                    <select name="" id="">
                                        <option value="">Active</option>
                                        <option value="">Completed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Web design</td>
                                <td>20</td>
                                <td>7</td>
                                <td>30000</td>
                                <td className="status">
                                    <select name="" id="">
                                        <option value="">Active</option>
                                        <option value="">Completed</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Gigs;