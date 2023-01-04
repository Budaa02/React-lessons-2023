
import './App.css';

import ProductFunc from "./productFunc"
import products from "./seed"
import Product from "./product"
// function Profile({img, name, age, hobby, heigth} ) {
//   // console.log("props", props);

//   // const {img, name, age, hobby, heigth} = props;
//   return (
//     <div className="profile">
//       <img src={img} alt="people" />
//       <p>name: {name} </p>
//       <p>age: {age} </p>
//       <p>hobby: {hobby}</p>
//       <h1>heigth: {heigth}</h1>
//     </div>
//   )
// }




function App() {
  // const user = {
  //   img: "img/person-1.png",
  //   name: "John Smith",
  //   age:20,
  //   hobby: "Frontend Developer"
  // }
  for (let i = 0; i < products.length; i++){
    console.log(products[i]);
    <ProductFunc 
    title={products[i].title}
    />
  }

  const productList = products.map((product) => {
    console.log(product);
    return <ProductFunc
      title={product.title}
      submitterAvatarUrl={product.submitterAvatarUrl}
      description={product.description}
      id={product.id}
      votes={product.votes}
      url={product.url}
      productImageUrl={product.productImageUrl}
    />
  })
  const productList2 = products.map((product) => {
    return <Product
      title={product.title}
      submitterAvatarUrl={product.submitterAvatarUrl}
      description={product.description}
      id={product.id}
      votes={product.votes}
      url={product.url}
      productImageUrl={product.productImageUrl}
    />
  })
  return (
    <div className="App">
      {/* <Product/>
     <Productfunc/> */}
      {/* <Productfunc/> */}
      {productList}
      {/* {productList2} */}
      {/* <Profile
      img="https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format"
      name="John Smith"
      age={20}
      hobby="auto_chess"
      heigth={188}
      
      />
      <Profile
      img="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
      name="Linda xx"
      age={27}
      hobby="walk"
      heigth={190}
      /> */}
    </div>
  );
}

export default App;
