const b = () => {
  ({
    a: 2,
  });
};

const h = () => {
  const { a } = b();
};
