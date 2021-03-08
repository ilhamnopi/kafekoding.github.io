// Show hide Password
const password = document.getElementById("password");
const button_show_hide = document.getElementById("button_show_hide");

function showHide() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    button_show_hide.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    button_show_hide.classList.remove("hide");
  }
}
//

