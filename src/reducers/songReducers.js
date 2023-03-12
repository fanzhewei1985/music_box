import { actionType } from "../helper"

const initial={
    rawSongList:[]
}
const songReducers=(state={initial},action)=>{
    let newState={...state}
switch(action.type){
    case actionType.ALL_SONGS:
    return {...state,rawSongList:action.payload}

    case actionType.SELECT_SONGS:
       newState=newState.rawSongList.map(data=>(data.id===action.payload? {...data,check:!data.check}:{...data,check:false}))
        // console.log(state,newState)
    return {...state,rawSongList:newState}
    case actionType.FAV_SONGS:
        
        newState=newState.rawSongList.map(s=>( s.id===action.payload? {...s,like:!s.like}:s ))
    return  {...state,rawSongList:newState}

    // case actionType.PAUSE_SONGS:
    //    newState=newState.rawSongList.map(data=>(data.id===action.payload? {...data,playing:false}:data))
    //     console.log(newState)
    //    return{
    //         ...state,rawSongList:newState
    //     }
    case actionType.PLAY_SONGS:
        
            newState=newState.rawSongList.map(data=>(data.id===action.payload? {...data,playing:!data.playing}:data))
             console.log(newState)
            return{
                 ...state,rawSongList:newState
             }
    case actionType.SEARCH_SONGS:
        return{
            ...state,rawSongList:action.payload
        }
    case actionType.SHOW_FAVLIST:
        return{
            ...state,rawSongList:action.payload
        }
    default:
        return state
}
}



export default songReducers