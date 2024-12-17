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

const News = (props) => {
  return (
    <div className="medee">
      <div className="medee-img">
        <img src={props.img} alt="" />
      </div>
      <div className="imf">
        <p className="tittle">{props.tittle}</p>
        <h2>{props.h2}</h2>
        <div className="name">
          <p>{props.name}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};
const Neww = () => {
  return (
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
  );
};

export default News;
