import React, { useState , useContext} from "react";
import ContextData from "../../store/context-data";

import "./seatcontainer.css";
const SeatContainer = (props) => {
const { setseat , seatNumber} = useContext(ContextData)
  
  function getSeatNumber(e) {
    // props.setSeatNumber(e.target.value);
    // console.log(e.target.value);
    setseat(e.target.value)
  }

  return (
    <>
      <div className="seat_container_center">
        <div className="seat_container">
          <div className="double_seat">
            <div className="row1">
              <button onClick={getSeatNumber} value="L1">
                L1
              </button>
              <button onClick={getSeatNumber} value="L2">
                L2
              </button>
              <button onClick={getSeatNumber} value="L3">
                L3
              </button>
              <button onClick={getSeatNumber} value="L4">
                L4
              </button>
              <button onClick={getSeatNumber} value="L5">
                L5
              </button>
              <button onClick={getSeatNumber} value="L6">
                L6
              </button>
              <button onClick={getSeatNumber} value="L7">
                L7
              </button>
              <button onClick={getSeatNumber} value="L8">
                L8
              </button>
            </div>
            <div className="row2">
              <button onClick={getSeatNumber} value="L9">
                L9
              </button>
              <button onClick={getSeatNumber} value="L10">
                L10
              </button>
              <button onClick={getSeatNumber} value="L11">
                L11
              </button>
              <button onClick={getSeatNumber} value="L12">
                L12
              </button>
              <button onClick={getSeatNumber} value="L13">
                L13
              </button>
              <button onClick={getSeatNumber} value="L14">
                L14
              </button>
              <button onClick={getSeatNumber} value="L15">
                L15
              </button>
              <button onClick={getSeatNumber} value="L16">
                L16
              </button>
            </div>
          </div>
          <div className="single_seat">
            <button onClick={getSeatNumber} value="L17">
              L17
            </button>
            <button onClick={getSeatNumber} value="L18">
              L18
            </button>
            <button onClick={getSeatNumber} value="L19">
              L19
            </button>
            <button onClick={getSeatNumber} value="L20">
              L20
            </button>
            <button onClick={getSeatNumber} value="L21">
              L21
            </button>
            <button onClick={getSeatNumber} value="L22">
              L22
            </button>
            <button onClick={getSeatNumber} value="L23">
              L23
            </button>
            <button onClick={getSeatNumber} value="L24">
              L24
            </button>
          </div>
        </div>
      </div>
      {seatNumber !== "" && <p className="seatnum">{seatNumber}</p>}
    </>
  );
};

export default SeatContainer;
