import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import EmailInput from "./EmailInput";
import PasswordInput from "./PwInput";

function LoginForm() {
  const [inputEmail, setInputEmail] = useState();
  const [inputPw, setInputPw] = useState();
  const navigate = useNavigate();

  const handleEmailChange = (event) => setInputEmail(event.target.value);
  const handlePwChange = (event) => setInputPw(event.target.value);

  const login = () => {
    if (inputEmail === "" || inputPw === "") {
      alert("이메일과 비밀번호를 입력해주세요!");
      return;
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Email: ${inputEmail}\nPassword: ${inputPw}`);
  }
  /* 
function handelsSubmit (event) {
    event.preventDefault();
    axios.post("/member/login", {email, pw})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};
*/

  //회원가입 버튼 누르면 Join페이지로 이동
  const goJoin = () => {
    navigate("/Join");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <br />
      <div className="form-group">
        <EmailInput value={inputEmail} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <PasswordInput value={inputPw} onChange={handlePwChange} />
      </div>
      <div className="form-group">
        <button type="submit" onClick={login} className="submit">
          Login
        </button>
      </div>
      <div className="inline-group">
        <span>아직 회원이 아니신가요?</span>
        <button onClick={goJoin} className="join">
          회원가입
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
