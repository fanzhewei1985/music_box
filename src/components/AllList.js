import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import SongRaw from "./SongRaw";
import actions from "../actions";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AllList = () => {
    useEffect(()=>{
        const fetchData= async ()=> {
            const res= await fetch('response.json')
            const textRes=await res.json()
            const songData=await textRes.data
console.log(songData)

        }
    fetchData()},[]
)
  const dispatch = useDispatch();
  const allSongs = useSelector((state) => state.songReducers.rawSongList);
  const getInput = (evt) => {
    const copy = [...allSongs];
    const search = evt.target.value.trim();
    let filterList = copy?.filter((song) =>
      song.title.toLowerCase().includes(search)
    );
    filterList.length > 0 &&
      evt.key === "Enter" &&
      dispatch(actions.songAction.searchSong(filterList));
    search === "" &&
      evt.key === "Enter" &&
      dispatch(actions.songAction.fetchAllSongs());
  };
   const findFav=()=>{
    const copy=[...allSongs]
    let favSongs=copy.filter(song=>song.like===true)
    dispatch(actions.songAction.showFav(favSongs))
   }
  return (
    <div className="listContainer">
      <div className="topC">
        <input
          className="search"
          type="text"
          placeholder="Search for songs"
          onKeyDown={getInput}
        />
       <button className="control" onClick={findFav}><FavoriteIcon /></button> 
        <NotificationsIcon />
        <SettingsIcon />
      </div>
      <div className="title"></div>
      <div className="songList">
        {allSongs?.map((s, index) => (
          <SongRaw s={s} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllList;
