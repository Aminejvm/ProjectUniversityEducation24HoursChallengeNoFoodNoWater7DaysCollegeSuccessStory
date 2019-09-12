const truncate = (str, ending = 20, trunc = "...") =>
  str.length > ending ? str.substring(0, ending) + trunc : str;

export default truncate;
