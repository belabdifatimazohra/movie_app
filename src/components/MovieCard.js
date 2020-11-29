import React from "react";
import { Card} from "react-bootstrap";
import { useHistory } from "react-router-dom";

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
        onClick={() =>
          history.push(`/description/${movie_id}`)
        }
      >
        <Card.Img variant="top" src={srcImg} />
        <div>
          <div className="CardButton">
            <h5> {title}</h5>
          </div>
          <div className="CardButton">
            <h6>{year}</h6>
          </div>
        </div>
        <div className="rate">
          <span>&#x2729;</span>
          <span>&#x2729;</span>
          <span>&#x2729;</span>
          <span>&#x2729;</span>
          <span>&#x2729;</span>
        </div>
        <div className="CardDesc">
          <span style={{ textAlign: "start" }}>Read More</span>
          <span style={{ textAlign: "end" }}>TRAILER</span>
        </div>
      </Card>
    </div>
  );
}
export default MovieCard