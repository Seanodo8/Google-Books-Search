import React from "react";
import "./style.css";

function Result(props) {
  const authors = props.authors
    ? props.authors
        .toString()
        .split(",")
        .join(", ")
    : "Not Listed";

  return (
    <div className="container">
      <div className="col s12 m7">
        <h2 className="header">{props.title}</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src={props.picture} alt="Book Cover" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{props.description}</p>
              <p>By {authors}</p>
            </div>
            <div className="card-action">
              <a href={props.info}>More on this Book</a>
              <button
                onClick={props.saveBook}
                type="button"
                className="saveBtn"
              >
                Save this Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
