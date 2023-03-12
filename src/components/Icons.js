import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const CheckIcon=({check,playing,...rest})=>{
    return (
        <div {...rest}>
{check?<CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
</div>)
}

const FavIcon=({like,...rest})=>{

    return(
<div {...rest}>
    {like?<FavoriteIcon/>:<FavoriteBorderIcon/>}
</div>
    )
}


export  {CheckIcon,FavIcon}