import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useParams, useNavigate } from "react-router-dom";

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
  const { state } = useLocation(); // 현재 페이지의 URL 정보를 가져오는 데 사용

  useEffect(() => {
    if (state == 200) {
      setButtonTxt("로그아웃");
      setText("환영합니다!");
      isLoggedIn == false;
    } else {
      setButtonTxt("로그인");
      setText("로그인 해주세요!");
    }
  }, [state]);

  const onClickLogin = () => {
    if (isLoggedIn && state == 200) {
      //로그인 되어있을 때
      isLoggedIn == true;
      navigate(`/`);
    } else {
      console.log("Dd");
      alert("로그아웃 되었습니다");
      navigate(`/login-page`);
    }
  };

  return (
    <>
      <LoginWrap>
        <button
          onClick={() => {
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
