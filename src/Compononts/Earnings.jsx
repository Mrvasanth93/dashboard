import { useEffect, useState } from "react";
import { earningData } from "./DummyData";
import "./Gigs.css"
import { EarningModal } from "./Modals/UpdateModal";
const Earnings = () => {
    const [data, setData] = useState(earningData)
    const [showModal, setShowModal] = useState();
    const [show, setShow] = useState("all")
    const [total, setTotal] = useState(0);
    const [pending, setPending] = useState(0);
    const [withdrawn, setWithdrawn] = useState(0);
    const [serchData, setSerchdData] = useState();
    /*const [pagePerItem, setPagePerItem] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(data.length / pagePerItem)
    const handlePagePerItem = (e) => {
        setPagePerItem(parseInt(e.target.value))
        setCurrentPage(1)
    }
    const handleChangePage = (page) => {
        setCurrentPage(page)
    }
    const start = (currentPage - 1) * pagePerItem;
    const end = start - pagePerItem;
    useEffect(() => {
        console.log(start + " " + end);
        
        setData(data.slice(start,end))
    },[pagePerItem,currentPage])*/
    useEffect(() => {
        handleDataModify(serchData);
    }, [serchData])
    const handleDataModify = (serchData) => {
        if (serchData == undefined || serchData == "" || serchData == null) {
            setData(earningData)
            console.log(data);

        }
        else {
            setData(data.filter((val) => { return val.job.toLowerCase().includes(serchData) }));
        }
    }
    const calculatemoney = () => {
        data.map((val) => { return val.amount }).forEach((val) => { setTotal((data) => { return val + data }) });
        data.filter((data) => data.status != "Withdrawn").map((val) => { return val.amount }).forEach((val) => { setPending((data) => { return data + val }) })
        data.filter((data) => data.status != "Pending").map((val) => { return val.amount }).forEach((val) => { setWithdrawn((data) => { return data + val }) });
    }
    useEffect(() => {
        calculatemoney();
    }, [])
    useEffect(() => {
        if (showModal == false) {
            setShowModal(true)
        }
    }, [showModal])
    return (
        <>
            {
                showModal && <EarningModal />
            }
            <div className="gigs">
                <div className="filters">
                    <div onClick={() => { setShow("all") }} className="filters1">
                        <div className="count">$ {total}</div>
                        <div className="filter-name"><h6>Total Earnings</h6></div>
                    </div>
                    <div onClick={() => { setShow("pending") }} className="filters2">
                        <div className="count">$ {pending}</div>
                        <div className="filter-name" ><h6>Pending Amounts</h6></div>
                    </div>
                    <div onClick={() => { setShow("withdrawn") }} className="filters3">
                        <div className="count">$ {withdrawn}</div>
                        <div className="filter-name"><h6>Withdrawn Amounts</h6></div>
                    </div>
                </div>
                <div className="serch-add">
                    <div style={{ width: "100%" }} className="serch-box">
                        <input onChange={(e) => { setSerchdData(e.target.value) }} placeholder="Serch gigs" type="text" name="" id="" />
                    </div>
                </div>
                <h6 className="pageName">{show == "all" ? "Total Earnings" : show == "pending" ? "Pending Amounts" : "Withdrawn Amounts"}</h6>
                <div className="table">
                    <table>
                        <thead >
                            <tr>
                                <th className="tittle">Date</th>
                                <th className="views">Job</th>
                                <th className="orders">Amount</th>
                                <th className="earnings">Status</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                show == "all" &&
                                data.map((val) => {
                                    return <tr>
                                        <td>{val.date}</td>
                                        <td>{val.job}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.status.toLowerCase()}
                                        </td>
                                        <td onClick={() => { setShowModal(!showModal) }} className="status">
                                            ...
                                        </td>
                                    </tr>
                                })
                            }
                            {
                                show == "pending" &&
                                data.filter((data) => data.status != "Withdrawn").map((val) => {
                                    return <tr>
                                        <td>{val.date}</td>
                                        <td>{val.job}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.status}
                                        </td>
                                        <td onClick={() => { setShowModal(!showModal) }} className="status">
                                            ...
                                        </td>
                                    </tr>
                                })
                            }
                            {
                                show == "withdrawn" &&
                                data.filter((data) => data.status != "Pending").map((val) => {
                                    return <tr>
                                        <td>{val.date}</td>
                                        <td>{val.job}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.status}
                                        </td>
                                        <td onClick={() => { setShowModal(!showModal) }} className="status">
                                            ...
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Earnings;