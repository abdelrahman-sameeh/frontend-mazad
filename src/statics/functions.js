import { socket } from "../customHooks/sockets/InitialSocket";

if (localStorage.filterProductPage)
  localStorage.removeItem("filterProductPage");
if (localStorage.productsPagination)
  localStorage.removeItem("productsPagination");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const secondsElms = document.querySelectorAll(".seconds");
    const minutesElms = document.querySelectorAll(".minutes");
    const hoursElms = document.querySelectorAll(".hours");
    const daysElms = document.querySelectorAll(".days");

    secondsElms.forEach((sec) => {
      setInterval(() => {
        if (+sec.innerHTML > 0) {
          sec.innerHTML = --sec.innerHTML;
        } else {
          sec.innerHTML = 59;
        }
        if (sec.innerHTML == 0) {
          minutesElms.forEach((min) => {
            min.innerHTML = +min.innerHTML > 0 ? --min.innerHTML : 0;
            if (+min.innerHTML === 0) {
              hoursElms.forEach((hour) => {
                hour.innerHTML = +hour.innerHTML > 0 ? --hour.innerHTML : 0;
                if (+hour.innerHTML === 0) {
                  daysElms.forEach((day) => {
                    day.innerHTML = +day.innerHTML > 0 ? --day.innerHTML : 0;
                  });
                }
              });
            }
          });
        }
      }, 1000);
    });
  }, 200);
});

if (window.location.pathname.startsWith("/mazad/")) {
  setTimeout(() => {
    const messagesElm = document.querySelector(".messages");
    messagesElm.scrollTo({ top: messagesElm.scrollHeight, behavior: "smooth" });
  }, 1000);
}

socket.on("receivedMazadValue", (message) => {
  const messagesElm = document.querySelector(".messages");
  const myId = localStorage.user ? JSON.parse(localStorage.user)._id : null;

  messagesElm.innerHTML += `
  <div
    class="message ${myId === message.sender._id ? "me" : "other"}"
  >
    <div class="sender"> ${message.sender.name} </div>
    <div class="content"> ${message.content} </div>
  </div>
  `;

  document.querySelector(".my-spinner").remove();

  if (window.location.pathname.startsWith("/mazad/")) {
    messagesElm.scrollTo({ top: messagesElm.scrollHeight, behavior: "smooth" });
  }
});

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("loading-page") ||
    e.target.classList.contains("loading-comp")
  ) {
    e.target.classList.add("d-none");
  }
});
