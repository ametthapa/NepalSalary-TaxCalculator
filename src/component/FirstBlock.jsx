import React, { useState } from "react";

const FirstBlock = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return <></>;
};
export default FirstBlock;
