import { useDispatch, useSelector } from "react-redux";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import actions from "../actions";
import {useRef,useState} from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const PlayList = ({ fun }) => {
  const allSongs = useSelector((state) => state.songReducers.rawSongList);
  const audioElm=useRef()
  console.log(allSongs)
  const dispatch = useDispatch();
  const[mute,setMute]=useState(false)
  const preFunc = (id) => {
    if (id > 1) {
      let newId = id - 1;
      dispatch(actions.songAction.selectSongs(newId));
    }
  };
  const nextFunc = (id) => {
    if (id < 25) {
      let newId = id + 1;
      dispatch(actions.songAction.selectSongs(newId));
    }
  };
 const playPauseFunc=(id,playing)=>{
playing? audioElm.current.pause() : audioElm.current.play()
dispatch(actions.songAction.playPauseToggle(id))
 }
const changeVolume=(evt)=>{
  audioElm.current.volume=evt.target.value/100
  audioElm.current.volume>0? setMute(false):setMute(true)

}
const getRandom=()=>{
 let id=Math.floor(Math.random()*26)
 dispatch(actions.songAction.selectSongs(id))
}
  return (
    <div className="listContainer">
      <div className="title"></div>
      <div className="songList">
        {allSongs
          ?.filter((s) => s.check)
          .map((s, index) => {
            fun(s.cover);
            return (
              <div className="listBtm">
                <div className="picInfo">
                  <div className={s.playing ? "demo" : ""}>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      className="imgPlaying"
                      src={s.cover}
                      alt=""
                    />
                  </div>
                  <p>{s.title}</p>
                </div>
                <div className="player">
                  <button className="control" onClick={getRandom}><ShuffleIcon/></button>
                  <button className="control" onClick={() => preFunc(s.id)}> <SkipPreviousIcon /></button>
                  {s.check && <div>
                     <button className="control" onClick={()=>playPauseFunc(s.id,s.playing)}>
                     {s.playing?<PauseCircleIcon/>:<PlayCircleIcon/>}
                     </button>
                    <audio
                      className="audio"
                      height="10px"
                     ref={audioElm}
                      src={s.stream}
                      autoPlay
                      loop
                    ></audio>
                    </div>
                  }
                  <button className="control" onClick={() => nextFunc(s.id)}> <SkipNextIcon /></button>
                  <div>
                    <button className="control">
                    {mute?<VolumeOffIcon/>:<VolumeMuteIcon/>}
                    </button>
                  
                  </div>
                  <input type='range'onChange={(evt)=>changeVolume(evt)}/>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PlayList;
