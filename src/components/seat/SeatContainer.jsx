import React from "react";
import "./seatcontainer.css";
const SeatContainer = () => {
  return (
    <div className='seat_container'>
      <div className='double_seat'>
        <div className='row1'>
          <button>L1</button>
          <button>L2</button>
          <button>L3</button>
          <button>L4</button>
          <button>L5</button>
          <button>L6</button>
          <button>L7</button>
          <button>L8</button>
        </div>
        <div className='row2'>
          <button>L9</button>
          <button>L10</button>
          <button>L11</button>
          <button>L12</button>
          <button>L13</button>
          <button>L14</button>
          <button>L15</button>
          <button>L16</button>
        </div>
      </div>
      <div className='single_seat'>
        <button>L17</button>
        <button>L18</button>
        <button>L19</button>
        <button>L20</button>
        <button>L21</button>
        <button>L22</button>
        <button>L23</button>
        <button>L24</button>
      </div>
    </div>
  );
};

export default SeatContainer;
