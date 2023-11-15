import React, { useState } from "react";
import styled from "styled-components";

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
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPwError, setShowPWError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

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

      <LoginButton
        disabled={isButtonDisabled}
        onClick={() => console.log("클릭")}
      >
        확인
      </LoginButton>
    </LoginPageWrap>
  );
}
