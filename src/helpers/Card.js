import React from "react";

const Card = ({ message, partlisting, setEvent, setCount, count }) => {
  return (
    <div className="page">
      <div className="allco">{message}</div>
      {partlisting.map((part, index) => (
        <div className="allco" key={index}>
          <div id={index} key={index} className="name">
            Part Number:{part.number}
          </div>
          <br />
          <div className="address">Description:{part.descr}</div>
          <br />
          <div className="phone">Price:${part.price}</div> <br />
          <button
            className="thecartbtncart"
            onClick={() => {
              if (
                window.confirm(
                  `Add ${part.number} at $${part.price} to ticket?`
                )
              ) {
                setEvent(part.number, part.price);
                setCount(count + 1);
              } else {
                return false;
              }
            }}
            value={part.price}
            name={part.number}
          >
            Add ${part.price}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
