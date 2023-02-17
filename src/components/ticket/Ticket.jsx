import React from "react";
import BusImg from "../busimg/BusImg";
import SeatContainer from "../seat/SeatContainer";
const Ticket = ({ele, setIsClicked, isClicked}) => {
  console.log(ele, "ticket")
  return (
    <div>
      <div className='api_data' onClick={()=>{
        setIsClicked(!isClicked)
      }}>
        <div className='api_data_elements'>
          <h4>Bus Name: </h4>
          {ele.busName}
        </div>
        {console.log(ele)}
        <div className='api_data_elements'>
          <h4>Arival Time: </h4>
          {ele.arrivalTime}
        </div>
        <div className='api_data_elements'>
          <h4>Departure Time: </h4>
          {ele.departureTime}
        </div>
        <div className='api_data_elements'>
          <h4>Journey Date: </h4>
          {ele.date}
        </div>
        <div className='api_data_elements'>
          <h4>Price: </h4>
          {ele.ticketPrice}/-
        </div>
      </div>
      <div className='seat_details_container'>
        <BusImg />
        <SeatContainer />
        <div className='book_ticket'>
          <button>BOOK TICKET</button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
