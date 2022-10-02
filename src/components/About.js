import React from "react";
import TodoList from "./TodoList";

const About = () => {
  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "48px" }}
      >
        <h3 className="header">About</h3>
        <p className="text">
          We provide image search engine where you can view your favourite
          images by simply typing the name or category of your favourite image.
          Have a spectacular gallery of stunning photos of your choice.
        </p>
      </div>
      <TodoList />
    </div>
  );
};

export default About;
