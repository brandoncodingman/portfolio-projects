// Initialize basket from localStorage or as an empty array if no data is stored
let basket = JSON.parse(localStorage.getItem('data')) || [];

// Reference to the HTML elements that will display cart items and total
let cartItemsList = document.getElementById('cart-items-list');
let totalPriceElement = document.getElementById('total-price');

// Function to render the cart items and total price
let updateCart = () => {
  // If the cart is empty, display a message and set the total to 0
  if (basket.length === 0) {
    cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
    totalPriceElement.innerHTML = '<h3>Total: $0</h3>';
    return;
  }

  // Map through each item in the basket and display it
  cartItemsList.innerHTML = basket
    .map((item) => {
      let { id, item: quantity } = item;
      let product = shopItemsData.find((product) => product.id === id);
      if (!product) return ''; // If no product found, skip this item

      // Calculate total price for this item
      let totalItemPrice = product.price * quantity;
      return `
        <div class="cart-item" id="cart-item-${id}">
          <img src="${product.img}" alt="${product.name}" width="100">
          <div class="item-details">
            <h5>${product.name}</h5>
            <p>${product.desc}</p>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${quantity}</p>
            <p>Total: $${totalItemPrice}</p>
            <button onclick="removeItem('${id}')" class="btn btn-danger">Remove</button>
          </div>
        </div>
      `;
    })
    .join('');

  // Calculate the total price for the entire cart
  let total = basket.reduce((acc, item) => {
    let product = shopItemsData.find((product) => product.id === item.id);
    return acc + (product ? product.price * item.item : 0);
  }, 0);

  totalPriceElement.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
};

// Function to remove an item from the cart
let removeItem = (id) => {
  basket = basket.filter((item) => item.id !== id); // Remove item with the given id
  localStorage.setItem('data', JSON.stringify(basket)); // Update localStorage
  updateCart(); // Re-render the cart
};

// Initialize the cart when the page loads
updateCart();
