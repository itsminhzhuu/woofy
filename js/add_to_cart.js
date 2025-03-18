// Add to Cart function
function addToCart(productId, quantity) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "add_to_cart.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      if (xhr.status == 200) {
        alert(xhr.responseText); // Show a success message
        // Update the cart icon (you can also update cart count dynamically)
        let cartCount = document.querySelector('.icon span');
        cartCount.innerHTML = parseInt(cartCount.innerHTML) + quantity;
      }
    };
    xhr.send(`product_id=${productId}&quantity=${quantity}`);
  }
  
  // Add to Favorites function
  function addToFavorites(productId) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "add_to_favorites.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      if (xhr.status == 200) {
        alert(xhr.responseText); // Show a success message
      }
    };
    xhr.send(`product_id=${productId}`);
  }
  
  // Attach event listeners to the "Add to Cart" and "Favorite" buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
      const productId = this.dataset.productId;
      const quantity = 1; // You can change this to allow users to specify quantity
      addToCart(productId, quantity);
    });
  });
  
  document.querySelectorAll('.add-to-favorites-btn').forEach(button => {
    button.addEventListener('click', function() {
      const productId = this.dataset.productId;
      addToFavorites(productId);
    });
  });
  