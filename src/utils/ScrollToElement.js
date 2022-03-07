const ScrollToElement = (target, ref) => {
  if (target === "skills") {
    ref.current.scrollIntoView({ behavior: "smooth" });
  } else if (target === "education") {
    ref.current.scrollIntoView({ behavior: "smooth" });
  } else if (target === "projects") {
    ref.current.scrollIntoView({ behavior: "smooth" });
  } else {
    throw new Error(`Input Ref ${target} does not exist or is not a string`);
  }
};

export default ScrollToElement;
