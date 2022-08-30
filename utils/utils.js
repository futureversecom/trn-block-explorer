export const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const formatAddress = (address, len = 6) => {
  return (
    address.substring(0, len) +
    " ... " +
    address.substring(address.length - len, address.length)
  );
};
