import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

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
        style={{
          width: "16rem",
          height: "550px",
          margin: "40px",
          backgroundColor: "#212529",
          position: "relative",
        }}
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
