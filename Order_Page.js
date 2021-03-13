// CartIcon updater starts here
let itemCount = document.querySelector("text");
setInterval(() => {
  if (localStorage.getItem("itemCount") != null) {
    itemCount.innerHTML = localStorage.getItem("itemCount");
  } else {
    itemCount.innerHTML = 0;
  }
}, 200);

// CartIcon updater ends here

var itemObj = [
  {
    id: 1,
    image:
      "https://static.wixstatic.com/media/7d8e8d_6b3583349911488ea9f04d8ebda727fa~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_6b3583349911488ea9f04d8ebda727fa~mv2.webp",
    name: "Peanut Butter Banana",
    price: 130.01,
    tag: "Veg & Vegan",
    milk: ["almond milk", "soya milk", "milk"],
    seeds: ["sesame", "pumpkin", "flax", "chia"],
    category: ["veg"],
  },
  {
    id: 2,
    image:
      "https://static.wixstatic.com/media/7d8e8d_e60255910f3c46bf93efc068f3fa912f~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_e60255910f3c46bf93efc068f3fa912f~mv2.webp",
    name: "Vanilla Coffee",
    price: 150.0,
    tag: false,
    milk: ["soya milk", "milk", "amound milk"],
    category: ["veg"],
  },
  {
    id: 3,
    image:
      "https://static.wixstatic.com/media/7d8e8d_7927b6d48faa4943978eda7f9bf1a96e~mv2.jpeg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_7927b6d48faa4943978eda7f9bf1a96e~mv2.webp",
    name: "French Toasts",
    price: 130.0,
    tag: "Veg & Egg",
    milk: ["soya milk", "milk", "amound milk"],
    category: ["veg", "eggs"],
  },
  {
    id: 4,
    image:
      "https://static.wixstatic.com/media/7d8e8d_f7f9be136cb94755bdad4b5790e313b0~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_f7f9be136cb94755bdad4b5790e313b0~mv2.webp",
    name: "Almond Coconut",
    price: 130.0,
    tag: false,
    milk: ["soya milk", "milk", "amound milk"],
    seeds: ["sesame", "pumpkin", "flax", "chia"],
    category: ["veg"],
  },
  {
    id: 5,
    image:
      "https://static.wixstatic.com/media/7d8e8d_d21778d4dfc54492a2c0d655277c84cf~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_d21778d4dfc54492a2c0d655277c84cf~mv2.webp",
    name: "Oatmeal Berry",
    price: 130.0,
    tag: "Shake",
    milk: ["soya milk", "milk", "amound milk"],
    category: ["veg"],
  },
  {
    id: 6,
    image:
      "https://static.wixstatic.com/media/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.webp",
    name: "Oats Pancakes",
    price: 130.0,
    tag: "Veg",
    seeds: ["sesame", "pumpkin", "flax", "chia"],
    category: ["veg"],
  },
  {
    id: 7,
    image:
      "https://static.wixstatic.com/media/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.webp",
    name: "Scrumbled Chickpeas on Toast",
    price: 130.0,
    tag: "Veg",
    milk: ["soya milk", "milk", "amound milk"],
    category: ["veg"],
  },
  {
    id: 8,
    image:
      "https://static.wixstatic.com/media/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.webp",
    name: "Scrumbled Eggs on Toast",
    price: 130.0,
    tag: "Egg",
    category: ["eggs"],
  },
  {
    id: 9,
    image:
      "https://static.wixstatic.com/media/7d8e8d_3e0b03e70e634dd085ea2a0fc62cec4a~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_3e0b03e70e634dd085ea2a0fc62cec4a~mv2.webp",
    name: "Overnigh Oats",
    price: 130.0,
    tag: "Veg(Dairy & Non-Dairy)",
    milk: ["soya milk", "milk", "amound milk"],
    seeds: ["sesame", "pumpkin", "flax", "chia"],
    category: ["veg"],
  },
  {
    id: 10,
    image:
      "https://static.wixstatic.com/media/7d8e8d_0ca6a64ee96744cb927bf60b70dcd731~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_0ca6a64ee96744cb927bf60b70dcd731~mv2.webp",
    name: "Boiled Eggs",
    price: 130.0,
    tag: "Eggs",
    category: ["eggs"],
  },
  {
    id: 11,
    image:
      "https://static.wixstatic.com/media/7d8e8d_9c50cb3ffb034d4782e2b09dccf2d385~mv2.jpg/v1/fill/w_436,h_328,al_c,lg_1,q_80/7d8e8d_9c50cb3ffb034d4782e2b09dccf2d385~mv2.webp",
    name: "Tripled Layered Sandwich",
    price: 130.0,
    tag: "Veg, Non-Veg & Egg",
    seeds: ["sesame", "pumpkin", "flax", "chia"],
    category: ["veg", "chicken", "eggs"],
  },
  {
    id: 12,
    image:
      "https://static.wixstatic.com/media/7d8e8d_3bc5561716ea48c8b9c5bec0440e4086~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_3bc5561716ea48c8b9c5bec0440e4086~mv2.webp",
    name: "Spinach Mushroom Omelette: 4 Eggs",
    price: 130.0,
    tag: "Eggs",
    milk: ["soya milk", "milk", "amound milk"],
    category: ["eggs"],
  },
];
let isMilkClick = true;
let isSeedOptClick = true;
let isSeedsClick = true;
let isVNvegClick = true;
let milkFilter = {
  yellow: "Almond Milk",
  green: "Soya Milk",
  white: "Milk",
};
let seedFilter = {
  gray: "Chia",
  maroon: "Flax",
  green: "Pumpkin",
  yellow: "Sesame",
};
let vnonFilter = {
  red: "Chicken",
  green: "Veg",
  yellow: "Eggs",
};
let data = JSON.parse(localStorage.getItem("data"));
window.onload = () => {
  localStorage.setItem("data", JSON.stringify(itemObj));
  sortAndAddData();

  document.getElementById("sort").addEventListener("change", sortAndAddData);
  let milkOpt = document.querySelectorAll("#milk > .outer-border");
  milkOpt.forEach((el) => {
    el.addEventListener("mouseenter", milkMouseEnter);
    el.addEventListener("mouseleave", milkMouseLeave);
    el.addEventListener("click", handleMilkClick);
  });

  let seedOption = document.querySelectorAll("#seed-option > .outer-border");
  seedOption.forEach((el) => {
    el.addEventListener("mouseenter", seedsMouseEnter);
    el.addEventListener("mouseleave", seedsMouseLeave);
    el.addEventListener("click", handleSeedOptClick);
  });

  let seed = document.querySelectorAll("#seed > .outer-border");
  seed.forEach((el) => {
    el.addEventListener("mouseenter", seedsMouseEnter);
    el.addEventListener("mouseleave", seedsMouseLeave);
    el.addEventListener("click", handleSeedOptClick);
  });

  let vegNonVeg = document.querySelectorAll("#veg-non-veg > .outer-border");
  vegNonVeg.forEach((el) => {
    el.addEventListener("mouseenter", vegNonVegMouseEnter);
    el.addEventListener("mouseleave", vegNonVegMouseLeave);
    el.addEventListener("click", handleVNvegClick);
  });

  let bread = document.querySelectorAll("#bread > .list-body");
  bread.forEach((el) => {
    el.addEventListener("click", handleBreadClick);
  });

  let lists = document.querySelectorAll(".list-item");
  lists.forEach((el) => {
    if (el.id != "clear") {
      el.addEventListener("click", listClick);
    }
  });
  document.querySelector("#clear").addEventListener("click", resetFilter);
  document
    .getElementById("chatBotLetsChat")
    .addEventListener("click", showDisplay);
  document.getElementById("sendBtn").addEventListener("click", sendMsg);
};

