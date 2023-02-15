import React, { useState, useEffect } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import "./search.css";
import BusImg from "../busimg/BusImg";

import TitleComp from "../title/TitleComp";
import SeatContainer from "../seat/SeatContainer";
import Ticket from "../ticket/Ticket";

const Search = () => {
  let [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
  });
  const [err, setErr] = useState(false);
  const [busApiData, setBusApiData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  // getting source destination
  const getSource = (e) => {
    let val = e.target.value;
    setFormData({ ...formData, source: val });
  };

  //getting final destination
  const getDestination = (e) => {
    let val = e.target.value;
    setFormData({ ...formData, destination: val });
  };

  // getting travel date on changing
  const getTravelDate = (e) => {
    let val = e.target.value;
    setFormData({ ...formData, date: val });
  };

  //for switching cities
  const alterInput = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      source: formData.destination,
      destination: formData.source,
    });
  };
  // check if all input fields are filled or notif all goes well then display data
  const checkAvailability = (e) => {
    e.preventDefault();

    if (
      formData.source == "" ||
      formData.destination == "" ||
      formData.date == ""
    ) {
      setErr(true);
    } else {
      setErr(false);
      getapidata();
    }
  };
  async function getapidata() {
    await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${formData.source}&destination=${formData.destination}`
    )
      .then((res) => res.json())
      .then((json) => setBusApiData(json));
  }
  // useEffect(()=>{

  // },[formData.source, formData.destination])

  function sortByPrice() {
    let newApidata = [...busApiData];
    newApidata.sort(function (a, b) {
      return Number(a.ticketPrice) - Number(b.ticketPrice);
    });

    setBusApiData(newApidata);
    console.log(busApiData);
  }

  function sortByArivalTime() {
    let newBusData = busApiData.sort(function (a, b) {
      if (a.arrivalTime < b.arrivalTime) {
        return -1;
      }
      if (a.arrivalTime > b.arrivalTime) {
        return 1;
      }
      return 0;
    });
    setBusApiData(newBusData);
    console.log(busApiData);
  }
  function sortByDepartureTime() {
    let newBusData = busApiData.sort(function (a, b) {
      if (a.departureTime < b.departureTime) {
        return -1;
      }
      if (a.departureTime > b.departureTime) {
        return 1;
      }
      return 0;
    });
    setBusApiData(newBusData);
    console.log(busApiData);
  }
  function selectingSeats() {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <div className='container'>
        <form className='search'>
          <div className='inp__container'>
            <span>FROM</span>
            <input
              type='text'
              placeholder='Source'
              value={formData.source}
              onChange={getSource}
            />
          </div>
          <div className='inp__container'>
            <button className='switch' onClick={alterInput}>
              <BsArrowLeftRight fontWeight={600} />
            </button>
          </div>
          <div className='inp__container'>
            <span>TO</span>
            <input
              type='text'
              placeholder='Destination'
              value={formData.destination}
              onChange={getDestination}
            />
          </div>
          <div className='inp__container'>
            <span>DATE</span>
            <input type='date' onChange={getTravelDate} />
          </div>
          <div className='inp__container'>
            <button
              className='search__btn'
              type='submit'
              onClick={checkAvailability}
            >
              SEARCH BUSES
            </button>
          </div>
        </form>
        {err ? <div className='err__msg'>Please fill input fields</div> : null}
        <BusImg />
        {busApiData.length > 0 ? (
          <div className='ul_api'>
            {console.log(busApiData)}
            <div className='sorting'>
              <h4>Sort By:</h4>
              <button onClick={sortByPrice}>Price</button>
              <button onClick={sortByArivalTime}>Arival</button>
              <button onClick={sortByDepartureTime}>Departure</button>
            </div>
            <ul>
              {busApiData.map((ele) => {
                return (
                  <li
                    className='api_data'
                    key={ele.id}
                    onClick={() => {
                      selectingSeats();
                    }}
                  >
                    {console.log(busApiData)}

                    {!isClicked ? (
                      <div className="api__data_element_warpper">
                        <div className='api_data_elements'>
                          <h4>Bus Name: </h4>
                          {ele.busName}
                        </div>
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
                    ):<Ticket/> }
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <TitleComp />
        )}
      </div>
    </>
  );
};

export default Search;
