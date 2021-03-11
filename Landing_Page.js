// For sticky Navbar
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
// sticky COde ends here



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
//cart Item counter ends here









