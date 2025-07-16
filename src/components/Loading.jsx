import React from "react";
import { Mosaic } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className=" w-100 d-flex justify-content-center align-items-center">
      <Mosaic
        color="#ea3434"
        size="medium"
        text=""
        textColor=""
        className="text-success"
      />
    </div>
  );
};

export default Loading;
