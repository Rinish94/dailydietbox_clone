let data = [
  {
    id: "1",
    email: "rinish@gmail.com",
    password: "masai",
    type: "user",
  },
  {
    id: "2",
    email: "ajay@gmail.com",
    password: "masai",
    type: "user",
  },
  {
    id: "3",
    email: "kamlendra@gmail.com",
    password: "masai",
    type: "user",
  },
  {
    id: "4",
    email: "aleem@gmail.com",
    password: "masai",
    type: "user",
  }
];
let loginData = JSON.parse(localStorage.getItem("loginData")) || [];

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
});

function handleSubmit() {
    event.preventDefault();
    
    let form = new FormData(event.target);
    let email = form.get("email");
    //console.log(email)
    let password = form.get("password");
   // console.log("object")
  let userDetails = {
    email,
    password,
  };
  if (authCheck(userDetails)) {
    const { email,password,type } = authCheck(userDetails);
    const time = new Date().toLocaleTimeString();

    const payload = {
      email,
      password,
      type,
      time,
    };
    loginData = [...loginData, payload];
    saveToLocalStorage("loginData", loginData);
    redirect(payload);
  } else {
    myAlert();
  }
}
function authCheck(input) {
  return data.find(
    (user) => user.email === input.email && user.password === input.password
  );
}
function saveToLocalStorage(name, value) {
  if (typeof value !== "string") {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    localStorage.setItem(name, value);
  }
}

function redirect(currentUser) {
  if (currentUser.type === "user") {
    alert("User Logged in Successfully!!!");
    location = "Order_Page.html";
  }
}

function myAlert() {
  alert("Please Enter Valid Credentials!!");
}
