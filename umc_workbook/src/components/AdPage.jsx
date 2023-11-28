import React, { useState } from "react";
import Ad from "./Ad";

export default function AdPage() {
  const [isShow, setIsShow] = useState(true);
  const [showAdText, setShowAdText] = useState("광고 안보기");
  return (
    <>
      {/* true면 광고 보여주기 */}
      <div>{isShow ? <Ad /> : null}</div>

      <button
        onClick={() => {
          setIsShow(!isShow);
          console.log(isShow);
          if (isShow) {
            setShowAdText("광고 보기");
          } else {
            setShowAdText("광고 안보기");
          }
        }}
      >
        {showAdText}
      </button>
    </>
  );
}
