import React from "react";
import "./top.css";
import Hero from "./components/HeroNews";
import OtherHog from "./components/otherHog";
import SideNews from "./components/SideNews";
import LittleNews from "./components/LittleNews";
const others = [
  {
    tittle: "Эдийн Засаг",
    h2: "Казакстаны хөгжлийн цаана",
    date: "12 сарын 17,2024",
  },
  {
    tittle: "Эдийн Засаг",
    h2: "Япон Nasdaq-д хөл тавилаа",
    date: "12 сарын 17,2024",
  },
  {
    tittle: "Зах Зээл",
    h2: "Казакстаны хөгжлийн цаана",
    date: "12 сарын 17,2024",
  },
];
const others1 = [
  {
    tittle: "Зах Зээл",
    h2: "Казакстаны хөгжлийн цаана",
    date: "12 сарын 17,2024",
  },
  {
    tittle: "Зах Зээл",
    h2: "Казакстаны хөгжлийн цаана",
    date: "12 сарын 17,2024",
  },
  {
    tittle: "Зах Зээл",
    h2: "Казакстаны хөгжлийн цаана",
    date: "12 сарын 17,2024",
  },
];
const news = [
  {
    img: "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tittle: "Зах зээл",
    h2: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "12 сарын 17, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tittle: "Зах зээл",
    h2: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "12 сарын 17, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tittle: "Зах зээл",
    h2: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "12 сарын 17, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tittle: "Зах зээл",
    h2: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "12 сарын 17, 2024",
  },
];
const App = () => {
  return (
    <div className="father">
      <div className="top">
        <Hero />
        <Hero />
      </div>
      <div className="med">
        <SideNews data={others} />
        <SideNews data={others1} />
      </div>
      <div className="news">
        <LittleNews />
      </div>
    </div>
  );
};
export default App;
