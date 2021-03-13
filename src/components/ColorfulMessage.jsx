import React from "react";

const ColorfulMessage = (props) => {
  console.log("カラフル");
  const { color, fontSize, children } = props;
  const contentStyle = {
    color,
    fontSize
  };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
