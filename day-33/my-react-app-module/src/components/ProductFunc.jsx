
function ProductFunc(props) {
    console.log(props);
    return (
        <div className="item ">
            <div className="image ">
                <img src={props.productImageUrl} />
            </div>
            <div className="middle aligned content my-2 p-3">
                <div className="header">
                    <a>
                        <i className="large caret up icon"/>
                    </a>
                    {props.votes}
                </div>
                <div>
                    <a href={props.url}>{props.title}</a>
                    <p>{props.description}</p>
                </div>
                <div className="footer">
                    <span>Submitted by:</span>
                    <img className="ui avatar image" src={props.submitterAvatarUrl}/>
                </div>

            </div>
        </div>

    )
}


export default ProductFunc








