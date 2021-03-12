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


    divIn.appendChild(p11)
    var p12 = document.createElement('div')
    p12.setAttribute('class', 'prdNumber')
    p12.textContent = AllcarDataItems[i].prdQuantity

    divIn.appendChild(p12)
    var p13 = document.createElement('div')
    p13.textContent = "+"
    divIn.appendChild(p13)
    p13.style.cursor = "pointer"

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
}
var pPrice = AllcarDataItems[0].totalPrice
var prPrice = pPrice.split(" ")
var prd_price = (Number(prPrice[1]))
document.querySelector('.TotalSubPrice').innerText = "INR " + prd_price
document.querySelector('.Total').innerText = "INR " + prd_price

function aj() {
    var Oidiv = document.createElement('div')
    Oidiv.setAttribute('class', 'item1Details')

    var canc = document.createElement('div')
    canc.textContent = "+"
    canc.setAttribute('class', 'cancelCarttems')
    Oidiv.appendChild(canc)
    canc.addEventListener('click', () => {
        Oidiv.remove()
        hDv.remove()
        var [totalCartPrice, productprice] = subTotalPrice()
        totalPrice.textContent = "INR " + (totalCartPrice - (productprice * quantity))
    })

    var Idiv1 = document.createElement('div')
    Idiv1.setAttribute('class', 'imgDiv')
    var Idiv1Image = document.createElement('img')
        // var divImage = document.querySelector('.prdImage').getAttribute('src')
        // Idiv1Image.setAttribute("src", divImage)
    Idiv1.appendChild(Idiv1Image)
    Oidiv.appendChild(Idiv1)

    var Idiv2 = document.createElement('div')
    Idiv2.setAttribute('class', 'prdDeatils')
    Oidiv.appendChild(Idiv2)

    var p1 = document.createElement('div')
        // p1.innerText = document.querySelector('.productName').innerText
    Idiv2.appendChild(p1)
    var p2 = document.createElement('div')
        // p2.innerText = document.querySelector('.productprice').innerText
    Idiv2.appendChild(p2)
    var p3 = document.createElement('div')
    Idiv2.appendChild(p3)

    var divIn = document.createElement('div')
    divIn.setAttribute('class', 'prdQuantity')
    Idiv2.appendChild(divIn)
    var p11 = document.createElement('div')
    p11.textContent = "-"
    p11.style.cursor = "pointer"


    divIn.appendChild(p11)
    var p12 = document.createElement('div')
    p12.setAttribute('class', 'prdNumber')
    p12.textContent = quantity

    divIn.appendChild(p12)
    var p13 = document.createElement('div')
    p13.textContent = "+"
    divIn.appendChild(p13)
    p13.style.cursor = "pointer"

    document.querySelector('.order-items').append(Oidiv)
    var hDv = document.createElement('div')
    hDv.style.background = "grey"
    hDv.style.height = "1px"
    hDv.style.marginTop = "30px"
    Oidiv.append(hDv)
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
}