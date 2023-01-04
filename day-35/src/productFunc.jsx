import logo from "./logo.svg";

function ProductFunc(props) {
    console.log(props);
    return (
        <div className="item">
            <h1>{props.title}</h1>
            <hr></hr>
            <div>
                <div className="header">
                    <img src={props.productImageUrl} />
                    <div class="header-append">
                        <img src={props.productImageUrl} />
                        <p>{props.votes}</p>
                    </div>
                <p>{props.id}</p>
                <p>{props.description}</p>
                </div>
                <div>
                    <p>{props.id}</p>
                    <img src={props.submitterAvatarUrl} />
                </div>
            </div>

        </div>
    );
}

export default ProductFunc;