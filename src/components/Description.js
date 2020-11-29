import React from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Description() {
    // useLocation to get the description send by useHistory
    const { movie_id } = useParams();
    const [info, setInfo] = useState();

    const getInfo = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=be346b1af66bf3c4dbe37288ebe7f025&language=en-US`
        );
        setInfo(response.data);
    };
    // Upload description before the component load
    useEffect(() => getInfo());

    // Used on youtube display video by movie_id
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const onReady= (event) =>{
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    return (

        <div>
            {info &&
                <YouTube videoId={info.results[0].key} opts={opts}  onReady={onReady} />
            }
        </div>
    );
  

}

export default Description;