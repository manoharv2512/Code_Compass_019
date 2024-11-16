import React from 'react';

const cabTypes = ['Economy', 'Premium', 'Luxury'];

function ChooseCab({ setCab }) {
  return (
    <div className="choose-cab">
      <h2>Choose Your Cab</h2>
      <select onChange={(e) => setCab(e.target.value)} defaultValue="">
        <option value="" disabled>Select a cab type</option>
        {cabTypes.map((cab, index) => (
          <option key={index} value={cab}>
            {cab}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChooseCab;
