import { useEffect, useState } from "react";

export default function Exercises() {
  //   const [numbers, setNumbers] = useState([]);
  let array = [1, 2, 3, 4, 1];

  //   useEffect(() => {
  //     console.log(numbers);
  //     findNumberCount(array);
  //     // console.log(numbers);
  //   }, []);
  function filterNumbers(arr, number) {
    return arr.filter((a) => a === number);
  }

  function findNumberCount(arr) {
    let newArr = [];
    for (let i = 0; i < 10; i++) {
      const result = filterNumbers(arr, i);
      const resultObject = {
        i: result.length,
      };
      newArr = [...newArr, resultObject];
      //   console.log(result);
      //   console.log("-------");
    }
    return newArr;
  }

  const numbers = findNumberCount(array);
  console.log(numbers);
  // 0 - 0 / 1 - 2/2 - 1.../ 9 - 0
  return (
    <div>
      <h1>Exercises</h1>
      {numbers &&
        numbers.map((n, index) => {
          return (
            <div key={index}>
              <p>
                {" "}
                {index} {n.i}
              </p>
            </div>
          );
        })}
    </div>
  );
}
