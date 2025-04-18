import "./Gigs.css"
import Nav from "./Nav";
const Earnings = () =>{
    return(
        <>
            <div className="gigs">
                <div className="filters">
                    <div className="filters1">
                        <div className="count">$ 20,000</div>
                        <div className="filter-name"><h6>All Earnings</h6></div>
                    </div>
                    <div className="filters2">
                        <div className="count">$ 4000</div>
                        <div className="filter-name" ><h6>Clearence Pending</h6></div>
                    </div>
                    <div className="filters3">
                        <div className="count">$ 60,000</div>
                        <div className="filter-name"><h6>Completed Gigs</h6></div>
                    </div>
                </div>
                <div className="serch-add">
                    <div style={{width:"100%" }} className="serch-box">
                        <input placeholder="Serch gigs" type="text" name="" id="" />
                    </div>
                </div>
                <div className="table">
                    <table>
                        <thead >
                            <tr>
                                <th className="tittle">Date</th>
                                <th className="views">Job</th>
                                <th className="orders">Amount</th>
                                <th className="earnings">Status</th>
                                <th className="actions">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jan 15</td>
                                <td>Web Design</td>
                                <td>5000</td>
                                <td>Pending</td>
                                <td className="status">
                                    ...
                                </td>
                            </tr>
                            <tr>
                                <td>Jan 15</td>
                                <td>React</td>
                                <td>5000</td>
                                <td>Pending</td>
                                <td className="status">
                                    ...
                                </td>
                            </tr>
                            <tr>
                                <td>Jan 15</td>
                                <td>Figma to Psd</td>
                                <td>5000</td>
                                <td>Pending</td>
                                <td className="status">
                                    ...
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Earnings;