import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Admindash = (props) => {
  const { flights } = props;
  const [rescheduledFlight, setRescheduledFlight] = useState(null);
  const [rescheduledFlightTime, setRescheduledFlightTime] = useState('');
  const [rescheduledFlightMessage, setRescheduledFlightMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const getUniqueFlightName = (airlineName, index) => {
    // Replace spaces with hyphens and append a random number if not rescheduled
    if (index !== rescheduledFlight) {
      const randomNum = Math.floor(Math.random() * 10000);
      return airlineName.replace(/ /g, '-') + '-' + randomNum;
    } else {
      return airlineName.replace(/ /g, '-');
    }
  };

  const handleReschedule = (index) => {
    setRescheduledFlight(index);
  };

  const handleRescheduleTimeChange = (event) => {
    setRescheduledFlightTime(event.target.value);
  };

  const handleRescheduleMessageChange = (event) => {
    setRescheduledFlightMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Rescheduling flight ${flights[rescheduledFlight].airline} at ${rescheduledFlightTime} with message: ${rescheduledFlightMessage}`;
    console.log(message);
    // Send message to FlightTracker component
    setMessages([...messages, message]);
    setRescheduledFlight(null);
  };

  return (
    <div className="Admidash">
      <h2>Available flights today</h2>
      <Link to="/admin" className="fiig">Logout</Link>
      <Link to="/download" id="fiig">Check Logs</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Departure Time</th>
            <th>Departure Gate Number</th>
            <th>Price</th>
            <th>Reschedule</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index} style={{ backgroundColor: index === rescheduledFlight ? 'blue' : 'transparent' }}>
              <td>{getUniqueFlightName(flight.airline, index)}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.departureGateNumber}</td>
              <td>{flight.price}</td>
              <td>
                {index === rescheduledFlight && (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                    <Form.Label>Reschedule Time:</Form.Label>
<Form.Control type="text" value={rescheduledFlightTime} onChange={handleRescheduleTimeChange} />
</Form.Group>
<Form.Group>
<Form.Label>Message:</Form.Label>
<Form.Control type="text" value={rescheduledFlightMessage} onChange={handleRescheduleMessageChange} />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
)}
{index !== rescheduledFlight && (
<Button variant="secondary" onClick={() => handleReschedule(index)}>
Reschedule
</Button>
)}
</td>
</tr>
))}
</tbody>
</Table>

</div>
);
};

export default Admindash;