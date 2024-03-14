const constraints = {
  us: [
    /^(\d{5}$)|(^\d{5}-\d{4})$/,
    "ZIPs must have exactly 5 digits or a hyphen with 4 more digits: e.g. 76342",
  ],
  fr: [
    /^\d{5}$/,
    "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
  ],
  de: [
    /^\d{5}$/,
    "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
  ],
  rs: [
    /^(\d{3}-\d{3})/,
    "Russia ZIPs must have exactly 6 digits, ",
  ],
};

export default constraints;
