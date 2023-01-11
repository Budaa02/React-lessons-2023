import "./App.css";
import products from "./seed";
import ProductFunc from "./components/ProductFunc";
import { useState } from "react";



function App(props) {
  // 1. create react state called "productList" variable in app component
  // 2. create also changing function for productList variable in App component
  // 3. initialize productList  state variable with products seed in App component
  // 4. change product components products into productList variable in App component
  const [productList1, setProductList1] = useState(products)


  function handleProductUpVote(productId) {
    console.log("upvoted", productId)
    const foundProduct = products.filter(product => {
      if (product.id == productId) {
        return (
          product
        )
      }
    })
    console.log(foundProduct[0].votes)
    foundProduct[0].votes = foundProduct[0].votes + 1;

    /// change votes in product array 

    const mewProducts = productList1.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      } else {
        return product;
      }
    })
    console.log(mewProducts);
    setProductList1(mewProducts)
  }
  const productList = products.map((product) => {
    console.log(product);

    return (
      <ProductFunc
        title={product.title}
        id={product.id}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={handleProductUpVote}
      />
    );
  });

  return (
    <div className="container">
      <h1>Popular Product</h1><hr></hr>
      <div id="content"></div>
      {productList}
      {/* <h1>{productList}</h1>
      <hr></hr>
      <div>
        <div>
          <img />
        </div>
        <div>
          <a></a>
        </div>
        <div>
          <a></a>
          <p></p>
        </div>
        <div>
          <span></span>
          <img />
        </div>
        <span></span>
      </div> */}
    </div>
  );
}

export default App;
