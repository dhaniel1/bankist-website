export const scrollintoView = (href: string) => {
  // console.log("href", href);
  const element = document.querySelector(href);
  if (element) {
    // console.log("here");
    element.scrollIntoView({ behavior: "smooth" });
  }
};
