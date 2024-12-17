import "../styles/otherNews.css";
const OtherHog = (props) => {
  return (
    <div className="other-news-imf">
      <div className="other1">
        <p className="tittle">{props.tittle}</p>
        <h2>{props.h2}</h2>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
};
export default OtherHog;
