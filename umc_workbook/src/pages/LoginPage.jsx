import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const LoginPageWrap = styled.div`
  margin-left: 10px;
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
  background-color: ${(props) => (props.disabledBG ? "#ccc" : "#22254b")};
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

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  const onChangeEmail = (event) => {
    const newEmail = event.target.value;
    setNewEmail(newEmail);
    if (!emailPattern.test(newEmail)) {
      //이메일 검사 통과 못했을 때
      setShowEmailError(true);
      setIsButtonDisabled(true);
    } else {
      //이메일 검사 통과 했을 때
      setShowEmailError(false);
      //이메일 검사 통과 + 패스워드 공란 아니면
      //console.log(newPassword);
      if (newPassword != "" && !showPwError) {
        //console.log("비번 공란 아니면");
        setIsButtonDisabled(false);
      }
    }
  };

  const onChangePW = (event) => {
    const newPassword = event.target.value;
    setNewPassword(newPassword);
    if (!pwPattern.test(newPassword)) {
      //비밀번호 검사 통과 못했을 때
      setShowPWError(true);
      setIsButtonDisabled(true);
    } else {
      //비밀번호 검사 통과 했을 때
      setShowPWError(false);
      if (newEmail != "" && !showEmailError) {
        //console.log("비번 공란 아니면");
        setIsButtonDisabled(false);
      }
    }
  };

  const onClickLoginBtn = (event) => {
    if (newEmail == "" || newPassword == "") {
      alert("이메일 주소나 비밀번호를 다시 확인해주세요");
    } else {
      //모든 조건이 들어맞고, 확인 버튼이 눌렸을 시에 실행
      console.log("제출");
      submitInfo();
    }
  };

  const submitInfo = async () => {
    try {
      const postData = {
        id: newEmail,
        pw: newPassword,
      };

      const response = await axios.post(apiURL, postData);
      console.log("응답:", response.data);
      console.log("상태코드:", response.status);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <LoginPageWrap>
      <h1>
        이메일과 비밀번호를 <br /> 입력해주세요
      </h1>
      <br />
      <h3 style={{ marginBottom: "10px" }}>이메일 주소</h3>
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

      <LoginButton disabledBG={isButtonDisabled} onClick={onClickLoginBtn}>
        확인
      </LoginButton>
    </LoginPageWrap>
  );
}
