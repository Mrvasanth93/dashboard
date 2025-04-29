import "./Card.css"
const Card = (data) => {
    return (
        <>
            <div className="card">
                <div className="top">
                    <div className="tittle">{data.title}</div>
                    <div className="views">  🔖</div>
                </div>
                <div className="middle">
                    <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti odio voluptas iure quis at exercitationem.</div>
                </div>
                <div className="middle-1">
                    <h5>No of {data.views} peoples views in gigs </h5>
                    <h5>No of {data.orders} orders in the gigs</h5>
                    <h5></h5>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left-bottom">
                        <h3>$280/hr</h3>
                        <h5>You Have Earn ${data.earning} in this order</h5>
                    </div>
                    <div className="right-bottom">
                        <div className="update-btn">Update </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;