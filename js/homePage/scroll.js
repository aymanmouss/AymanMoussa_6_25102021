const linkMain = document.getElementById("link-main");
let scrollid = null;
export default scrollid = () => {
  if (window.scrollY >= 20) {
    linkMain.style.display = "block";
  } else {
    linkMain.style.display = "none";
  }
};
window.addEventListener("scroll", scrollid);
