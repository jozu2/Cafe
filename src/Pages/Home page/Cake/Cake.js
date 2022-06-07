import React from 'react';
import cakeData from './Cake.json';
import './Cake.scss';
import CakePage from './bannerCake.jpg';

function Cake() {
  return (
    <div className="cake">
      <div className="banner">
        <img src={CakePage} alt="" />
        <h1>Cakes</h1>
      </div>

      <div className="cakeContent">
        {cakeData.map((val) => (
          <div>
            <img src={val.img} alt="" />
            <p>{val.prod}</p>
            <p>{val.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="trymetitle">Try these Sweets</div>
      <div className="tryme">
        <div className="me1">
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/11/red-velvet-cake-slice.jpg?quality=82&strip=1&w=800"
            alt=""
          />
          <p>product</p>
          <p>value</p>
          <button>Add to Cart</button>
        </div>
        <div className="me2">
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/11/red-velvet-cake-slice.jpg?quality=82&strip=1&w=800"
            alt=""
          />
          <p>product</p>
          <p>value</p>

          <button>Add to Cart</button>
        </div>
        <div className="me3">
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/11/red-velvet-cake-slice.jpg?quality=82&strip=1&w=800"
            alt=""
          />
          <p>product</p>
          <p>value</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cake;
