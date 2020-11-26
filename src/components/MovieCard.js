import React from "react";
import { Card } from "react-bootstrap";

export default function MovieCard({ title, year, srcImg }) {
  const star = (rating) => {
    let Array = [];
    for (let i = 1; i <= 5; i++) {
      while (i < rating) {
        Array.push(
          <span key={i} className="redStar">
            &#x2729;
          </span>
        );
      }
      Array.push(<span key={i}>&#x2729;</span>);
      }
      console.log(Array);
    return Array;
  };
  return (
    <div>
      <Card
        style={{ width: "15rem",height:"550px", margin: "40px", backgroundColor: "#212529" }}
      >
        <Card.Img
          variant="top"
          src={srcImg}
        />
        {console.log(srcImg)}
        <div className="CardButton">
          <h4> {title}</h4>
        </div>
        <div className="CardButton">
          <h5>{year}</h5>
        </div>
        <div className="CardButton">
          <div>
            <a href="#">Read More</a>
          </div>

          <div>
            <a href="#">WATCH TRAILER</a>
          </div>
        </div>
      </Card>
    </div>
  );
}
