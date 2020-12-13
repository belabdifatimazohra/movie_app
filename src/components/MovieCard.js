import React from "react";
import { Card} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Rating from "./Rating"

function MovieCard({movie_id, title, year, srcImg }) {
  const history = useHistory();
  return (
    <div>
      <Card
        style={{
          width: "16rem",
          height: "550px",
          margin: "40px",
          backgroundColor: "#212529",
          position: "relative",
        }}
      
      >
        <Card.Img variant="top" src={srcImg}   onClick={() =>
          history.push(`/movies/${movie_id}`)
        }/>
        <div>
          <div className="CardButton">
            <h5> {title}</h5>
          </div>
          <div className="CardButton">
            <h6>{year}</h6>
          </div>
        </div>
        <div className="rate">
          {/* <span>&#x2729;</span>
          <span>&#x2729;</span>
          <span>&#x2729;</span>
          <span>&#x2729;</span>
          <span>&#x2729;</span> */}
          <Rating />
        </div>
        <div className="CardDesc">
          <span style={{ textAlign: "start" }}   onClick={() =>
          history.push(`/movies/${movie_id}`)
        }>Read More</span>
          <span style={{ textAlign: "end" }}  onClick={() =>
          history.push(`/movies/${movie_id}`)
        }>TRAILER</span>
        </div>
      </Card>
    </div>
  );
}
export default MovieCard