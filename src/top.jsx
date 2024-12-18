import React from "react";
import "./top.css";
import Header1 from "./components/Header1";
import Reclam1 from "./components/Reclam1";
import Neww from "./components/News";
import Reclam2 from "./components/Reclam2";
import Cotegore from "./components/Cotegore";
import HeroNews from "./components/HeroNews";

const App = () => {
  return (
    <div className="head">
      <Header1 />
      <div className="body">
        <Reclam1 />
        <HeroNews />
        <div className="news">
          <Neww />
          <Reclam2 />
        </div>
        <div className="reclam3">
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/bfe643d1-36ba-4da7-8217-521d83e28491.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T081813Z&X-Goog-Expires=86399&X-Goog-Signature=9ebed144d003a9eca8eec69de6d87a925ec2264cc64fb0551a3df74fbcae9d48e91f60b6101457f417b97d763675d88a24041fa96af92ad80d6cb122f1876710045e4c76e78241e08498658e3ff1694017a29669dc15f180a9fa978e272a6fcfd4de26d478770fdec010bdfb53bdcad720186e8f9cf528debb1ca51ee0a3fa04122406f36898d9bdf1e11fe875f94f59a1966aa491e8ee4c2e29988b818a0df47f2ccade471b426f62f9826b51d137a96b96aecdea3a0d6eae0eaf8707f2edd98c824fa39611685637da2e28d9d2451ab343b3c7b83e37c0248575fb2907f0a449bddf7d198e569ea8dc9dbde79956f349a487057b761f544d6b7955158dd1f8&X-Goog-SignedHeaders=host"
            alt=""
          />
          <div className="new">
            <Neww />
          </div>
        </div>
        <div className="next">
          <p>Илүү үзэх</p>
        </div>
        <div className="asd">
          <Cotegore />
        </div>
      </div>
    </div>
  );
};
export default App;
