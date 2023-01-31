import { useState } from "react";
import Header from "./Header";
import "../css/App.css";
import Banner from "./Banner";
import FirstCollections from "./FirstCollections";
import SecondCollections from "./SecondCollections";
import { Items as items } from "./Items";
import SpecialOffers from "./SpecialOffers";

function App() {
  const [mobile, setMobile] = useState(false);
  return (
    <div
      className=""
      style={{ overflow: mobile && "hidden", height: mobile && "100vh" }}
    >
      <Header mobile={mobile} setMobile={setMobile} />
      <Banner />
      <div className="collections_body">
        <div className="collections_body_for_row1">
          {/* First Batch of Items */}
          {items.map((item, index) => {
            return (
              index < 6 && (
                <FirstCollections
                  key={index}
                  title={item.title}
                  content={item.content}
                  id={index}
                  imgSrc={item.imgSrc}
                />
              )
            );
          })}
        </div>
        {/* Second Batch Of Items */}
        <div className="collections_body_for_items2">
          <SpecialOffers />
          <div className="second_collections_mapped">
            {items.map((item, index) => {
              return (
                index > 5 && (
                  <SecondCollections
                    key={index}
                    title={item.title}
                    content={item.content}
                    id={index}
                    imgSrc={item.imgSrc}
                    // className="item"
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