let filterClickToggle = true;
let temp;

function sortAndAddData() {
  let sort = document.getElementById("sort").value;
  if (sort == "nameAZ") {
    data = data.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      else return 1;
    });
  } else if (sort == "nameZA") {
    data = data.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      else return -1;
    });
  } else if (sort == "HighTolow") {
    data = data.sort((a, b) => {
      if (a.price < b.price) return 1;
      else return -1;
    });
  } else if (sort == "lowToHigh") {
    data = data.sort((a, b) => {
      if (a.price < b.price) return -1;
      else return 1;
    });
  }
  document.getElementById("products").innerHTML = null;
  data.forEach((el) => {
    addItems(el);
  });
}

function handleBreadClick() {
  event.stopPropagation();
}

function milkMouseLeave() {
  let milkName = this.parentElement.parentElement.querySelector(
    ".list-heading>p"
  );
  milkName.innerHTML = "Milk Options";
}

function milkMouseEnter() {
  let [, color] = this.querySelector("div").getAttribute("class").split(" ");
  let milkName = this.parentElement.parentElement.querySelector(
    ".list-heading>p"
  );
  milkName.innerHTML = milkName.innerHTML + ": " + milkFilter[color];
}

function handleMilkClick(event) {
  if (isMilkClick) {
    this.style.border = "1px solid gray";
    let milkOpt = milkFilter[
      event.target.getAttribute("class").split(" ")[1]
    ].toLowerCase();
    data = data.filter((el) => {
      if (el.milk != undefined && el.milk.includes(milkOpt)) {
        return true;
      }
      return false;
    });
    sortAndAddData();
  } else {
    data = JSON.parse(localStorage.getItem("data"));
    this.style.border = "none";
    sortAndAddData();
  }
  isMilkClick = !isMilkClick;
  event.stopPropagation();
  showClearFilter();
}

