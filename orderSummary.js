var AllcarDataItems = localStorage.getItem('allCartItems')
AllcarDataItems = JSON.parse(AllcarDataItems)
console.log(AllcarDataItems)
for (let i = 0; i < AllcarDataItems.length; i++) {
    var Oidiv = document.createElement('div')
    Oidiv.setAttribute('class', 'item1Details')

    var canc = document.createElement('div')
    canc.textContent = "+"
    canc.setAttribute('class', 'cancelCarttems')
    Oidiv.appendChild(canc)
    canc.addEventListener('click', (event) => {
        event.target.parentElement.remove()

        // var [totalCartPrice, productprice] = subTotalPrice()
        // totalPrice.textContent = "INR " + (totalCartPrice - (productprice * quantity))
    })
    var pPrice = AllcarDataItems[i].prdPrice
    var prPrice = pPrice.split(" ")
    var prd_price = Number(prPrice[1])

    var tItemPrice = document.createElement('div')
    tItemPrice.setAttribute('class', "totalItem1Price")
    tItemPrice.innerText = "Total: INR " + (((Number(AllcarDataItems[i].prdQuantity)) * prd_price))
    Oidiv.appendChild(tItemPrice)

    var Idiv1 = document.createElement('div')
    Idiv1.setAttribute('class', 'imgDiv')
    var Idiv1Image = document.createElement('img')
    Idiv1Image.setAttribute("src", AllcarDataItems[i].prdImages)
    Idiv1.appendChild(Idiv1Image)
    Oidiv.appendChild(Idiv1)

    var Idiv2 = document.createElement('div')
    Idiv2.setAttribute('class', 'prdDeatils')
    Oidiv.appendChild(Idiv2)

    var p1 = document.createElement('div')
    p1.innerText = AllcarDataItems[i].prdName
    Idiv2.appendChild(p1)
    p1.style.cssText = "color:grey;font-size:20px;margin:10px 0;"

    var p2 = document.createElement('div')
    p2.innerText = AllcarDataItems[i].prdPrice
    Idiv2.appendChild(p2)
    p2.style.cssText = "color:grey;font-size:15px;"

    var p3 = document.createElement('div')
    p3.innerText = AllcarDataItems[i].milkOptions
    Idiv2.appendChild(p3)
    p3.style.cssText = "color:grey;font-size:12px;"

    var divIn = document.createElement('div')
    divIn.setAttribute('class', 'prdQuantity')
    Idiv2.appendChild(divIn)

    var p11 = document.createElement('div')
    p11.textContent = "-"
    p11.style.cursor = "pointer"
    p11.addEventListener('click', (event) => {
        if (quantity >= 1) {
            var pPrice = AllcarDataItems[i].prdPrice
            var prPrice = pPrice.split(" ")
            var prd_price = Number(prPrice[1])
            var quantity = Number(AllcarDataItems[i].prdQuantity)
            p12.textContent = --quantity
                // console.log(event.target.parentElement.parentElement)
            tItemPrice.innerText = "Total: INR " + ((quantity * prd_price))
            AllcarDataItems[i].totalPrice -= prd_price
        }

    });

    divIn.appendChild(p11)
    var p12 = document.createElement('div')
    p12.setAttribute('class', 'prdNumber')
    p12.textContent = AllcarDataItems[i].prdQuantity

    divIn.appendChild(p12)
    var p13 = document.createElement('div')
    p13.textContent = "+"
    divIn.appendChild(p13)
    p13.style.cursor = "pointer"
    p13.addEventListener('click', () => {

        if (quantity >= 1) {
            var pPrice = AllcarDataItems[i].prdPrice
            var prPrice = pPrice.split(" ")
            var prd_price = Number(prPrice[1])
            var quantity = Number(AllcarDataItems[i].prdQuantity)
            p12.textContent = ++quantity
            AllcarDataItems[i].prdQuantity = Number(AllcarDataItems[i].prdQuantity) + 1
                // console.log(event.target.parentElement.parentElement)
            tItemPrice.innerText = "Total: INR " + ((quantity * prd_price))
            AllcarDataItems[i].totalPrice += prd_price
        }

    });

    document.querySelector('.order-items').append(Oidiv)
    var hDv = document.createElement('div')
    hDv.style.background = "grey"
    hDv.style.height = "1px"
    hDv.style.marginTop = "50px"
    document.querySelector('.order-items').appendChild(hDv)
        // p11.addEventListener('click', () => {
        //     if (quantity >= 1) {
        //         p12.textContent = --quantity
        //         var [totalCartPrice, productprice] = subTotalPrice()
        //         totalPrice.textContent = "INR " + (totalCartPrice - productprice)
        //     }

    // });
    // p13.addEventListener('click', () => {
    //     if (quantity >= 1) {
    //         p12.textContent = ++quantity
    //         var [totalCartPrice, productprice] = subTotalPrice()
    //         totalPrice.textContent = "INR " + (totalCartPrice + productprice)
    //     }

    // });
    var pPrice = AllcarDataItems[i].totalPrice
    var prPrice = pPrice.split(" ")
    var prd_price = (Number(prPrice[1]))
    document.querySelector('.TotalSubPrice').innerText = "INR " + prd_price
    document.querySelector('.Total').innerText = "INR " + prd_price

}
document.querySelector('.ch1').addEventListener('mouseenter', () => {
    event.target.style.cssText = "color:white;background-color: rgb(129, 193, 71);"
})
document.querySelector('.ch1').addEventListener('mouseleave', () => {
    event.target.style.cssText = "color:rgb(129, 193, 71);background-color: white;"
})
document.querySelector('.ch2').addEventListener('mouseenter', () => {
    event.target.style.cssText = "color:white;background-color: rgb(129, 193, 71);"
})
document.querySelector('.ch2').addEventListener('mouseleave', () => {
    event.target.style.cssText = "color:rgb(129, 193, 71);background-color: white;"
})
document.querySelector('.ch1').addEventListener('click', () => {
    alert(`You Order is successfully placed!! \n Have a Good Day.`)
    window.location = "Landing_Page.html"
})
document.querySelector('.ch2').addEventListener('click', () => {
    alert(`You Order is successfully placed!! \n Have a Good Day.`)
    window.location = "Landing_Page.html"
})