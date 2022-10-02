import React from "react";
import "../styles/ImageList.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <figure className="image-item" key={image.id}>
        <img
          className="image"
          key={image.id}
          src={image.webformatURL}
          alt={image.type}
        />
      </figure>
    );
  });
  const text = document.querySelector(".search-text");

  const displayLoader = () => {
    text.style.display = "none";
    return (
      <div className="ui segment action-display">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading ...</div>
        </div>
        <p></p>
      </div>
    );
  };

  const displayError = () => {
    text.style.display = "none";
    return (
      <div className="ui negative message action-display">
        <i className="close icon"></i>
        <div className="header">
          We're sorry we can't find what you are looking for!
        </div>
        <p>{props.errorMsg}</p>
      </div>
    );
  };
  return (
    <div className="ui segment images">
      <h3 className="search-text">Search above to view favourite images.</h3>
      {props.isLoading
        ? displayLoader()
        : props.isError
        ? displayError()
        : images}
    </div>
  );
};

export default ImageList;
