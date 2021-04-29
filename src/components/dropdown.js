// import React, { useState } from "react";

// function CharacterDropDown() {
//   const [items] = useState([
//     { label: "Select E-Mail Address", value: "" },
//     { label: "Atlanta", value: "atlantadispatch@guardianfueltech.com" },
//     { label: "Birmingham", value: "birminghamdispatch@guardianfueltech.com" },
//     { label: "Charlotte", value: "charlottedispatch@guardianfueltech.com" },
//     { label: "Columbia", value: "columbiadispatch@guardianfueltech.com" },
//     {
//       label: "Fort Lauderdale",
//       value: "miramardispatch@guardianfueltech.com",
//     },
//     { label: "Fort Myers", value: "ftmyersdispatch@guardianfueltech.com" },
//     { label: "Jacksonville", value: "jaxdispatch@guardianfueltech.com" },
//     { label: "Knoxville", value: "knoxdispatch@guardianfueltech.com" },
//     { label: "Pensacola", value: "gulfcoastdispatch@guardianfueltech.com" },
//     { label: "Raleigh", value: "raleighdispatch@guardianfueltech.com" },
//     { label: "Sanford", value: "sanforddispatch@guardianfueltech.com" },

//     { label: "Savannah", value: "savannahdispatch@guardianfueltech.com" },
//     { label: "Tallahassee", value: "tallydispatch@guardianfueltech.com" },
//     { label: "Tampa", value: "tampadispatch@guardianfueltech.com" },
//   ]);

//   const handleChange = (e) => {
//     e.preventDefault();
//     sessionStorage.setItem("email", e.target.value);
//   };
//   return (
//     <select onChange={handleChange}>
//       {items.map((item) => (
//         <option key={item.value} value={item.value}>
//           {item.label}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default CharacterDropDown;
