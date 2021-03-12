
//meal photos animation starts here
let mealImg = document.querySelectorAll('#mealContain img')

mealImg.forEach((val, ind) => {
    if (ind == 0) {
        val.addEventListener('mouseover', () => {
            val.src = "https://static.wixstatic.com/media/f27f84fe51575f846dfbef189dfa78f2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/f27f84fe51575f846dfbef189dfa78f2.webp"
        })
        val.addEventListener('mouseleave', () => {
            val.src = "https://static.wixstatic.com/media/dda10aa3539a4e608e1484381662b288.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/dda10aa3539a4e608e1484381662b288.webp"
        })
    }
    if (ind == 1) {
        val.addEventListener('mouseover', () => {
            val.src = "https://static.wixstatic.com/media/7d8e8d_de714dd5cfcc420d9d7323d681a659c6~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_de714dd5cfcc420d9d7323d681a659c6~mv2.webp"
        })
        val.addEventListener('mouseleave', () => {
            val.src = "https://static.wixstatic.com/media/ac65a6e34704466bae682286d73b77ad.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/ac65a6e34704466bae682286d73b77ad.webp"
        })
    }
    if (ind == 2) {
        val.addEventListener('mouseover', () => {
            val.src = "https://static.wixstatic.com/media/f4044f8dd064490ea95eb9f86d56afb6.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/f4044f8dd064490ea95eb9f86d56afb6.webp"
        })
        val.addEventListener('mouseleave', () => {
            val.src = "https://static.wixstatic.com/media/93988f5222a942969267e56aa4cb525c.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/93988f5222a942969267e56aa4cb525c.webp"
        })
    }
    if (ind == 3) {
        val.addEventListener('mouseover', () => {
            val.src = "https://static.wixstatic.com/media/7d8e8d_2be4e3c7130347129b227d341942eb89~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_2be4e3c7130347129b227d341942eb89~mv2.webp"
        })
        val.addEventListener('mouseleave', () => {
            val.src = "https://static.wixstatic.com/media/7d8e8d_1ab8416a19584e35b9ff249d3883eeb3~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_1ab8416a19584e35b9ff249d3883eeb3~mv2.webp"
        })
    }
})
//meal photos animation ends here

//cart Item counter starts here
let itemCount = document.querySelector('text')
let add = document.getElementById('add')
let del = document.getElementById('del')

setInterval(() => {
    if (localStorage.getItem('itemCount') != null) {
        itemCount.innerHTML = localStorage.getItem('itemCount')
    } else {
        itemCount.innerHTML = 0
    }
}, 200)

add.addEventListener('click', () => {
    items = Number(itemCount.innerHTML)
    items++
    localStorage.setItem('itemCount', items)
})

del.addEventListener('click', () => {
    items = Number(itemCount.innerHTML)
    if (items != 0) {
        items--
        localStorage.setItem('itemCount', items)
    }
})
//cart Item counter starts here


//CHAT BOX starts here
function talk() {
    let know = {
      Hi:
        "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
      hi:
        "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
      HELLO:
        "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
      hello:
        "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
      "How are you": "Good 😊",
      "how are you": "Good 😊",
      shakes: "Which flavour you want to buy?",
      vanilla:
        "We have a Vanilla Coffee Shakes with natural extracts, Shop Now !!! ",
      berry:
        "We have a Oatmeal Berry Shakes with natural extracts, Shop Now !!! ",
      orange:
        "We have a Valencia orange Shakes with natural extracts, Shop Now !!! ",
      Orange:
        "We have a Valencia orange Shakes with natural extracts, Shop Now !!! ",
      apple: "We have a Rich Apple Shakes with natural extracts, Shop Now !!! ",
      Apple: "We have a Rich Apple Shakes with natural extracts, Shop Now !!! ",
      ok: "Thank You So Much 😊",
      Bye: "Okay! Will meet soon. TC..",
    };
    let user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
      document.getElementById("chatLog").innerHTML =
        "Oops! I think you entered a wrong option. Please select an option from below <br>";
    }
  }
  
  let addBot = document.querySelector(".bot");
  let modalBox = document.querySelector(".modal-box");
  let modalCloseIcon = document.querySelector(".modal-close_icon");
  
  addBot.addEventListener("click", function () {
    modalBox.classList.add("bg-on");
  });
  modalCloseIcon.addEventListener("click", function () {
    modalBox.classList.remove("bg-on");
  });
//CHAT BOX ends here









