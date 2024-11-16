


// // App.js
// import React, { useState } from "react";
// import "./App.css";
// import FinishingTouches from "./components/LastPage";

// function App() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [showFinishingTouches, setShowFinishingTouches] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleContinue = () => {
//     // Check if both dates are filled
//     if (!startDate || !endDate) {
//       alert("Please fill in both the start date and end date.");
//     } else {
//       setShowFinishingTouches(true);
//     }
//   };

//   const handleBack = () => {
//     setShowFinishingTouches(false);
//   };

//   return (
//     <div className="container">
//       {!showFinishingTouches ? (
//         <div className="card">
//           <div className="header">
//             <img src="trips.svg" alt="Travel Icon" className="image" />
//             <h2>Let's set up your trip!</h2>
//             <p>What have you decided?</p>
//           </div>

//           <div className="options">
//             {["Dates"].map((option) => (
//               <button
//                 key={option}
//                 className={`option ${selectedOption === option ? "selected" : ""}`}
//                 onClick={() => handleOptionSelect(option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>

//           {selectedOption === "Dates" && (
//             <div className="date-selection">
//               <h3>Dates</h3>
//               <div className="date-inputs">
//                 <div>
//                   <label>Start date</label>
//                   <input
//                     type="date"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label>End date</label>
//                   <input
//                     type="date"
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           <button
//             className="continue-button"
//             onClick={handleContinue}
//           >
//             Continue
//           </button>
//         </div>
//       ) : (
//         <FinishingTouches onBack={handleBack} />
//       )}
//     </div>
//   );
// }

// export default App;

// App.js
import React, { useState } from "react";
import "./App.css";
import DatePage from "./components/DatesPage";
import FinishingTouches from "./components/TripDiscription";

function App() {
  const [showFinishingTouches, setShowFinishingTouches] = useState(false);

  const handleContinue = () => {
    setShowFinishingTouches(true);
  };

  const handleBack = () => {
    setShowFinishingTouches(false);
  };

  return (
    <div className="container">
      {!showFinishingTouches ? (
        <DatePage onContinue={handleContinue} />
      ) : (
        <FinishingTouches onBack={handleBack} />
      )}
    </div>
  );
}

export default App;


