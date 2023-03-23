import React from "react";

const Birth = ({ handleChange }) => {
  return (
    <div className="list-group">
      <label For="Birth">생년월일</label>
      <input
        type="number"
        id="birth"
        name="birth"
        onChange={handleChange}
        placeholder="주민등록번호 앞자리만 입력 ex)230101"
        required
      />
    </div>
  );
};

export default Birth;
