NProgress.start();
NProgress.done();

let home = document.querySelectorAll("#nav-li-id1 a");
let thinkRoom = document.querySelector("#nav-li-id5 a");
let changeNav = document.querySelector(".navbar");
let styles = Array.from(document.querySelectorAll(".style"));
let bg_black = document.querySelector('.navbar-collapse');
let nav_bg = document.querySelector('.nav_bg');
// setTimeout(function () {
//   document.querySelector(".layer").classList.add("complete");
//   var loader = document.querySelector("#loader-wrapper");
//   loader.style.display = "none";
// }, 1500);

let flag = true;
if (flag) {
  thinkRoom.addEventListener("click", (e) => {
    nav_bg.style.background = "linear-gradient(to right, #242627,#242627)";
    bg_black.style.background = "linear-gradient(to right, #242627,#242627)";
    changeNav.style.background = "linear-gradient(to right, #242627,#242627)";
  });
  home.forEach((obj, i) => {
    
    obj.addEventListener("click", (e) => {
      nav_bg.style.background = "white"
      bg_black.style.background = "white"
      changeNav.style.background = "white";
    });
  });
  
}
document.addEventListener("mousemove", function (e) {
  var gradient = document.querySelector(".gradient");
  gradient.style.background = "none";
  gradient.style.backgroundImage =
    "radial-gradient(circle closest-corner at " +
    e.clientX +
    "px " +
    e.clientY +
    "px , rgba(0,0,0,0) 0%, rgba(0,0,0,.9) 66%)";
});

document.addEventListener("mouseout", function (e) {
  var gradient = document.querySelector(".gradient");
  gradient.style.background = "rgba(0,0,0,.9)";
});
menu = () => {
  var showNav = document.querySelector(".navbar-nav");
  showNav.classList.toggle("show");
  var a = Array.from(document.querySelectorAll(".show a"));
  a.forEach((rem) => {
    rem.addEventListener("click", () => {
      showNav.classList.remove("show");
    });
  });
};




const iconShopping = document.querySelector(".iconShopping");
const cartCloseBtn = document.querySelector(".fa-times");
const cartBox = document.querySelector(".cartBox");
const attToCartBtn = document.querySelectorAll(".attToCart");
const iconShoppingP = document.querySelector(".iconShopping p");
const cardBoxTable = cartBox.querySelector("table");
const total = document.getElementById("total");
iconShopping.addEventListener("click", function () {
  cartBox.classList.add("active");
});
cartCloseBtn.addEventListener("click", function () {
  cartBox.classList.remove("active");
});

let items = [];
let itemsInCart = 0;
attToCartBtn.forEach((attBtn) => {
  attBtn.addEventListener("click", (e) => {
    let flag = true;
    iconShoppingP.innerHTML = ++itemsInCart;
    let item = {
      name: e.target.parentElement.children[0].textContent,
      price: parseInt(
        e.target.parentElement.children[1].children[0].textContent
      ),
      quantity: parseInt(e.target.parentElement.children[3].value),
      image:e.target.parentElement.parentElement.children[0].querySelector('img').currentSrc
    };
    
    items.forEach((obj, i) => {
      if (obj.name == item.name) {
        items[i] = item;
        iconShoppingP.innerHTML = --itemsInCart;
        flag = false;
        return;
      }
    });

    if (flag) items.push(item);
    addRows();
    console.log(items);
  });
});
let addRows = () => {
  let tableData =
    "<tr><th>S NO.</th><th>PRODUCT NAME</th><th>PRICE</th><th>QUANTITY</th><th>PRODUCT IMAGE</th><th>AMOUNT</th><th>UPLOAD YOUR FILES</th></tr>";

  if (items == null || items.length == 0) {
    tableData += '<h1 class="text-center" >No items Found</h1>';
  } else {
    items.map((data, index) => {
      tableData +=
        "<tr><th>" +
        (index + 1)+"." +
        "</th><th>" +
        data.name +
        "</th><th>" +
        data.price +
        "</th><th>" +
        data.quantity +
        "</th><th>" +
        '<img class="img-fluid" height="300" width="340" src="'+data.image+'">' +
        "</th><th>" +
        data.price * data.quantity +
        '</th><th><a href="#" onclick=deleteRow(this); style="color:white;background:#E74040;padding:5px;border-radius:5px;">DELETE</a>&nbsp;<a class="anchor" href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanukarthick15@gmail.com" target="_blank" style="color:white;background:grey;padding:5px;border-radius:5px;padding-right:5px;">UPLOAD</a></th></tr>';
    });
  }
  cardBoxTable.innerHTML = tableData;
  totalAmount();
};
function deleteRow(e) {
  iconShoppingP.innerHTML = --itemsInCart;
  items = items.filter(
    (item) => item.name !== e.parentElement.parentElement.children[1].textContent
  );
  addRows();
  console.log(items);
}
let totalAmount = () => {
  let sum = 0;
  items.map((item) => {
    sum += item.quantity * item.price;
  });
  total.textContent = sum;
};




{/* <img class="img-fluid" src="'+data.image+'">' */}