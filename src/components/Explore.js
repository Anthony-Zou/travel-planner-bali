import React from "react";
import "./Explore.css";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="collapsible">
      <button className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default function Explore() {
  return (
    <div className="explore-container">
      <div className="title-container">
        <h1>Explore</h1>
      </div>
      <p>This app includes example code to help you get started.</p>

      <Collapsible title="Bali Trip Planning">
        <p>
          Plan your perfect trip to Bali with our interactive map and detailed
          itinerary planner.
        </p>
        <p>
          The trip planner allows you to visualize your 5-day journey through
          Bali, including accommodations, attractions, and restaurants.
        </p>
        <a href="/" className="link">
          View Bali Trip Plan
        </a>
      </Collapsible>

      {/* Add more collapsible sections as needed */}
    </div>
  );
}
