import React from 'react';
import './HomeSec1.scss';
import cake from './HomeImage/Cake.jpg';
import pie from './HomeImage/pie.jpg';
import Milkt from './HomeImage/MilkT.jpg';
import coffee from './HomeImage/Coffee.jpg';
import donut from './HomeImage/Donut.jpg';
import waffle from './HomeImage/Waffle.jpg';
import { Link } from 'react-router-dom';
function HomeSec1() {
  return (
    <div className="sec1">
      <div className="box1">
        <Link to="Cake">
          <img src={cake} alt="" />
          <p>Cake</p>
        </Link>
      </div>
      <div className="box2">
        <img src={coffee} alt="" />
        <p>Espresso</p>
      </div>
      <div className="box3">
        <img src={donut} alt="" />
        <p>Donuts</p>
      </div>
      <div className="box4">
        <img src={waffle} alt="" />
        <p>Waffles</p>
      </div>
      <div className="box5">
        <img src={Milkt} alt="" />
        <p>Milk Tea</p>
      </div>
      <div className="box6">
        <img src={pie} alt="" />
        <p>Pie</p>
      </div>
    </div>
  );
}

export default HomeSec1;
