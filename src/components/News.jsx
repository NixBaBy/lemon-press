import "../style/news.css";
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

const News = (medee) => {
  return (
    <div className="medee">
      <div className="medee-img">
        <img src={medee.img} alt="" />
      </div>
      <div className="imf">
        <p className="tittle">{medee.tittle}</p>
        <h2>{medee.h2}</h2>
        <div className="name">
          <p>{medee.name}</p>
          <p>{medee.date}</p>
        </div>
      </div>
    </div>
  );
};
const Neww = () => {
  return (
    <div className="new">
      {news.map((medee, index) => {
        return (
          <News
            key={index}
            img={medee.img}
            h2={medee.h2}
            tittle={medee.tittle}
            name={medee.name}
            date={medee.date}
          />
        );
      })}
    </div>
  );
};

export default Neww;
