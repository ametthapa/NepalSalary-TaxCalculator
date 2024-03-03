import React from "react";
import Button from "@mui/material/Button";
import "./HomePage.css";
import FirstBlock from "../component/FirstBlock";

const HomePage = () => {
  return (
    <div className="container">
      <div className="text-3xl font-bold text-center p-4">
        NEPAL SALARY TAX CALCULATOR
      </div>
      <div>
        <FirstBlock />
      </div>
      <Button variant="contained">Hello world</Button>
    </div>
  );
};
export default HomePage;
