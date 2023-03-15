const MEMBER_RULE = {
  NAME: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 20,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 16,
  },
  PHONE_NUMBER: {
    MIN_LENGTH: 12,
    MAX_LENGTH: 13,
  },
  ADDRESS: {
    RECIPIENT: {
      MIN_LENGTH: 1,
      MAX_LENGTH: 20,
    },
    ZIP_CODE: {
      MAX_LENGTH: 5,
    },
  },
};

export { MEMBER_RULE };
