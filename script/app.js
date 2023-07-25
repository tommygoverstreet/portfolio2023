// Assign Symbols to Query Selectors
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const users = [
  {
    username: "userName",
    password: "password"
  },
  {
    username: "user1",
    password: "password"
  }
];
const loginToggle = () => {
  $("#loginButtons").classList.toggle("hide");
  $("#loginTemplate").classList.toggle("hide");
};

const menuToggle = () => {
  $("#mobileNav").classList.toggle("hide");
  $("#loginTemplate").classList.add("hide");
  $("#loginButtons").classList.toggle("hide");
  $("#bar1").classList.toggle("change1");
  $("#bar2").classList.toggle("change2");
  $("#bar3").classList.toggle("change3");
};

const login = () => {
  const userName = $("#userName").value;
  const password = $("#password").value;

  for (i = 0; i < users.length; i++) {
    if (userName == users[i].username && password == users[i].password) {
      console.log(userName + " is logged in succesfully");
    } else {
      alert("Please correct username and/or password.");
    }
  }
};
