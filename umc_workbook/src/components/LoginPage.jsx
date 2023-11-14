import React, { useState } from "react";
import styled, { css } from "styled-components";
const LoginPageWrap = styled.div`
  margin-left: 10px;
`;
const InputField = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.5);
`;
const LoginButton = styled.button`
  width: 500px;
  height: 50px;
  border-radius: 25px;
  background-color: #22254b;
  color: white;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
    `}
`;

const ErrorMessage = styled.span`
  display: ${(props) => (props.Error ? "block " : "none")};
  color: red;
`;

const PWMessage = styled.span`
  top: ${(props) => (props.Error ? "41%" : "38%")};
  position: absolute;
  left: 20px;
  color: gray;
`;

export default function LoginPage() {
  const [showEmailError, setShowEmailError] = useState(false);
  const [isPwError, setIsPWError] = useState(false);
  const [password, setPassword] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  const onChangeEmail = (event) => {
    const newEmail = event.target.value;

    if (!newEmail) {
      setShowEmailError(true); // 이메일이 비어 있으면 에러 표시
    } else if (!emailPattern.test(newEmail)) {
      setShowEmailError(true); // 이메일 형식이 유효하지 않으면 에러 표시
    } else {
      setShowEmailError(false); // 이메일이 유효하면 에러 해제
      console.log("setShowEmailError");
    }
  };

  const onChangePW = (event) => {
    const newPassword = event.target.value;

    if (!newPassword) {
      setIsPWError(true);
    } else if (!pwPattern.test(newPassword)) {
      setIsPWError(true);
    } else {
      setIsPWError(false);
      console.log("setIsPWError");
    }

    setPassword(newPassword);
    setShowPlaceholder(newPassword === "");
  };

  return (
    <LoginPageWrap>
      <h1>
        이메일과 비밀번호를 <br /> 입력해주세요
      </h1>
      <br />
      <h3>이메일 주소</h3>
      <InputField type="email" onChange={onChangeEmail} />
      <br />
      <ErrorMessage Error={showEmailError}>
        올바른 이메일을 입력해주세요
      </ErrorMessage>
      <br />
      <br />
      <h3>비밀번호</h3>
      <InputField
        type="password"
        value={password}
        onChange={onChangePW}
      ></InputField>
      {showPlaceholder && (
        <PWMessage Error={showEmailError}>
          영문, 숫자, 특수문자 포함 8자 이상
        </PWMessage>
      )}
      <br />
      <br />
      <LoginButton disabled={showEmailError || isPwError}>확인</LoginButton>
    </LoginPageWrap>
  );
}
