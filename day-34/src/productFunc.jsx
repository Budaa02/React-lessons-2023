import logo from "./logo.svg";

function ProductFunc(){
    return(
        <div className="container">
                <div className="r1">
                    <img className="rounded-5"  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*" alt=""></img>
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
            </div>
    );
}

export default ProductFunc;