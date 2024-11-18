import React from 'react';

const locations = ['Uttarakhand', 'Goa', 'Rajasthan', 'Sikkim', 'Jammu & Kashmir',"Assam"];

function ChooseLocation({ setLocation }) {
  return (
    <div className="choose-location">
      <h2>Choose Your Location</h2>
      <select onChange={(e) => setLocation(e.target.value)} defaultValue="">
        <option value="" disabled>Select a location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChooseLocation;
