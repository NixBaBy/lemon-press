import "../style/post.css";
const item = [
  {
    tittle: "Зах зээл",
    h2: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
    name: "М.Хулан /",
    date: "12 сарын 18, 2024",
  },
  {
    tittle: "Зах зээл",
    h2: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    name: "С.Ангирмаа /",
    date: "12 сарын 17, 2024",
  },
  {
    tittle: "Эдийн засаг",
    h2: "Казакстаны хөгжлийн цаана",
    name: "М.Хулан /",
    date: "12 сарын 17, 2024",
  },
];
export const Img = () => {
  return (
    <div className="posts-img">
      <img
        src="https://dash-api.yld.mn/api/image/f64012ed-9f61-469c-934e-593a79b152d2"
        alt=""
      />
    </div>
  );
};
const Posts = (medee) => {
  return (
    <div className="postsImf">
      <p className="tittle">{medee.tittle}</p>
      <h2>{medee.h2}</h2>
      <div className="name">
        <p>{medee.name}</p>
        <p>{medee.date}</p>
      </div>
    </div>
  );
};
export const Imf = () => {
  return (
    <div className="new">
      {item.map((medee) => {
        return (
          <Posts
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
