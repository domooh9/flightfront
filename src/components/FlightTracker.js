import React from 'react';

const FlightTracker = (props) => {
  const { messages } = props;

  return (
    <div className="FlightTracker">
      <h2>Flight Tracker</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlightTracker;
