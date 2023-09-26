function copyMail() {
    navigator.clipboard.writeText('nk.nickromero@gmail.com');
}

let popUp = document.getElementById("cookiePopup");

document.getElementById("acceptCookie").addEventListener("click", () => {
  let d = new Date();
  d.setMinutes(2 + d.getMinutes());
  document.cookie = "myCookieName=thisIsMyCookie; expires=" + d + ";";
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

const checkCookie = () => {
  let cookies = document.cookie.split(";").map(cookie => cookie.trim());
  if (cookies.includes("myCookieName=thisIsMyCookie")) {
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};

window.onload = () => {
  checkCookie();
};