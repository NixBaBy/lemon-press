import "../style/news.css";

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
export default News;
