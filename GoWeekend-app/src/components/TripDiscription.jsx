import React, { useState } from "react";
import "./TripDiscription.css";
import {FaCamera, FaBold, FaItalic, FaUnderline, FaStrikethrough, FaListUl, FaListOl, FaAlignLeft, FaAlignCenter, FaAlignRight, FaLink, FaTable } from "react-icons/fa";

function FinishingTouches({ onBack }) {
  const [tripName, setTripName] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedTravelers, setEstimatedTravelers] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState("cover_agiagz.jpg");

  const toggleStyle = (style) => {
    switch (style) {
      case "bold":
        setIsBold(!isBold);
        break;
      case "italic":
        setIsItalic(!isItalic);
        break;
      case "underline":
        setIsUnderline(!isUnderline);
        break;
      default:
        break;
    }
  };

  // Function to handle toolbar text commands
  const handleTextCommand = (command) => {
    
    document.execCommand(command, false, null);
  };

  const handleCoverPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const tripData = { tripName, description, estimatedTravelers };
    localStorage.setItem("tripData", JSON.stringify(tripData));
    alert("Trip details saved successfully!");
  };

  return (
    <div className="finishing-touches">
      <div className="header">
        <img src="create_trip_third_step.svg" alt="Travel Icon" className="image" />
        <hr />
        <h2>Let's set up your trip!</h2>
        <p>What have you decided?</p>
        <p>Let travelers know what your trip is all about.</p>
        <hr />
      </div>

      <div className="form-group">
        <label htmlFor="tripName">Trip name</label>
        <input
          id="tripName"
          type="text"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          placeholder="Untitled trip"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <div className="toolbar">
          <button onClick={() => toggleStyle("bold") }><FaBold /></button>
          <button onClick={() => toggleStyle("italic")}><FaItalic /></button>
          <button onClick={() => toggleStyle("underline")}><FaUnderline /></button>
          <button onClick={() => handleTextCommand("strikethrough")}><FaStrikethrough /></button>
          <button onClick={() => handleTextCommand("insertUnorderedList")}><FaListUl /></button>
          <button onClick={() => handleTextCommand("insertOrderedList")}><FaListOl /></button>
          <button onClick={() => handleTextCommand("justifyLeft")}><FaAlignLeft /></button>
          <button onClick={() => handleTextCommand("justifyCenter")}><FaAlignCenter /></button>
          <button onClick={() => handleTextCommand("justifyRight")}><FaAlignRight /></button>
          <button onClick={() => handleTextCommand("createLink")}><FaLink /></button>
          <button><FaTable /></button>
        </div>
        <div
          contentEditable
          onInput={(e) => setDescription(e.currentTarget.innerHTML)}
          placeholder="What's the plan for this trip?"
          className={`description-editable ${isBold ? "bold" : ""} ${
            isItalic ? "italic" : ""
          } ${isUnderline ? "underline" : ""}`}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            minHeight: "100px",
            borderRadius: "5px",
          }}
        ></div>
      </div>

      <div className="form-group">
        <label>What type of trip is this? (optional)</label>
        <div className="tag-options">
          {["🎉Bachelorette/Bachelor", "🚢Cruise", "🌴Destination", "👯Friends", "🌲Outdoors/Ski", "🎈Birthday/Milestone", "🏡Family", "💃Girls Trip", "Other"].map((tag, index) => (
            <button key={index} className="tag-button" id={`tag_${index}`}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="estimatedTravelers">Estimated travelers (optional)</label>
        <input
          id="estimatedTravelers"
          type="number"
          value={estimatedTravelers}
          onChange={(e) => setEstimatedTravelers(e.target.value)}
          placeholder="Not including you, how many travelers do you think will join this trip?"
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Add cover photo</label>
        <div className="cover-photo">
          <img src={coverPhoto} alt="Cover" className="cover-photo-image" />
          <input
            type="file"
            id="coverPhotoInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleCoverPhotoChange}
          />
          <FaCamera
            className="camera-icon"
            onClick={() => document.getElementById("coverPhotoInput").click()}
          />
        </div>
      </div>

      <div className="button-group">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default FinishingTouches;
