import React from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Description() {
    // useLocation to get the description send by useHistory
    const { movie_id } = useParams();
    const [video, setvideo] = useState();
    const [details, setDetails] = useState();

    const getDetails = async () => {
        //Get the video with /Video and id
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=be346b1af66bf3c4dbe37288ebe7f025&language=en-US`
        );
        setvideo(response.data);
        // Get details using the movie id
        const responseD = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=be346b1af66bf3c4dbe37288ebe7f025&language=en-US`
        );
        setDetails(responseD.data);
    };
    // Upload description before the component load
    useEffect(() => getDetails(), []);

    // Used on youtube display video by movie_id
    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };
    return (
        <div className="description">
            {video && details &&(
                <div className="detail">
                    {/* Video  */}
                    <div>
                        <YouTube
                            videoId={video.results[0].key}
                            opts={opts}
                            onReady={onReady}
                        />
                    </div>
                    {/* Details */}
                    <div>
                        <h2 style={{color: "#17a2b8"}}>{details.original_title}</h2>
                        <h6>{details.release_date}</h6>
                        <p> {details.overview} </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Description;
