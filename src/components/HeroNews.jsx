import "../style/HeroNews.css";
const HeroNews = () => {
  return (
    <div className="heroNews">
      <div className="hero-img">
        <img
          src="https://dash-api.yld.mn/api/image/90d5d4f6-1b7e-464d-9247-1c137ee7365a"
          alt=""
        />
        <div className="hero-imf">
          <p className="tittle">Бизнес</p>
          <h2>Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ</h2>
          <div className="name">
            <p>С.Ангирмаа</p>
            <p>12 сарын 18, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroNews;
