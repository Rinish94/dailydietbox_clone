var itemObj = [
  {
    id: 1,
    image:
      "https://static.wixstatic.com/media/7d8e8d_6b3583349911488ea9f04d8ebda727fa~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_6b3583349911488ea9f04d8ebda727fa~mv2.webp",
    name: "Peanut Butter Banana",
    price: 130.01,
    tag: "Veg & Vegan",
  },
  {
    id: 2,
    image:
      "https://static.wixstatic.com/media/7d8e8d_e60255910f3c46bf93efc068f3fa912f~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_e60255910f3c46bf93efc068f3fa912f~mv2.webp",
    name: "Vanilla Coffee",
    price: 150.0,
    tag: false,
  },
  {
    id: 3,
    image:
      "https://static.wixstatic.com/media/7d8e8d_7927b6d48faa4943978eda7f9bf1a96e~mv2.jpeg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_7927b6d48faa4943978eda7f9bf1a96e~mv2.webp",
    name: "French Toasts",
    price: 130.0,
    tag: "Veg & Egg",
  },
  {
    id: 4,
    image:
      "https://static.wixstatic.com/media/7d8e8d_f7f9be136cb94755bdad4b5790e313b0~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_f7f9be136cb94755bdad4b5790e313b0~mv2.webp",
    name: "Almond Coconut",
    price: 130.0,
    tag: false,
  },
  {
    id: 5,
    image:
      "https://static.wixstatic.com/media/7d8e8d_d21778d4dfc54492a2c0d655277c84cf~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_d21778d4dfc54492a2c0d655277c84cf~mv2.webp",
    name: "Oatmeal Berry",
    price: 130.0,
    tag: "Shake",
  },
  {
    id: 6,
    image:
      "https://static.wixstatic.com/media/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.webp",
    name: "Oats Pancakes",
    price: 130.0,
    tag: "Veg",
  },
  {
    id: 7,
    image:
      "https://static.wixstatic.com/media/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.webp",
    name: "Scrumbled Chickpeas on Toast",
    price: 130.0,
    tag: "Veg",
  },
  {
    id: 8,
    image:
      "https://static.wixstatic.com/media/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_c85bf623ca444d02a538f26bbb183d99~mv2.webp",
    name: "Scrumbled Eggs on Toast",
    price: 130.0,
    tag: "Egg",
  },
  {
    id: 9,
    image:
      "https://static.wixstatic.com/media/7d8e8d_3e0b03e70e634dd085ea2a0fc62cec4a~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_3e0b03e70e634dd085ea2a0fc62cec4a~mv2.webp",
    name: "Overnigh Oats",
    price: 130.0,
    tag: "Veg(Dairy & Non-Dairy)",
  },
  {
    id: 10,
    image:
      "https://static.wixstatic.com/media/7d8e8d_0ca6a64ee96744cb927bf60b70dcd731~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_0ca6a64ee96744cb927bf60b70dcd731~mv2.webp",
    name: "Boiled Eggs",
    price: 130.0,
    tag: "Eggs",
  },
  {
    id: 11,
    image:
      "https://static.wixstatic.com/media/7d8e8d_9c50cb3ffb034d4782e2b09dccf2d385~mv2.jpg/v1/fill/w_436,h_328,al_c,lg_1,q_80/7d8e8d_9c50cb3ffb034d4782e2b09dccf2d385~mv2.webp",
    name: "Tripled Layered Sandwich",
    price: 130.0,
    tag: "Veg, Non-Veg & Egg",
  },
  {
    id: 12,
    image:
      "https://static.wixstatic.com/media/7d8e8d_3bc5561716ea48c8b9c5bec0440e4086~mv2.jpg/v1/fill/w_436,h_328,al_c,q_80,usm_0.66_1.00_0.01/7d8e8d_3bc5561716ea48c8b9c5bec0440e4086~mv2.webp",
    name: "Spinach Mushroom Omelette: 4 Eggs",
    price: 130.0,
    tag: "Eggs",
  },
];
let isMilkClick = true;
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
window.onload = () => {
  localStorage.setItem("data", JSON.stringify(itemObj));
  let data = JSON.parse(localStorage.getItem("data"));
  data.forEach((el) => {
    addItems(el);
  });
  document
    .getElementById("priceRange")
    .addEventListener("click", handleBreadClick);
  let milkOpt = document.querySelectorAll("#milk > .outer-border");
  milkOpt.forEach((el) => {
    el.addEventListener("mouseenter", milkMouseEnter);
    el.addEventListener("mouseleave", milkMouseLeave);
    el.addEventListener("click", handleClick);
  });
  let seedOption = document.querySelectorAll("#seed-option > .outer-border");
  seedOption.forEach((el) => {
    el.addEventListener("mouseenter", seedsMouseEnter);
    el.addEventListener("mouseleave", seedsMouseLeave);
    el.addEventListener("click", handleClick);
  });
  let seed = document.querySelectorAll("#seed > .outer-border");
  seed.forEach((el) => {
    el.addEventListener("mouseenter", seedsMouseEnter);
    el.addEventListener("mouseleave", seedsMouseLeave);
    el.addEventListener("click", handleClick);
  });
  let vegNonVeg = document.querySelectorAll("#veg-non-veg > .outer-border");
  vegNonVeg.forEach((el) => {
    el.addEventListener("mouseenter", vegNonVegMouseEnter);
    el.addEventListener("mouseleave", vegNonVegMouseLeave);
    el.addEventListener("click", handleClick);
  });
  let bread = document.querySelectorAll("#bread > .list-body");
  bread.forEach((el) => {
    el.addEventListener("click", handleBreadClick);
  });
  let lists = document.querySelectorAll(".list-item");
  lists.forEach((el) => {
    el.addEventListener("click", listClick);
  });
};
let filterClickToggle = true;
let temp;
function handleBreadClick() {
  event.stopPropagation();
}
function listClick() {
  if (filterClickToggle) {
    if (this.id == "bread") {
      this.querySelector(".list-body").style.display = "block";
    } else {
      this.querySelector(".list-body").style.display = "flex";
    }
    this.querySelector(".list-heading>i").setAttribute("class", "fa fa-minus");
  } else {
    this.querySelector(".list-body").style.display = "none";
    this.querySelector(".list-heading>i").setAttribute("class", "fa fa-plus");
  }
  filterClickToggle = !filterClickToggle;
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

function handleClick(event) {
  if (isMilkClick) {
    this.style.border = "1px solid gray";
  } else {
    this.style.border = "none";
  }
  isMilkClick = !isMilkClick;
  event.stopPropagation();
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
  card.append(cardImg);
  card.append(cardText);
  products.append(card);
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
  window.location = `quik_order.html?product_id=${this.id}`;
}