function seedsMouseEnter() {
  let [, color] = this.querySelector("div").getAttribute("class").split(" ");
  let seedOptName = this.parentElement.parentElement.querySelector(
    ".list-heading>p"
  );
  seedOptName.innerHTML = seedOptName.innerHTML + ": " + seedFilter[color];
}

function seedsMouseLeave() {
  let seedName = this.parentElement.parentElement.querySelector(
    ".list-heading>p"
  );
  if (this.parentElement.id == "seed") {
    seedName.innerHTML = "Seeds";
  } else {
    seedName.innerHTML = "Seed Options";
  }
}

function handleSeedOptClick(event) {
  if (isSeedOptClick) {
    this.style.border = "1px solid gray";
    let seedOpt = seedFilter[
      event.target.getAttribute("class").split(" ")[1]
    ].toLowerCase();
    data = data.filter((el) => {
      if (el.seeds != undefined && el.seeds.includes(seedOpt)) {
        return true;
      }
      return false;
    });
    sortAndAddData();
  } else {
    data = JSON.parse(localStorage.getItem("data"));
    sortAndAddData();
    this.style.border = "none";
  }
  isSeedOptClick = !isSeedOptClick;
  event.stopPropagation();
  showClearFilter();
}

function vegNonVegMouseLeave() {
  let vnonName = this.parentElement.parentElement.querySelector(
    ".list-heading>p"
  );
  vnonName.innerHTML = "Veg / Non-Veg";
}

function vegNonVegMouseEnter() {
  let [, color] = this.querySelector("div").getAttribute("class").split(" ");
  let vnonName = this.parentElement.parentElement.querySelector(
    ".list-heading>p"
  );
  vnonName.innerHTML = vnonName.innerHTML + ": " + vnonFilter[color];
}

function handleVNvegClick(event) {
  if (isVNvegClick) {
    this.style.border = "1px solid gray";
    let vnonOpt = vnonFilter[
      event.target.getAttribute("class").split(" ")[1]
    ].toLowerCase();
    console.log(vnonOpt);
    data = data.filter((el) => {
      if (el.category.includes(vnonOpt)) {
        return true;
      }
      return false;
    });
    sortAndAddData();
  } else {
    data = JSON.parse(localStorage.getItem("data"));
    this.style.border = "none";
    sortAndAddData();
  }
  isVNvegClick = !isVNvegClick;
  showClearFilter();
  event.stopPropagation();
}

function listClick() {
  if (filterClickToggle) {
    if (this.id == "bread") {
      this.style.transition = "all 0.3s";
      this.querySelector(".list-body").style.display = "block";
      this.style.height = "150px";
    } else if (this.id == "price") {
      this.style.transition = "all 0.3s";
      this.querySelector(".list-body").style.display = "block";
      this.style.height = "120px";
    } else {
      this.style.transition = "all 0.3s";
      this.style.height = "95px";
    }
    this.querySelector(".list-heading>i").setAttribute("class", "fa fa-minus");
    this.querySelectorAll(".list-body > *").forEach((el) => {
      el.style.display = "block";
      el.style.opacity = "1";
    });
  } else {
    this.querySelectorAll(".list-body > *").forEach((el) => {
      el.style.display = "none";
      el.style.opacity = "0";
    });

    this.style.height = "65px";
    this.querySelector(".list-heading>i").setAttribute("class", "fa fa-plus");
  }
  filterClickToggle = !filterClickToggle;
}

