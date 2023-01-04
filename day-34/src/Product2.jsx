import React from "react";
import logo from "./logo.svg";

class Product2 extends React.Component {
    render(){
        return(
            <div className="r1">
                <img className="rounded-5"  src="https://t4.ftcdn.net/jpg/02/86/30/95/360_F_286309561_hIdCmag26Vm2SGWstDm6Ch0Itkta2TDa.jpg" alt=""></img>
                 <div>
                      <p><img className='lg ' src={logo}/><strong>55</strong></p>
                     <a href="#">Haught or Naight</a>
                     <p>High-minded or absent-minded?You decide</p>
                    <br/>
                
                    <p>Submitted by:

                     <img className='lg' src={logo}/>
                    {/* <img className='lg' src="0-circle-fill.svg"/> */}
                    </p>

                </div>
                
            </div>
        )
    }
}

export default Product2;