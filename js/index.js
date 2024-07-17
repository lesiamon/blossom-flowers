document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const cartToggle = document.getElementById('cart-toggle');
  const cartDetails = document.getElementById('cart-details');
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');

  // Menu toggle event
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden-menu');
  });

  // Cart toggle event
  cartToggle.addEventListener('click', () => {
    cartDetails.classList.toggle('hidden-cart');
  });

  // Sample cart functionality
  const addItemToCart = (item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    cartItems.appendChild(listItem);

    // Update cart count
    const itemCount = cartItems.children.length;
    cartCount.textContent = itemCount;
  };

  // Example of adding items to the cart
  // In a real application, this would be triggered by adding items from the product list
  document.querySelectorAll('.fa-shopping-cart').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      addItemToCart('Sample Item');
    });
  });
});
