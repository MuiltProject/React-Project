import { useState } from "react";
import "./index.styled.css";

function Join() {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const [pwCheck, setPwCheck] = useState();
  const [name, setName] = useState();
  const [birth, setBirth] = useState();
  const [phone1, setPhone1] = useState();
  const [phone2, setPhone2] = useState();
  const [phone3, setPhone3] = useState();

  const onHandleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onHandlePw = (e) => {
    setPw(e.target.value);
  };

  const onHandlePwCheck = (e) => {
    setPwCheck(e.target.value);
  };

  const onHandleName = (e) => {
    setName(e.target.value);
  };

  const onHandleBirth = (e) => {
    setBirth(e.target.value);
  };

  const onHandlePhone1 = (e) => {
    setPhone1(e.target.value);
  };
  const onHandlePhone2 = (e) => {
    setPhone2(e.target.value);
  };
  const onHandlePhone3 = (e) => {
    setPhone3(e.target.value);
  };

  const onHandleEmailCheck = () => {
    //이메일 중복체크, 차후에 구현
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="center-container">
      <form className="join-form" onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <div className="list-group">
          <label for="email">이메일</label>
          <br />
          <input
            id="email"
            type="email"
            value={email}
            placeholder="이메일 주소 입력, ex)abc1234@gmail.com"
            onChange={onHandleEmail}
          />
          <br />
        </div>
        <div className="list-group">
          <label for="pw">패스워드</label>
          <br />
          <input
            id="pw"
            type="password"
            minlength="8"
            maxlength="12"
            value={pw}
            placeholder="숫자와 알파벳만 사용, 8~12자리"
            onChange={onHandlePw}
          />
          <br />
        </div>
        <div className="list-group">
          <label>패스워드 확인</label>
          <br />
          <input
            id="pwcheck"
            type="password"
            minlength="8"
            maxlength="12"
            value={pwCheck}
            placeholder="비밀번호를 한 번 더 입력하세요"
            onChange={onHandlePwCheck}
          />
          <br />
          <span>{pw !== pwCheck && <p>비밀번호가 일치하지 않습니다!</p>}</span>
        </div>
        <div className="list-group">
          <label>이름</label>
          <br />
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={onHandleName}
          />
          <br />
        </div>
        <div className="list-group">
          <label>생년월일</label>
          <br />
          <input
            id="birth"
            type="text"
            value={birth}
            placeholder="주민등록번호 앞자리만 입력 ex)230101"
            onChange={onHandleBirth}
          />
          <br />
        </div>
        <div className="list-group">
          <label>연락처</label>
          <br />
          <input
            id="phone1"
            type="number"
            maxlength="3"
            value={phone1}
            placeholder="010"
            onChange={onHandlePhone1}
          />
          -
          <input
            id="phone2"
            type="number"
            maxlength="4"
            value={phone2}
            placeholder="1234"
            onChange={onHandlePhone2}
          />
          -
          <input
            id="phone3"
            type="number"
            maxlength="4"
            value={phone3}
            placeholder="5678"
            onChange={onHandlePhone3}
          />
          <br />
        </div>
        <div className="list-group">
          <button type="submit" className="register" onSubmit={handleSubmit}>
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default Join;
