const EMAIL_REGEX =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const PHONE_NUMBER_REGEX = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

export { EMAIL_REGEX, PHONE_NUMBER_REGEX };