function addItems(data) {
  let products = document.getElementById("products");
  let card = document.createElement("div");
  let tag = document.createElement("div");
  let cardImg = document.createElement("div");
  let img = document.createElement("img");
  let tag2 = document.createElement("div");
  let cardText = document.createElement("div");
  let title = document.createElement("p");
  let cardTextDiivider = document.createElement("div");
  let price = document.createElement("p");
  let checkPrice = document.createElement("span");
  var rupee = document.createElement("i");
  rupee.setAttribute("class", "fa fa-rupee");
  card.setAttribute("class", "card");
  card.setAttribute("id", data.id);
  cardImg.setAttribute("class", "card-img");
  tag2.setAttribute("class", "tag2");
  cardText.setAttribute("class", "card-text");
  cardTextDiivider.setAttribute("class", "card-text-divider");
  img.setAttribute("src", data.image);
  title.innerHTML = data.name;
  price.append(rupee);
  checkPrice.innerHTML = data.price;
  price.append(checkPrice);
  cardImg.innerHTML;
  cardText.append(title);
  cardText.append(cardTextDiivider);
  cardText.append(price);
  cardImg.append(img);
  cardImg.append(tag2);
  if (data.tag != false) {
    tag.setAttribute("class", "tag");
    tag.innerHTML = data.tag;
    card.append(tag);
  }
  card.addEventListener("mouseenter", showTag2);
  card.addEventListener("mouseleave", hideTag2);
  card.addEventListener("click", itemIdSend);
  tag2.addEventListener("click", popUpCart);
  card.append(cardImg);
  card.append(cardText);
  products.append(card);
}

// POP UP CART
function popUpCart(event) {
  // Product Id
  document.querySelector(".bg-modal").style.display = "flex";
  var contId = event.target.parentElement.parentElement.id;
  for (let i = 0; i < itemObj.length; i++) {
    if (itemObj[i].id == contId) {
      document.querySelector(".productName").innerText = itemObj[i].name;
      document.querySelector(".productprice").innerText =
        "INR " + itemObj[i].price;
      var prdImage = document.querySelector(".prdImage");
      prdImage.setAttribute("src", itemObj[i].image);
    }
  }
  event.stopPropagation();
}

function showTag2(event) {
  event.target.querySelector(".tag2").innerHTML = "Quick View";
  event.target.querySelector(".tag2").style.height = "auto";
  event.target.querySelector(".tag2").style.padding = "16px 0px";
}

function hideTag2(event) {
  event.target.querySelector(".tag2").style.padding = "0px";
  event.target.querySelector(".tag2").style.height = "0px";
  event.target.querySelector(".tag2").innerHTML = "";
}

function itemIdSend(event) {
  document.querySelector(".bg-modal").style.display = "flex";
  var contId = event.target.parentElement.parentElement.id;
  for (let i = 0; i < itemObj.length; i++) {
    if (itemObj[i].id == contId) {
      document.querySelector(".productName").innerText = itemObj[i].name;
      document.querySelector(".productprice").innerText =
        "INR " + itemObj[i].price;
      var prdImage = document.querySelector(".prdImage");
      prdImage.setAttribute("src", itemObj[i].image);
    }
  }
}

function resetFilter() {
  location.reload();
}

