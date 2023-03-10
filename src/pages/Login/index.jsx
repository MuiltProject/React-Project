import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.styled.css";

function Login() {
  const [inputEmail, setInputEmail] = useState();
  const [inputPw, setInputPw] = useState();
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handlePw = (e) => {
    setInputPw(e.target.value);
  };

  //DB 없으니까 일단 콘솔에서 확인, 나중에 DB랑 비교해서 로그인 패스워드 일치 여부 구현
  const onClick = () => {
    console.log("Login Click!");
    console.log("아이디 : ", inputEmail);
    console.log("비밀번호 : ", inputPw);
  };

  //회원가입 버튼 누르면 Join페이지로 이동
  const goJoin = () => {
    navigate("/Join");
  };

  return (
    <div className="centered-container">
      <form className="login-form">
        <h2>로그인</h2>
        <br />
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="text"
            id="inputEmail"
            onChange={handleEmail}
            onClick={onClick}
            value={inputEmail}
            placeholder="이메일"
          ></input>
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="inputPw">Password</label>
          <input
            type="password"
            id="inputPw"
            onChange={handlePw}
            onClick={onClick}
            value={inputPw}
            placeholder="패스워드"
          ></input>
          <br />
        </div>
        <div className="form-group">
          <button onClick={onClick} className="submit">
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
    </div>
  );
}

export default Login;
