import "./App.css";
import products from "./seed";
import ProductFunc from "./components/ProductFunc";

function App(props) {
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
