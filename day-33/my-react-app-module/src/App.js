
import './App.css';
import products from './seed';
import ProductFunc from './components/ProductFunc';


function App() {

  const productList = products.map((product) => {
    console.log(product)
    return (
      <ProductFunc
        title={product.title}
        id={product.id}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
      />)
  })
  return (
    <div><h1>
      Hello</h1>
      { productList }</div>
    
  );
}

export default App;
