//Add cart implementation
var options = document.querySelector('.milkOptions')
var milk_Options = document.querySelectorAll('.colorOptions')

milk_Options.forEach((ele) => {
    ele.addEventListener('click', () => {
        var target = event.target.style.background
        if (target == "white")
            options.textContent = "Milk Option: " + "Almond Milk"
        else if (target == "yellow")
            options.textContent = "Milk Option: " + "Milk"
        else if (target == "green")
            options.textContent = "Milk Option: " + " Soy Milk"
    })
})
document.getElementById('addToCart').addEventListener('click', () => {
    var quantity = document.getElementById('quantity').value
    var notToAdd = document.getElementById('notToAdd').value
    var productprice = document.querySelector('.productprice').textContent
    productprice = productprice.split(" ")
    productprice = Number(productprice[1])


})