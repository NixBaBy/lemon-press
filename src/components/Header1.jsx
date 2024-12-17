import "../style/header.css";
const Header1 = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
        <div className="menus">
          <div className="menu">
            <p>Товхимол </p>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div className="menu">
            <p>Нийтлэлүүд</p>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div className="menu">
            <p>Цувралууд</p>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div className="menu">
            <p>Подкаст</p>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div className="menu">
            <p>Бидний Тухай</p>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
      <div className="input">
        <i class="fa-solid fa-magnifying-glass"></i>
        <button>
          <p>Уншаад Үзэе</p>
        </button>
      </div>
    </div>
  );
};

export default Header1;
