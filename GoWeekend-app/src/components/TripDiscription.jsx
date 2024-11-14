

// FinishingTouches.js
import React, { useState } from "react";
import "./TripDiscription.css";

function FinishingTouches({ onBack }) {
  const [tripName, setTripName] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedTravelers, setEstimatedTravelers] = useState("");

  return (
   
    <div className="finishing-touches">
      <div className="header">
        <img src="trips.svg" alt="Travel Icon" className="image" />
        <h2>Let's set up your trip!</h2>
        <p>What have you decided?</p>
      </div>
      <h2>Finishing touches</h2>
      <p>Let travelers know what your trip is all about.</p>

      <div className="form-group">
        <label>Trip name</label>
        <input
          type="text"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          placeholder="Untitled trip"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What's the plan for this trip?"
          rows="4"
        />
      </div>

      <div className="form-group">
        
        <label>What type of trip is this? (optional)</label>
        <div className="tag-options">
          {["Bachelorette/Bachelor", "Cruise", "Destination", "Friends", "Outdoors/Ski", "Birthday/Milestone", "Family", "Girls Trip", "Other"].map((tag) => (
            <button key={tag} className="tag-button">
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Estimated travelers (optional)</label>
        <input
          type="number"
          value={estimatedTravelers}
          onChange={(e) => setEstimatedTravelers(e.target.value)}
          placeholder="Not including you, how many travelers do you think will join this trip?"
        />
      </div>

      <div className="form-group">
        <label>Add cover photo</label>
        <div className="cover-photo">
          <input type="file" accept="image/*" />
        </div>
      </div>

      <div className="button-group">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="submit-button">Submit</button>
      </div>
    </div>
   
  );
}

export default FinishingTouches;
