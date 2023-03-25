import React, { useState } from "react";
import jsPDF from "jspdf";

const Flight = ({
airline,
departureTime,
departureGateNumber,
price,
}) => {
const [isBooked, setIsBooked] = useState(false);
const [bookedDate, setBookedDate] = useState("");
const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
const [paymentNumber, setPaymentNumber] = useState("");
const [paymentOptionSelected, setPaymentOptionSelected] = useState(false);
const [selectedSeat, setSelectedSeat] = useState("");
const [selectedDate, setSelectedDate] = useState("");

const seats = Array.from({ length: 75 }, (_, i) => i + 1);

const handleBook = () => {
if (selectedPaymentOption === "") {
alert("Please select a payment option.");
return;
}
if (selectedSeat === "") {
  alert("Please select a seat number.");
  return;
}

if (selectedPaymentOption === "M-Pesa") {
  if (paymentNumber === "") {
    alert("Please enter your M-Pesa number.");
    return;
  }
  const mpesaPrompt = `A Ussd will be sent to your number ${paymentNumber} to confirm payment of KES ${price}.
   Or lipa na Mpesa, Paybill 1111 account number KQ`;
  if (window.confirm(mpesaPrompt)) {
    setIsBooked(true);
    setBookedDate(new Date().toLocaleString());

    setTimeout(() => {
      const doc = new jsPDF();
      doc.text(`Airline: ${airline}`, 10, 10);
      doc.text(`Departure Time: ${departureTime}`, 10, 20);
      doc.text(`Gate of Departure: ${departureGateNumber}`, 10, 30);
      doc.text(`Date of Travel: ${selectedDate}`, 10, 40);
      doc.save("ticket.pdf");
    }, 1000);
  }
} else {
  if (paymentNumber === "") {
    alert(`Please enter your ${selectedPaymentOption} number.`);
    return;
  }
  const paymentPrompt = `Please pay $${price} using ${selectedPaymentOption} number ${paymentNumber}.`;
  if (window.confirm(paymentPrompt)) {
    setIsBooked(true);
    setBookedDate(new Date().toLocaleString());

    setTimeout(() => {
      const doc = new jsPDF();
      doc.text(`Airline: ${airline}`, 10, 10);
      doc.text(`Departure Time: ${departureTime}`, 10, 20);
      doc.text(`Gate of Departure: ${departureGateNumber}`, 10, 30);
      doc.text(`Date of Travel: ${selectedDate}`, 10, 40);
      doc.text(`Seat Number: ${selectedSeat}`, 10, 50);
      doc.save("ticket.pdf");
    }, 1000);
  }
}
};


const handlePaymentOptionChange = (event) => {
setSelectedPaymentOption(event.target.value);
setPaymentOptionSelected(true);
};

const handlePaymentNumberChange = (event) => {
setPaymentNumber(event.target.value);
};

const handleSeatSelect = (event) => {
setSelectedSeat(event.target.value);
};

const handleDateChange = (event) => {
setSelectedDate(event.target.value);
};

const bookedSeats = new Set();
while (bookedSeats.size < 30) {
  const seat = Math.floor(Math.random() * seats.length) + 1;
  bookedSeats.add(seat);
};

return (
  <div>
   
  <div className="flight">
  <h2>{airline}</h2>
  <p style={{color: 'red'}}>Departure Time: {departureTime}</p>
  <p>Gate of Departure: {departureGateNumber}</p>
  <label htmlFor="date">Date of Travel: </label>
  <input id='formcontrol' className="form-control" type="date" onChange={handleDateChange} />
  <br />
  <br />
  <label htmlFor="seat">Choose a seat: </label>
  <select id='formcontrol' className="form-control"   onChange={handleSeatSelect}>
  <option value="">--Please choose a seat--</option>
        {seats.map((seat) => (
          <option
            key={seat}
            value={seat}
            disabled={bookedSeats.has(seat)}
            className={bookedSeats.has(seat) ? "booked" : ""}
          >
            {seat} {bookedSeats.has(seat) ? "(Booked)" : ""}
          </option>
        ))}
      </select>
  <br />
  <br />
  <div className="form-group">
  <label htmlFor="payment">Choose a payment option: </label>
  <select id='formcontrol' className="form-control"  onChange={handlePaymentOptionChange}>
  <option value="">--Please choose a payment option--</option>
  <option value="Credit Card">Credit Card</option>
  <option value="PayPal">PayPal</option>
  <option value="M-Pesa">M-Pesa</option>
  </select>
  </div>
  {paymentOptionSelected && (
  <div>
  <br />
  <label htmlFor="payment-number">
  Enter {selectedPaymentOption} number:
  </label>
  <input className="form-control"
               type="text"
               id='formcontrol' 
               onChange={handlePaymentNumberChange}
             />
  </div>
  )}
  <br />
  <br />
  <button className="btn btn-primary" onClick={handleBook}>Book</button>

  </div>
  
  <div />
  </div>
  );
  };
  
  export default Flight;
