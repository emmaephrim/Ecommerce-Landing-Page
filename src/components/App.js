import React from "react";
import Header from "./Header";
// import logo from './logo.svg';
import "../css/App.css";
import Banner from "./Banner";
import Collections from "./Collections";
import { Items as items } from "./Items";
import { Items2 as items2 } from "./Items2";
import item_8 from "../images/item_8.jpeg";
import SpecialOffers from "./SpecialOffers";

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <div className="collections_body">
        <div className="collections_body_for_items1">
          {/* First Batch of Items */}
          {items.map((item, index) => {
            return (
              <Collections
                key={index}
                title={item.title}
                content={item.content}
                id={index}
                imgSrc={item.imgSrc}
              />
            );
          })}
          {/* Second Batch Of Items */}
        </div>
        <div className="collections_body_for_items2">
          {/* <img
            className="side_bar_item side_item"
            src={item_8}
            alt=""
            srcset=""
          /> */}
          <SpecialOffers />
          {items2.map((item, index) => {
            return (
              <Collections
                key={index}
                title={item.title}
                content={item.content}
                id={index}
                imgSrc={item.imgSrc}
                className="item"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
