import logo from './logo.svg';
import './App.css';


import User from "./components/User"
function App() {

  // Promise 
  const myPromise =  new Promise((resolve, rejected) =>{

    let isPlaying = true;
    if(isPlaying) {
      return resolve(isPlaying)
    } else {
      return rejected(isPlaying)
    }
    
  })
  // console.log(myPromise);
  // const id = 45;
  // const URL = `https://api.jinkan.moe/v4/anime/${id}`

  // const fetchResult = fetch(URL);
  // fetchResult.then(result => {
  //   console.log(result);
  // })
  // console.log(fetchResult)
  // const fetchedResult = await fetch(URL);
  // console.log(fetchedResult)
  // const JSONResult = await fetchedResult.json()
  // console.log(JSONResult);







  // callback Function 

  // function khuslen (callbackFunction) {
  //   let a = 4;
  //   callbackFunction(a)
  
  // }

  // function forex(param) {
  //   console.log(param + 4)
  // }

  // khuslen(forex)

  return (
    <div className="App">
        <h1>Day-40 - React States</h1>
        <User/>
    </div>
  );
}

export default App;
