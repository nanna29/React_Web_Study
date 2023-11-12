import React from "react";
import AdImg from "../img/Ad.svg";

export default function Ad() {
  return (
    <>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectfit: "cover",
        }}
        src={AdImg}
      />
    </>
  );
}
