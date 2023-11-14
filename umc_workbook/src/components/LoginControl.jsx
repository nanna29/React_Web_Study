import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginWrap = styled.div`
  margin-left: 20px;
  > button {
    width: 80px;
    height: 30px;
    margin-top: -2px;
    border-radius: 10px;
  }
  display: flex;
`;

const Text = styled.div`
  margin-left: 20px;
  color: white;
`;

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ButtonTxt, setButtonTxt] = useState("로그인");
  const [text, setText] = useState("로그인 해주세요!");

  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate(`/loginPage`);

    // if (isLoggedIn == false) {

    // }
  };

  const handleChangeValue = () => {
    if (isLoggedIn) {
      setButtonTxt("로그인");
      setText("로그인 해주세요!");
    }
    // 로그아웃 전환 관련 주석 처리
    // else {
    //   setButtonTxt("로그아웃");
    //   setText("환영합니다!");
    // }
  };
  return (
    <>
      <LoginWrap>
        <button
          onClick={() => {
            // 로그아웃 전환 관련 주석 처리
            //setIsLoggedIn(!isLoggedIn);
            handleChangeValue();
            onClickLogin();
          }}
        >
          {ButtonTxt}
        </button>
        <Text>{text}</Text>
      </LoginWrap>
    </>
  );
}
