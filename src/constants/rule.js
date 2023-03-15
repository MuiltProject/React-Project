const MEMBER_RULE = {
  NAME: {
    MAX_LENGTH: 20,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 16,
  },
  PHONE_NUMBER: {
    MAX_LENGTH: 13,
  },
  ADDRESS: {
    ZIP_CODE: {
      MAX_LENGTH: 5,
    },
  },
};

export { MEMBER_RULE };
