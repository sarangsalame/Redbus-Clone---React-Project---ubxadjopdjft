import React, { useContext } from "react";
import ContextData from "../../store/context-data";
import { useNavigate } from "react-router-dom";
import './bookticket.css'
import bus from '../../asset/bg.png'

function BookTicket() {
  const { bookBusData, seatNumber } = useContext(ContextData);
  const navigate = useNavigate();

  function backHandler() {
    navigate("/search");
  }

  return (
    <div className="bookticket">
      <div className="back">
        <button className="back_btn" onClick={backHandler}>Back Home</button>
      </div>

      <div className="ticket_otp">
        <div className="img_section">
            
        </div>
        <div className="ticket_details">
        <h4>Thanks for Travelling with RedBus</h4>
          <ul>
            <li>BusName: {bookBusData.busName}</li>
            <li>Ticket Price: {bookBusData.ticketPrice}</li>
            <li>Arrival Time: {bookBusData.arrivalTime}</li>
            <li>Departure Time: {bookBusData.departureTime}</li>
            <li>Seat Number: {seatNumber}</li>
            
            
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default BookTicket;
