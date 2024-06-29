const getHash = () => {
  return ( //slide???
    location.hash
      .slice(1)
      .toLocaleLowerCase()
      .split("/")[1] || "/"
  );

  // ["", "1", ""]
};

export { getHash };
