import { useDispatch } from 'react-redux'
import {CheckIcon} from './Icons'
import {FavIcon} from './Icons'
import './SongRaw.scss'
import actions from '../actions'

const SongRaw=({s})=>{
const dispatch=useDispatch()
// console.log(s)
return(
    <div className='songsInfo'>
 <CheckIcon check={s.check} playing={s.playing} onClick={()=>dispatch(actions.songAction.selectSongs(s.id))}/>
 <img src={s.cover}/>
 <span className='artist'>{s.artist}</span>
 <span className='title'>{s.title}</span>
 <span>{s.length}</span>
 <FavIcon like={s.like} onClick={()=>{console.log('click')
    dispatch(actions.songAction.favSongs(s.id))}}/>
</div>
)
}

export default SongRaw

 