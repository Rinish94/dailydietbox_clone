let itemCount = document.querySelector('text')
setInterval(() => {
    if (localStorage.getItem('itemCount') != null) {
        itemCount.innerHTML = localStorage.getItem('itemCount')
    } else {
        itemCount.innerHTML = 0
    }
}, 200)
