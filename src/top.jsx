import React from "react";
import "./top.css";
import Header1 from "./components/Header1";
import Reclam1 from "./components/Reclam1";
import News from "./components/News";
import Reclam2 from "./components/Reclam2";
import Cotegore from "./components/Cotegore";

const news = [
  {
    img: "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tittle: "Зах зээл",
    h2: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    name: "С.Ангирмаа/",
    date: "12 сарын 17, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d",
    tittle: "Эдийн засаг",
    h2: "Казакстаны хөгжлийн цаана",
    name: "М.Хулан /",
    date: "12 сарын 17, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/c00b3bc3-2340-49f4-84d3-a274bd10893f",
    tittle: "Сурталчилгаа",
    h2: "Ариглан гамнаж, ашигтай хадгал",
    name: "Б. Эмүжин /",
    date: "12 сарын 17, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
    tittle: "Эдийн засаг",
    h2: "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
    name: "М.Хулан /",
    date: "12 сарын 16, 2024",
  },
];
const news1 = [
  {
    img: "https://dash-api.yld.mn/api/image/497388e5-c62f-4ebd-b64a-f1221f95def7",
    tittle: "Зах зээл",
    h2: "Япон Nasdaq-д хөл тавилаа",
    name: "С.Ангирмаа/",
    date: "12 сарын 16, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/158e4cc9-11bf-4d8e-9e6b-dd6930ef8992",
    tittle: "Mining 101",
    h2: "Уул уурхайн салбарт карьераа өсгөх боломж",
    name: "С.Ангирмаа /",
    date: "12 сарын 16, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/e00ad5b2-7618-4c71-9121-e1c12180184a",
    tittle: "Сурталчилгаа",
    h2: "Монгол бартендер дэлхийд өрсөлдлөө",
    name: "Б. Эмүжин /",
    date: "12 сарын 16, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/b28955f5-0a7c-4c14-829f-8c85e14e18c0",
    tittle: "Interviewг",
    h2: "Уран AI: Монголын Анхны интерьер болон экстерьер дизайны AI",
    name: "М.Хулан /",
    date: "12 сарын 13, 2024",
  },
];

const App = () => {
  return (
    <div className="head">
      <Header1 />
      <div className="body">
        <Reclam1 />
        <div className="news">
          <div className="new">
            {news.map((medee) => {
              return (
                <News
                  img={medee.img}
                  h2={medee.h2}
                  tittle={medee.tittle}
                  name={medee.name}
                  date={medee.date}
                />
              );
            })}
          </div>
          <Reclam2 />
        </div>
        <div className="reclam3">
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/bfe643d1-36ba-4da7-8217-521d83e28491.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T081813Z&X-Goog-Expires=86399&X-Goog-Signature=9ebed144d003a9eca8eec69de6d87a925ec2264cc64fb0551a3df74fbcae9d48e91f60b6101457f417b97d763675d88a24041fa96af92ad80d6cb122f1876710045e4c76e78241e08498658e3ff1694017a29669dc15f180a9fa978e272a6fcfd4de26d478770fdec010bdfb53bdcad720186e8f9cf528debb1ca51ee0a3fa04122406f36898d9bdf1e11fe875f94f59a1966aa491e8ee4c2e29988b818a0df47f2ccade471b426f62f9826b51d137a96b96aecdea3a0d6eae0eaf8707f2edd98c824fa39611685637da2e28d9d2451ab343b3c7b83e37c0248575fb2907f0a449bddf7d198e569ea8dc9dbde79956f349a487057b761f544d6b7955158dd1f8&X-Goog-SignedHeaders=host"
            alt=""
          />
          <div className="new">
            {news1.map((medee) => {
              return (
                <News
                  img={medee.img}
                  h2={medee.h2}
                  tittle={medee.tittle}
                  name={medee.name}
                  date={medee.date}
                />
              );
            })}
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
