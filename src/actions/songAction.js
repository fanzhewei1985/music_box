import { actionType, APIURL } from "../helper"
import axios from 'axios'

      
const fetchAllSongs=()=>dispatch=> {

    // axios.get(APIURL)
    axios.get('response.json')
    .then(res=>{let {data: {data}} = res
        let allSongs = data.map((s) => {
            return (
                {...s, like: false, playing: true, check: false}
            )
        })
        // console.log(allSongs)
        dispatch({
            type: actionType.ALL_SONGS,
            payload: allSongs
        })
    }).catch(err=>console.log(err))}

const selectSongs=(id)=>{
   console.log(id)
   return(
      {type:actionType.SELECT_SONGS,
      payload:id}
   )
}

const favSongs=(id)=>{
   return(
   { type:actionType.FAV_SONGS,
      payload:id}

   )
}
const searchSong=(filterList)=>{
    console.log(111)
return{
    type:actionType.SEARCH_SONGS,
    payload:filterList
}
}
const playPauseToggle=(id)=>{

    return{
        type:actionType.PLAY_SONGS,
        payload:id
    }
}
const showFav=(favs)=>{
   
   return{ type:actionType.SHOW_FAVLIST,
    payload:favs}
}
export default {fetchAllSongs,selectSongs,favSongs,playPauseToggle,searchSong,showFav}