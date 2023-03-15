import { MEMBER_RULE } from "./rule";

const CLIENT_ERROR_MESSAGE = {
  INVALID_PASSWORD: `비밀번호는 최소${MEMBER_RULE.PASSWORD.MIN_LENGTH}자에서 ${MEMBER_RULE.PASSWORD.MAX_LENGTH}자 사이여야 합니다.`,
  INVALID_EMAIL: "올바르지 않은 이메일 형식입니다.",

  INVALID_PHONE_NUMBER: {
    BASE: "올바르지 않은 전화번호 형식입니다.",
    LENGTH: `전화번호는 최소${MEMBER_RULE.PHONE_NUMBER.MIN_LENGTH}자에서 ${MEMBER_RULE.PHONE_NUMBER.MAX_LENGTH}자 사이여야 합니다.`,
  },
  CHANGE: {
    INVALID_CONFIRM_PASSWORD: "비밀번호 재확인이 일치하지 않습니다.",
  },
};

export { CLIENT_ERROR_MESSAGE };