function showClearFilter() {
  document.getElementById("clear").style.display = "block";
}
let itemMax;
let itemMin;
$(function () {
  data.forEach(function (el) {
    if (itemMax == undefined || itemMax < el.price) {
      itemMax = el.price;
    }
    if (itemMin == undefined || itemMin > el.price) {
      itemMin = el.price;
    }
  });
  $("#slider-range").slider({
    range: true,
    min: itemMin,
    max: itemMax,
    values: [itemMin, itemMax],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      data = JSON.parse(localStorage.getItem("data"));
      data = data.filter((el) => {
        if (el.price >= ui.values[0] && el.price <= ui.values[1]) {
          return true;
        }
        return false;
      });
      sortAndAddData();
      event.stopPropagation();
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});
//Modal Popup js code
var options = document.querySelector(".milkOptions");
var milk_Options = document.querySelectorAll(".colorOptions");

milk_Options.forEach((ele) => {
  ele.addEventListener("click", () => {
    var target = event.target.style.background;
    if (target == "white")
      options.textContent = "Milk Option: " + "Almond Milk";
    else if (target == "yellow") options.textContent = "Milk Option: " + "Milk";
    else if (target == "green")
      options.textContent = "Milk Option: " + " Soy Milk";
  });
});
var cartAllData = [];
var para = document.createElement("p");
var para1 = document.createElement("p");
var count = localStorage.getItem("itemCount");
document.getElementById("addToCart").addEventListener("click", () => {
  count++;
  localStorage.setItem("itemCount", count);
  var productName = document.querySelector(".productName").innerText;
  var productPrice = document.querySelector(".productprice").innerText;
  var cartDataObj = {};
  para.textContent = "";
  para1.textContent = " ";
  if (options.innerText == "Milk Options:") {
    para.style.color = "red";
    para.style.fontSize = "12px";
    para.textContent = "First select milk option.";
    document.querySelector(".milk-options").appendChild(para);
  } else {
    para.textContent = "";

    options.innerText = "Milk Options:";
    document.querySelector(".purchase-modal").style.display = "flex";
    document.querySelector(".bg-modal").style.display = "none";
    var product = document.querySelector(".productprice").innerText;
    var priceArr = product.split(" ");
    var productprice = Number(priceArr[1]);
    var totalPrice = document.querySelector(".totalPrice");
    var cartPrice = totalPrice.textContent;
    var cart = cartPrice.split(" ");
    var totalCartPrice = Number(cart[1]);

    function subTotalPrice(event) {
      var product = event.querySelector(".productprice").innerText;
      var priceArr = product.split(" ");
      var productprice = Number(priceArr[1]);
      var totalPrice = document.querySelector(".totalPrice");
      var cartPrice = totalPrice.textContent;
      var cart = cartPrice.split(" ");
      var totalCartPrice = Number(cart[1]);
      return [totalCartPrice, productprice];
    }

    function checkingEmptyCart(val) {
      if (val == 0) {
        para1.textContent = "Your cart is empty now!!";
        para1.style.cssText = "color:red;font-size:20px;font-weight:bold;";
        document.querySelector(".cartItems").append(para1);
      }
    }
    para1.textContent = "";
    var quantity = document.getElementById("quantity").value;
    var notToAdd = document.getElementById("notToAdd").value;
    var [totalCartPrice, productprice] = subTotalPrice(
      event.target.parentElement
    );

    totalPrice.textContent =
      "INR " + (totalCartPrice + Math.floor(productprice * quantity));

    var Oidiv = document.createElement("div");
    Oidiv.addEventListener("mouseenter", () => {
      var canc = document.createElement("div");
      canc.textContent = "+";
      canc.setAttribute("class", "cancelCarttems");
      Oidiv.appendChild(canc);
      canc.addEventListener("click", () => {
        count--;
        localStorage.setItem("itemCount", count);
        var [totalCartPrice, productprice] = subTotalPrice(
          event.target.parentElement
        );
        if (totalCartPrice - Math.floor(productprice * quantity) <= 0) {
          totalPrice.textContent = "INR " + 0;
        } else {
          totalPrice.textContent =
            "INR " + (totalCartPrice - Math.floor(productprice * quantity));
        }

        event.target.parentElement.remove();
        hDv.remove();
        var totalPrice1 = document.querySelector(".totalPrice");
        var cartPrice1 = totalPrice1.textContent;
        var cart1 = cartPrice1.split(" ");
        var totalCartPrice1 = Math.floor(Number(cart1[1]));
        checkingEmptyCart(totalCartPrice1);
      });
    });
    var Idiv1 = document.createElement("div");
    Idiv1.setAttribute("class", "imgDiv");
    var Idiv1Image = document.createElement("img");
    var divImage = document.querySelector(".prdImage").getAttribute("src");
    Idiv1Image.setAttribute("src", divImage);
    Idiv1.appendChild(Idiv1Image);
    Oidiv.appendChild(Idiv1);

    var Idiv2 = document.createElement("div");
    Idiv2.setAttribute("class", "prdDeatils");
    Oidiv.appendChild(Idiv2);

    var p1 = document.createElement("div");
    p1.innerText = document.querySelector(".productName").innerText;
    Idiv2.appendChild(p1);
    var p2 = document.createElement("div");
    p2.setAttribute("class", "productprice");
    p2.innerText = document.querySelector(".productprice").innerText;
    Idiv2.appendChild(p2);
    var divIn = document.createElement("div");
    divIn.setAttribute("class", "prdQuantity");
    Idiv2.appendChild(divIn);
    var p11 = document.createElement("div");
    p11.textContent = "-";
    p11.style.cssText = "cursor:pointer;font-size:15px;";

    divIn.appendChild(p11);
    var p12 = document.createElement("div");
    p12.setAttribute("class", "prdNumber");
    p12.textContent = quantity;

    divIn.appendChild(p12);
    var p13 = document.createElement("div");
    p13.textContent = "+";
    divIn.appendChild(p13);
    p13.style.cssText = "cursor:pointer;font-size:15px;";

    document.querySelector(".cartItems").append(Oidiv);
    var hDv = document.createElement("div");
    hDv.style.background = "grey";
    hDv.style.height = "1px";
    hDv.style.marginTop = "30px";
    document.querySelector(".cartItems").appendChild(hDv);
    p11.addEventListener("click", (event) => {
      if (quantity >= 1) {
        p12.textContent = --quantity;

        // console.log(event.target.parentElement.parentElement)
        var [totalCartPrice, productprice] = subTotalPrice(
          event.target.parentElement.parentElement
        );
        if (totalCartPrice - productprice <= 0) {
          totalPrice.textContent = "INR " + 0;
        } else {
          totalPrice.textContent =
            "INR " + Math.floor(totalCartPrice - productprice);
        }
      }
    });
    p13.addEventListener("click", () => {
      if (quantity >= 1) {
        p12.textContent = ++quantity;

        var [totalCartPrice, productprice] = subTotalPrice(
          event.target.parentElement.parentElement
        );
        totalPrice.textContent =
          "INR " + Math.floor(totalCartPrice + productprice);
      }
    });

    document.getElementById("viewPurchase").addEventListener("click", () => {
      cartDataObj.prdName = productName;
      cartDataObj.prdPrice = productPrice;
      cartDataObj.milkOptions = options.innerText;
      cartDataObj.prdImages = divImage;
      cartDataObj.prdQuantity = quantity;
      cartDataObj.totalPrice = totalPrice.textContent;
      cartAllData.push(cartDataObj);
      localStorage.setItem("allCartItems", JSON.stringify(cartAllData));

      window.location = "orderSummary.html";
    });
  }
});

// tag2.addEventListener('click', () => {
//     document.querySelector('.bg-modal').style.display = "flex"
// });
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".bg-modal").style.display = "none";
});

