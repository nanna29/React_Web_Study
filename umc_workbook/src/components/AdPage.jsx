import React, { useState } from "react";
import Ad from "./Ad";

export default function AdPage() {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <>
      <div>{isClicked ? <Ad /> : null}</div>
      <button onClick={() => setIsClicked(!isClicked)}>광고 안보기</button>
    </>
  );
}
