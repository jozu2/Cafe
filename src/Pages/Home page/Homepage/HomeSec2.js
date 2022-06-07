import React from 'react';
import './HomeSec2.scss';
import data from './HomeImage/Json/shop.json';

function HomeSec2() {
  return (
    <div>
      <div className="title">
        <h3> Try Our Best Sellers</h3>
      </div>
      <div className="container">
        <div className="mainC">
          {data.map((val) => (
            <div>
              <img src={val.img} alt="" />

              <p className="prod1">{val.prod}</p>
              <p>${val.price}</p>
              <button className="btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSec2;
