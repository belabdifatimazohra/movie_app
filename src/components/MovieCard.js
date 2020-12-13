import React from "react";
import { Card} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function MovieCard({movie_id, title, year, srcImg }) {
  const history = useHistory();
  const [value, setValue] = React.useState(0);

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
         <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name={movie_id}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
              }}
                  
        />
      </Box>
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