import React from 'react';

// const hotels = {
//   'New York': ['Hotel A', 'Hotel B', 'Hotel C'],
//   'Los Angeles': ['Hotel X', 'Hotel Y', 'Hotel Z'],
//   'Chicago': ['Hotel 1', 'Hotel 2', 'Hotel 3'],
//   'San Francisco': ['Hotel Alpha', 'Hotel Beta', 'Hotel Gamma'],
// };


function ChooseHotel({ location, setHotel }) {
    // const availableHotels = hotels[location] || [];
    const availableHotels = ['Juxury','Premium','Budget','Economy']

  return (
    <div className="choose-hotel">
      <h2>Choose Your Hotel in {location}</h2>
      <select onChange={(e) => setHotel(e.target.value)} defaultValue="">
        <option value="" disabled>Select a hotel</option>
        {availableHotels.map((hotel, index) => (
          <option key={index} value={hotel}>
            {hotel}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChooseHotel;
