// // DatePage.js
// import React, { useState } from "react";
// import "./DatePage.css"; // Create a separate CSS file for styling if needed

// function DatePage({ onContinue }) {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleContinueClick = () => {
//     if (!startDate || !endDate) {
//       alert("Please fill in both the start date and end date.");
//     } else {
//       onContinue();
//     }
//   };

//   return (
//     <div className="card">
//       <div className="header">
//         <img src="trips.svg" alt="Travel Icon" className="image" />
//         <h2>Let's set up your trip!</h2>
//         <p>What have you decided?</p>
//       </div>

//       <div className="options">
//         {["Dates"].map((option) => (
//           <button
//             key={option}
//             className={`option ${selectedOption === option ? "selected" : ""}`}
//             onClick={() => handleOptionSelect(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       {selectedOption === "Dates" && (
//         <div className="date-selection">
//           <h3>Dates</h3>
//           <div className="date-inputs">
//             <div>
//               <label>Start date</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//               />
//             </div>
//             <div>
//               <label>End date</label>
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <button className="continue-button" onClick={handleContinueClick}>
//         Continue
//       </button>
//     </div>
//   );
// }

// export default DatePage;

// DatePage.js
// import React, { useState } from "react";
// import { DatePicker } from "rsuite";
// import "rsuite/dist/rsuite.min.css"; // RSuite styles
// import "./DatePage.css";

// function DatePage({ onContinue }) {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleContinueClick = () => {
//     if (!startDate || !endDate) {
//       alert("Please fill in both the start date and end date.");
//     } else {
//       onContinue();
//     }
//   };

//   return (
//     <div className="card">
//       <div className="header">
//         <img src="trips.svg" alt="Travel Icon" className="image" />
//         <h2>Let's set up your trip!</h2>
//         <p>What have you decided?</p>
//       </div>

//       <div className="options">
//         {["Dates"].map((option) => (
//           <button
//             key={option}
//             className={`option ${selectedOption === option ? "selected" : ""}`}
//             onClick={() => handleOptionSelect(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       {selectedOption === "Dates" && (
//         <div className="date-selection">
//           <h3>Dates</h3>
//           <div className="date-inputs">
//             <div>
//               <label>Start date</label>
//               <DatePicker
//                 value={startDate}
//                 onChange={(value) => setStartDate(value)}
//                 placeholder="Select start date"
//                 format="yyyy-MM-dd"
//                 style={{ width: 200 }}
//               />
//             </div>
//             <div>
//               <label>End date</label>
//               <DatePicker
//                 value={endDate}
//                 onChange={(value) => setEndDate(value)}
//                 placeholder="Select end date"
//                 format="dd-MM-yyyy"
//                 style={{ width: 200 }}
//                 disabledDate={(date) => date < startDate} // Prevents end date from being before start date
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <button className="continue-button" onClick={handleContinueClick}>
//         Continue
//       </button>
//     </div>
//   );
// }

// export default DatePage;
// DatePage.js
import React, { useState } from "react";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css"; // RSuite styles
import "./DatePage.css";

function DatePage({ onContinue }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false); // Track if the calendar is open

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinueClick = () => {
    if (!startDate || !endDate) {
      alert("Please fill in both the start date and end date.");
    } else {
      onContinue();
    }
  };

  const handleCalendarOpen = () => {
    setCalendarOpen(true);
  };

  const handleCalendarClose = () => {
    setCalendarOpen(false);
  };

  return (
    <div className="card">
      <div className="header">
        <img src="trips.svg" alt="Travel Icon" className="image" />
        <h2>Let's set up your trip!</h2>
        <p>What have you decided?</p>
      </div>

      <div className="options">
        {["Dates"].map((option) => (
          <button
            key={option}
            className={`option ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedOption === "Dates" && (
        <div className="date-selection">
          <h3>Dates</h3>
          <div className="date-inputs">
            <div>
              <label>Start date</label>
              <DatePicker
                value={startDate}
                onChange={(value) => setStartDate(value)}
                placeholder="Select start date"
                format="yyyy-MM-dd"
                style={{ width: 200 }}
                onOpen={handleCalendarOpen} // Trigger when calendar opens
                onClose={handleCalendarClose} // Trigger when calendar closes
              />
            </div>
            <div>
              <label>End date</label>
              <DatePicker
                value={endDate}
                onChange={(value) => setEndDate(value)}
                placeholder="Select end date"
                format="yyyy-MM-dd"
                style={{ width: 200 }}
                shouldDisableDate={(date) => date < startDate} // Use shouldDisableDate instead of disabledDate
                onOpen={handleCalendarOpen} // Trigger when calendar opens
                onClose={handleCalendarClose} // Trigger when calendar closes
              />
            </div>
          </div>
        </div>
      )}

      <button
        className="continue-button"
        onClick={handleContinueClick}
      >
        Continue
      </button>
    </div>
  );
}

export default DatePage;
