import React, { useState } from "react";


const ContextData = React.createContext({
  bookBusData: [],
  setBookBusData: (data) => {},
  seatNumber:"",
  setseat:(data)=>{},
});

function ContextProvider(props) {
  const [bookBusData, setBookBusData] = useState([]);
  const [seatNumber, setSeatNumber]= useState("");
  function bookBus(data) {
    setBookBusData(data);
  }

  function setseat(data){
    setSeatNumber(data)
  }

  return (
    <ContextData.Provider
      value={{
        bookBusData,
        setBookBusData: bookBus,
        seatNumber,
        setseat,
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
}

export default ContextData;

export { ContextProvider };
