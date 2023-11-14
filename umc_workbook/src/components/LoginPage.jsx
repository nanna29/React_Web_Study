import React from "react";
import styled from "styled-components";
const LoginPageWrap = styled.div`
  margin-left: 10px;
`;
const InputField = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 10px;
`;

export default function LoginPage() {
  return (
    <LoginPageWrap>
      <h1>
        이메일과 비밀번호를 <br /> 입력해주세요
      </h1>
      <br />
      <h3>이메일 주소</h3>
      <InputField type="email" />
      <br />
      <span>올바른 이메일을 입력해주세요</span>
      <br />
      <br />
      <h3>비밀번호</h3>

      <InputField type="password" value="영문, 숫자, 특수문자 포함 8자 이상" />
      <br />
      <button>확인</button>
    </LoginPageWrap>
  );
}
