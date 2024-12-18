import "../style/cotegore.css";
import CotergoreName from "./CotegoreName";
const post = [
  {
    img: "https://dash-api.yld.mn/api/image/158e4cc9-11bf-4d8e-9e6b-dd6930ef8992",
    tittle: "Mining 101",
    h2: "Уул уурхайн салбарт карьераа өсгөх боломж",
    name: "С.Ангирмаа /",
    date: "12 сарын 16, 2024",
    key: "bussines",
  },
  {
    img: "https://dash-api.yld.mn/api/image/e00ad5b2-7618-4c71-9121-e1c12180184a",
    tittle: "Сурталчилгаа",
    h2: "Монгол бартендер дэлхийд өрсөлдлөө asdasd",
    name: "Б. Эмүжин /",
    date: "12 сарын 16, 2024",
    key: "bussines",
  },
  {
    img: "https://dash-api.yld.mn/api/image/b28955f5-0a7c-4c14-829f-8c85e14e18c0",
    tittle: "Interviewг",
    h2: "Уран AI: Монголын Анхны интерьер болон экстерьер дизайны AI",
    name: "М.Хулан /",
    date: "12 сарын 13, 2024",
    key: "bussines",
  },
  {
    img: "https://dash-api.yld.mn/api/image/f486afba-6fea-4318-baef-27c0e2582ff4",
    tittle: "Бизнес",
    h2: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
    name: "М.Хулан /",
    date: "12 сарын 13, 2024",
    key: "news",
  },
  {
    img: "https://dash-api.yld.mn/api/image/13aeb310-9ed2-478c-bf7a-a5f21ccc34c8",
    tittle: "Санхүү",
    h2: "Apple Pay 10 жилийн ойгоороо Монголд нэвтэрлээ",
    name: "С.Ангирмаа /",
    date: "12 сарын 11, 2024",
    key: "news",
  },
  {
    img: "https://dash-api.yld.mn/api/image/62d20840-42f6-46b9-8797-5cd80c97fac9",
    tittle: "Бизнес",
    h2: "АХБ болон ЕСБХБ энэ онд Монголын компаниудад $230.7 саяын хөрөнгө оруулжээ",
    name: "Б. Эмүжин /",
    date: "12 сарын 10, 2024",
    key: "news",
  },
  {
    img: "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tittle: "Зах зээл",
    h2: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    name: "С.Ангирмаа /",
    date: "12 сарын 17, 2024",
    key: "economy",
  },
  {
    img: "https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d",
    tittle: "Эдийн засаг",
    h2: "Казакстаны хөгжлийн цаана",
    name: "М.Хулан /",
    date: "12 сарын 17, 2024",
    key: "economy",
  },
  {
    img: "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
    tittle: "Эдийн засаг",
    h2: "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
    name: "М.Хулан /",
    date: "12 сарын 16, 2024",
    key: "economy",
  },
];
const Cotegores = (medee) => {
  return (
    <div className="cotegore">
      <div className="post-item">
        <div className="post-img">
          <img src={medee.img} alt="" />
        </div>
        <div className="post-imf">
          <p className="tittle">{medee.tittle}</p>
          <h2>{medee.h2}</h2>
          <div className="name">
            <p>{medee.name}</p>
            <p>{medee.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cotegore = () => {
  return (
    <div className="allPosts">
      <CotergoreName />
      <div className="bussines">
        {post
          .filter((arr) => arr.key == "bussines")
          .map((medee, index) => {
            return (
              <Cotegores
                key={index}
                img={medee.img}
                tittle={medee.tittle}
                h2={medee.h2}
                name={medee.name}
                date={medee.date}
              />
            );
          })}
      </div>
      <CotergoreName />
      <div className="news">
        {post
          .filter((arr) => arr.key == "news")
          .map((medee, index) => {
            return (
              <Cotegores
                key={index}
                img={medee.img}
                tittle={medee.tittle}
                h2={medee.h2}
                name={medee.name}
                date={medee.date}
              />
            );
          })}
      </div>
      <CotergoreName />
      <div className="economy">
        {post
          .filter((arr) => arr.key == "economy")
          .map((medee, index) => {
            return (
              <Cotegores
                key={index}
                img={medee.img}
                tittle={medee.tittle}
                h2={medee.h2}
                name={medee.name}
                date={medee.date}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Cotegore;
