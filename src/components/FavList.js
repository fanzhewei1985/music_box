import { useSelector } from "react-redux"
import SongRaw from "./SongRaw"

const FavList=()=>{
const allSongs=useSelector(state=>state.songReducers.rawSongList)
    return(
        <div className='listContainer'>
            <div className='title'>
             <h3>Fav List</h3>
            </div>
            <div className='songList'>
             { allSongs?.filter(s=>s.like).map((s,index)=><SongRaw s={s} key={index}/>)}
            </div>
        </div>
    )
}

export default FavList