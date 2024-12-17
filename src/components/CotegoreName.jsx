import "../style/cotegore.css";
const CotergoreName = (props) => {
  return (
    <div className="name">
      <h3>{props.nam}</h3>
      <div className="name-line"></div>
      <p>Илүү үзэх</p>
    </div>
  );
};
export default CotergoreName;
