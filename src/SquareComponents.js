import React from "react";

const SquareComponents = (props) => {
  const classes = props.className ? `${props.className} square` : `square`;
  return (
    <span
      className={classes + (props.state === "X" ? ` fc-aqua` : ` fc-white`)}
      onClick={() => props.onClick(props.index)}
    >
      {props.state}
    </span>
  );
};

export default SquareComponents;
