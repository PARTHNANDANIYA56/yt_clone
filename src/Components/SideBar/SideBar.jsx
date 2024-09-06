import "./SideBar.css";
import home from "../../../public/home.webp";
import game_icon from "../../../public/game_icon.webp";
import automobiles from "../../../public/automobiles.webp";
import sports from "../../../public/sports.webp";
import entertainment from "../../../public/entertainment.webp";
import tech from "../../../public/tech.webp";
import music from "../../../public/music.webp";
import blogs from "../../../public/blogs.webp";
import news from "../../../public/news.webp";
import jack from "../../../public/jack.webp";
import simon from "../../../public/simon.webp";
import tom from "../../../public/tom.webp";
import megan from "../../../public/megan.webp";
import cameron from "../../../public/cameron.webp";

export const SideBar = ({ sideBar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sideBar ? " " : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? 'active' : ""}`} onClick={() => { setCategory(0) }}>
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? 'active' : ""}`} onClick={() => { setCategory(20) }}>
          <img src={game_icon} alt="game_icon" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2 ? 'active' : ""}`} onClick={() => { setCategory(2) }}>
          <img src={automobiles} alt="automobiles" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17 ? 'active' : ""}`} onClick={() => { setCategory(17) }}>
          <img src={sports} alt="sports" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category === 24 ? 'active' : ""}`} onClick={() => { setCategory(24) }}>
          <img src={entertainment} alt="entertainment" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28 ? 'active' : ""}`} onClick={() => { setCategory(28) }}>
          <img src={tech} alt="tech" />
          <p>Technoloy</p>
        </div>
        <div className={`side-link ${category === 10 ? 'active' : ""}`} onClick={() => { setCategory(10) }}>
          <img src={music} alt="music" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category === 22 ? 'active' : ""}`} onClick={() => { setCategory(22) }}>
          <img src={blogs} alt="blogs" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? 'active' : ""}`} onClick={() => { setCategory(25) }}>
          <img src={news} alt="news" />
          <p>News</p>
        </div>
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="profile_img" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="profile_img" />
          <p>Mrbeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="profile_img" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="profile_img" />
          <p>5-Minute Craft</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="profile_img" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};
