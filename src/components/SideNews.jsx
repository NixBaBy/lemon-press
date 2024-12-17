import OtherHog from "./otherHog";

const SideNews = (props) => {
  return (
    <div className="other">
      <div className="otherNews">
        <div className="otherNews-img">
          <img
            src="https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d"
            alt=""
          />
        </div>
      </div>
      {props.data.map((medee) => {
        return (
          <OtherHog tittle={medee.tittle} h2={medee.h2} date={medee.date} />
        );
      })}
    </div>
  );
};
export default SideNews;
