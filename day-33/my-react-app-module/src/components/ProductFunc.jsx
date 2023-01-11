import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import { render } from "react-dom";



function ProductFunc(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const [handleProductUpVote, sethandleProductUpVote] = useState(0)
    console.log(props);
    return (
        <div className="item ">
            <div className="image ">
                <img src={props.productImageUrl} />
            </div>
            <div className="middle aligned content my-2 p-3">
                <div className="header">
                    <a
                        onClick={() => props.onVote(props.id)}
                    >
                        <img src={props.productImageUrl} className="w-25" />
                    </a>
                    {props.votes}
                </div>
                <div>
                    <a href={props.url}>{props.title}</a>
                    <p>{props.description}</p>
                </div>
                <div className="footer">
                    <span>Submitted by:</span>
                    <img className="ui avatar image" src={props.submitterAvatarUrl} />

                </div>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />

            </div>
        </div>

    )
}


export default ProductFunc








