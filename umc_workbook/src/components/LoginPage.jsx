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
`;

const ErrorMessage = styled.span`
  display: ${(props) => (props.Error ? "block " : "none")};
  color: red;
`;

export default function LoginPage() {
  const [showEmailError, setShowEmailError] = useState(false);
  const [isPwError, setIsPWError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  const onChangeEmail = (event) => {
    const newEmail = event.target.value;

    if (!newEmail || !emailPattern.test(newEmail)) {
      setShowEmailError(true);
      setIsButtonDisabled(true);
    } else if (!(!newEmail || !emailPattern.test(newEmail)) && isPwError) {
      setShowEmailError(false);
      setIsButtonDisabled(false);
      console.log("setShowEmailError");
    }
  };

  const onChangePW = (event) => {
    const newPassword = event.target.value;

    if (!newPassword || !pwPattern.test(newPassword)) {
      setIsPWError(true);
      setIsButtonDisabled(true);
    } else if (
      !(!newPassword || !pwPattern.test(newPassword)) &&
      showEmailError
    ) {
      setIsPWError(false);
      setIsButtonDisabled(false);
      console.log("setIsPWError");
    }
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
        onChange={onChangePW}
        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
      ></InputField>
      <br />
      <br />
      <LoginButton
        disabled={isButtonDisabled}
        onClick={() => console.log("클릭")}
      >
        확인
      </LoginButton>
    </LoginPageWrap>
  );
}
