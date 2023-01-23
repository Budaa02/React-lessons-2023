// import { useState } from "react";

// export default function Input() {
//   const [state, setState] = useState("");

//   function handleChange(e) {
//     e.preventDefault();
//     console.log(e.target.value);
//     setState(e.target.value);
//   }
//   return (
//     <div>
//       <label>First Input:</label>
//       <input
//         type="text"
//         name="first"
//         value={state}
//         onChange={handleChange}
//       ></input>
//       <label>Second Input:</label>
//       <input
//         type="text"
//         name="second"
//         value={state}
//         onChange={handleChange}
//       ></input>
//     </div>
//   );
// }
// bagsh hiisen
export default function Input({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
