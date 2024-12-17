import "../styles/HeroNews.css";
const Hero = () => {
  return (
    <div className="hero-news">
      <div className="hero-news-img">
        <img
          src="https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e"
          alt=""
        />
      </div>
      <div className="hero-news-imf">
        <p className="tittle">Зах Зээл</p>
        <h2>Орон сууцны үнэ иргэдийн орлогоос 2-2.5 дахин үнэтэй байна</h2>
        <p className="date">12 сарын 17,2024</p>
      </div>
    </div>
  );
};
export default Hero;
