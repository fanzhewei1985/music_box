import AllList from "./AllList";
import PlayList from "./PlayList";
// import FavList from "./FavList"
import { useDispatch } from "react-redux";
import "./Home.scss";
import songAction from "../actions/songAction";
import { useEffect, useState,useSelector } from "react";

const Home = () => {
  const dispatch = useDispatch();
 
  useEffect(() => dispatch(songAction.fetchAllSongs()), []);
  const [bgImg, setBgImg] = useState(
    "https://m.media-amazon.com/images/I/610LDzZhsUL.png"
  );
  const passData = (child) => {
    setBgImg(child);
  };
 
  return (
    <section>
      <div className="container">
        <img className="bgImg" src={bgImg} alt="" />
        <div className="topCont">
        <div className="topPic">
          <img style={{ height: "100px", width: "100px" }} src={bgImg} alt="" />
          <h5>My Recent Plays and More</h5>
        </div>
       
        </div>
        <div className="row">
          <AllList/>
          {/* <FavList/> */}
          <PlayList fun={passData} />
        </div>
      </div>
    </section>
  );
};
export default Home;
