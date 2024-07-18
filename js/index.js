document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const cartToggle = document.getElementById('cart-toggle');
  const menu = document.getElementById('menu');
  const cartDetails = document.getElementById('cart-details');
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  let cart = [];

  // Toggle menu visibility
  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('hidden-menu');
  });

  // Toggle cart visibility
  cartToggle.addEventListener('click', function() {
    cartDetails.classList.toggle('hidden-cart');
  });

  // Add event listeners to cart icons
  const cartIcons = document.querySelectorAll('.fa-shopping-cart');
  cartIcons.forEach(function(icon) {
    icon.addEventListener('click', function(event) {
      event.preventDefault();
      const productElement = icon.closest('.product');
      const productName = productElement.querySelector('span').textContent;
      addToCart(productName);
    });
  });

  // Function to add items to the cart
  function addToCart(productName) {
    const cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ name: productName, quantity: 1 });
    }
    updateCartDisplay();
  }

  // Function to update the cart display
  function updateCartDisplay() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - Quantity: ${item.quantity}`;
      cartItems.appendChild(li);
    });
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }
});
