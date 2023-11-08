import React from "react";
import Ad from "../Ad.svg";

export default function AdPage() {
  return (
    <>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectfit: "cover",
        }}
        src={Ad}
      />
      <button>광고 안보기</button>
    </>
  );
}
