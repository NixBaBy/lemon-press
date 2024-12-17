import "../style/cotegore.css";
import CotergoreName from "./CotegoreName";
const cotName = [
  {
    name: "Бизнэсс",
  },
  {
    name: "Хэвлэлийн мэдээ",
  },
  {
    name: "Эдийн засаг",
  },
  {
    name: "Олон улс",
  },
  {
    name: "Сурталчилгаа",
  },
];
const post = [
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
    h2: "Монгол бартендер дэлхийд өрсөлдлөө asdasd",
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
const cotegores = (props) => {
  return (
    <div className="cotegore">
      <div className="post-item">
        <div className="post-img">
          <img src={props.img} alt="" />
        </div>
        <div className="post-imf">
          <p className="tittle">{props.tittle}</p>
          <h2>{props.h2}</h2>
          <div className="name">
            <p>{props.name}</p>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cotegore = () => {
  <div className="cotegorys">
    <div className="cotegoryName">
      {cotName.map((name) => {
        return <CotergoreName name={name.name} />;
      })}
    </div>
    <div className="cotagery">
      {post.map((medee) => {
        return (
          <Cotegore
            img={medee.img}
            h2={medee.h2}
            tittle={medee.tittle}
            name={medee.name}
            date={medee.date}
          />
        );
      })}
    </div>
  </div>;
};
export default Cotegore;
console.log(Cotegore);
