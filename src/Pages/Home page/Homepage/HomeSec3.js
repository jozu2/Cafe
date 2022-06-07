import React from 'react';
import './HomeSec3.scss';
import best1 from './HomeImage/best1.jpg';
function HomeSec3() {
  return (
    <div>
      <div className="container3">
        <div className="xbox1">
          <img src={best1} alt="" />
          <button>Order Now!</button>
        </div>

        <div className="xbox2">
          <h3>Item of the Month</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aut
            tempore officiis tempora ratione, nemo perferendis ipsam sed atque
            error ipsum doloremque, quas voluptatum similique reiciendis
            suscipit quaerat numquam facere.
          </p>
        </div>
        <div className="xbox3">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/961/360/885/colorful-cream-cakes-pastries-sweet-food-wallpaper-preview.jpg"
            alt=""
          />
          <button>Order Now!</button>
        </div>

        <div className="xbox4">
          <h3>Item of the Month</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aut
            tempore officiis tempora ratione, nemo perferendis ipsam sed atque
            error ipsum doloremque, quas voluptatum similique reiciendis
            suscipit quaerat numquam facere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSec3;
