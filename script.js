let cart = [];
function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cart-count").textContent = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function viewCart() {
  document.getElementById("cart-page").style.display = "block";
  document.getElementById("products").style.display = "none";
  updateCartDisplay();
}

function updateCartDisplay() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    document.getElementById("empty-message").style.display = "block";
  } else {
    document.getElementById("empty-message").style.display = "none";
    cart.forEach((item, index) => {
      let div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `${item.name} - <span><del>$${(item.price * 1.25).toFixed(
        2
      )}</del> <b>$${item.price.toFixed(
        2
      )}</b></span> <button onclick="removeItem(${index})">Remove</button>`;
      cartItems.appendChild(div);
    });
  }
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
  document.getElementById("cart-count").textContent = cart.length;
}

function continueShopping() {
  document.getElementById("cart-page").style.display = "none";
  document.getElementById("products").style.display = "block";
}