//purchase Modal

document.querySelector(".purchase-close").addEventListener("click", () => {
  document.querySelector(".purchase-modal").style.display = "none";
});
document.querySelector(".textClass").addEventListener("click", () => {
  document.querySelector(".purchase-modal").style.display = "flex";
});

// chat bot
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
  berry: "We have a Oatmeal Berry Shakes with natural extracts, Shop Now !!! ",
  orange:
    "We have a Valencia orange Shakes with natural extracts, Shop Now !!! ",
  Orange:
    "We have a Valencia orange Shakes with natural extracts, Shop Now !!! ",
  apple: "We have a Rich Apple Shakes with natural extracts, Shop Now !!! ",
  Apple: "We have a Rich Apple Shakes with natural extracts, Shop Now !!! ",
  ok: "Thank You So Much 😊",
  Bye: "Okay! Will meet soon. TC..",
};
let toggler = true;
function showDisplay() {
  var chatDisplay = document.getElementById("chatDisplay");
  var chatInput = document.getElementById("chatInput");
  if (toggler) {
    chatDisplay.style.display = "block";
    document
      .querySelector("#chatBotLetsChat > i")
      .setAttribute("class", "fas fa-chevron-down");
    chatInput.style.display = "block";
  } else {
    chatDisplay.style.display = "none";
    chatInput.style.display = "none";
    document
      .querySelector("#chatBotLetsChat > i")
      .setAttribute("class", "fas fa-chevron-up");
  }
  toggler = !toggler;
}

function sendMsg() {
  var chatBotTxt = document.getElementById("chatBotTxt").value;
  if (chatBotTxt.length > 0) {
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.innerHTML = chatBotTxt;
    div.append(p);
    div.style.textAlign = "right";
    document.getElementById("chatDisplay").append(div);
    setTimeout(() => {
      botSendMsg(chatBotTxt);
    }, 1000);
  }
}

function botSendMsg(chatBotTxt) {
  var div = document.createElement("div");
  var p = document.createElement("p");
  for (key in know) {
    if (key == chatBotTxt.toLowerCase()) {
      p.innerHTML = know[key];
      break;
    } else {
      p.innerHTML = "whats up";
    }
  }
  div.append(p);
  div.style.textAlign = "left";
  document.getElementById("chatDisplay").append(div);
}
