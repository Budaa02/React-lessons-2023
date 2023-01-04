
import './App.css';

// import HelloWorld from "./helloworld";
import Product from './Product';
import Product1 from './Product1';
import Product2 from './Product2';
import Product4 from './Product4';
import ProductFunc from './productFunc';
import ProductFunc1 from './productFunc1';
import ProductFunc2 from './productFunc2';
import ProductFunc3 from './productFunc3';

function App() {

  // const name = "Tsogtoo"
  // const element = <h1>Hello , {name}</h1>

  // const user = {
  //   firstName: "Harper",
  //   lastName: "Perez"
  // };

  // function formatName(user){
  //   return user.firstName + "" + user.lastName;
  // };

  const customStyle = {
    color: "#2ecc71",
    fontSize: "26px"
  };
  const elements = (<h1 style={customStyle}>Hello, Teacher</h1>)
  const secondElement = (<p className="my-text">My Next Text</p>)

  // const elements = (
  //   <h1>
  //     Hello , {formatName(user)}!
  //   </h1>
  // );
  
  return (
    <div>
      <h1>Popular Products</h1>
      {/* {elements} */}
      {/* {secondElement} */}
      {/* <HelloWorld/> */}
      <Product/>
      <Product1 />
      <Product2 />
      <Product4 />
      <ProductFunc/>
      <ProductFunc1/>
      <ProductFunc2/>
      <ProductFunc3/>
    </div> 
     
      
     
  );
}

export default App;
