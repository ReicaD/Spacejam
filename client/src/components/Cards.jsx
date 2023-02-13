import react, { useState, useEffect } from "react";
// import styled from "styled-components";

function Cards({ posts }) {
  const [texts, setTexts] = useState("See All about Spacejam!");
  const [newPost, setNewPost] = useState([]);

  const handleText = () => {
    // return setTexts();
  };

  useEffect(() => {
    setNewPost(posts);
  }, []);

  return (
    <div>
      {newPost.map((p, id) => (
        <div className="card" key={id}>
          <div className="card-header">
            <h1>{p.author}</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">{p.description}</h5>
            <p className="card-text"></p>
            <a
              href="https://www.nasa.gov/feature/experiments-to-unlock-how-human-bodies-react-to-long-space-journeys"
              className="btn btn-danger"
            >
              Go
            </a>
          </div>
        </div>
      ))}
      {/* <div className="card-count">
        <div className="card-header">
          <h1>About HRP</h1>
        </div>
        <div className="card-body">
          <h5 className="card-title">Sensorimotor</h5>
          <p className="card-text">
            {texts}
            The Human Research Program (HRP) is dedicated to discovering the
            best methods and technologies to support safe, productive human
            space travel.
          </p>
          <a
            href="https://www.nasa.gov/feature/experiments-to-unlock-how-human-bodies-react-to-long-space-journeys"
            className="btn btn-danger"
          >
            Go
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Cards;
