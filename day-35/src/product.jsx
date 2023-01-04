import React from "react";

import logo from "./logo.svg";

class Product extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="r1">
                    <img className="rounded-5"  src={this.props.productImageUrl} />
                    <div>
                        <p><img className='lg ' src={this.props.submitterAvatarUrl}/><strong>55</strong></p>
                        <a href="#">{this.props.title}</a>
                        <p>{this.props.title}</p>
                        <br/>
                    
                        <p>Submitted by:

                        <img className='lg' src={this.props.submitterAvatarUrl}/>
                        {/* <img className='lg' src="0-circle-fill.svg"/> */}
                        </p>

                    </div>
                    
                </div>
            </div>
        )   
    }
}

export default Product ;