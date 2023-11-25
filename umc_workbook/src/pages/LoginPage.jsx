import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPageWrap = styled.div`
  margin-top: 30px;
  margin-left: 30px;
`;
const InputField = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  color: black;
  padding-left: 15px;
`;
const LoginButton = styled.button`
  width: 500px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#22254b")};
  color: white;
  margin-top: 20px;
`;
const ErrorMessage = styled.span`
  display: ${(props) => (props.Error ? "block " : "none")};
  color: red;
  margin-top: 5px;
`;

export default function LoginPage() {
  const apiURL = "/user/login";

  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [showEmailError, setShowEmailError] = useState(false);
  const [showPwError, setShowPWError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loadingTxt, setLoadingTxt] = useState("");

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  const navigate = useNavigate();
  const onChangeEmail = (event) => {
    const newEmail = event.target.value;
    setNewEmail(newEmail);
    if (newPassword != "") {
      setIsButtonDisabled(false);
    }
    // if (!emailPattern.test(newEmail)) {
    //   //이메일 검사 통과 못했을 때
    //   setShowEmailError(true);
    //   setIsButtonDisabled(true);
    // } else {
    //   //이메일 검사 통과 했을 때
    //   setShowEmailError(false);
    //   //이메일 검사 통과 + 패스워드 공란 아니면
    //   if (newPassword != "" && !showPwError) {
    //     //버튼 비활성화 해제
    //     setIsButtonDisabled(false);
    //   }
    // }
  };

  const onChangePW = (event) => {
    const newPassword = event.target.value;
    setNewPassword(newPassword);
    if (newEmail != "") {
      setIsButtonDisabled(false);
    }
    // if (!pwPattern.test(newPassword)) {
    //   //비밀번호 검사 통과 못했을 때
    //   setShowPWError(true);
    //   setIsButtonDisabled(true);
    // } else {
    //   //비밀번호 검사 통과 했을 때
    //   setShowPWError(false);
    //   //비번 검사 통과 + 이메일 공란 아니면
    //   if (newEmail != "" && !showEmailError) {
    //     //버튼 비활성화 해제
    //     setIsButtonDisabled(false);
    //   }
    // }
  };

  const onClickLoginBtn = async () => {
    if (newEmail == "" || newPassword == "") {
      alert("아이디나 비밀번호를 다시 확인해주세요");
    } else {
      // 모든 조건이 들어맞고, 확인 버튼이 눌렸을 시에 실행
      //console.log("제출");
      const response = await submitInfo(); // 비동기로 실행
      //console.log(response);
      setLoadingTxt("Loading...");
      // 1.5초동안 실행
      setTimeout(() => {
        setIsButtonDisabled(false); // 버튼 활성화
        setLoadingTxt(""); // "Loading..." 제거
        if (response && response.status === 200) {
          // 비밀번호 & 아이디 값 맞으면 실행

          navigate(`/`, {
            state: `${response.status}`,
          });
        } else {
          alert("아이디나 비밀번호를 다시 확인해주세요");
        }
      }, 1500);
    }
  };

  const submitInfo = async () => {
    try {
      const postData = {
        id: newEmail,
        pw: newPassword,
      };
      setIsButtonDisabled(true); // axios를 통신하는 동안 버튼이 클릭되지 않도록
      const response = await axios.post(apiURL, postData);
      //console.log("응답:", response.data, "상태코드:", response.status);
      localStorage.clear();
      localStorage.setItem("id", response.data.result.userId);
      localStorage.setItem("token", response.data.result.AccessToken);
      return response; // response 객체 반환
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <LoginPageWrap>
      <h1>아이디와 비밀번호를 입력해주세요</h1>
      <br />
      <h3 style={{ marginBottom: "10px" }}>아이디</h3>
      <InputField type="email" onChange={onChangeEmail} />
      <br />
      <ErrorMessage Error={showEmailError}>
        올바른 이메일을 입력해주세요
      </ErrorMessage>
      <br />
      <h3 style={{ marginBottom: "10px" }}>비밀번호</h3>
      <InputField
        type="password"
        onChange={onChangePW}
        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
      ></InputField>
      <ErrorMessage Error={showPwError}>
        올바른 비밀번호를 입력해주세요
      </ErrorMessage>
      <br />
      <LoginButton disabled={isButtonDisabled} onClick={onClickLoginBtn}>
        확인
      </LoginButton>

      <div>
        <br />
        {loadingTxt}
      </div>
    </LoginPageWrap>
  );
}
