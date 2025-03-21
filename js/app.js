// Function to add item to the cart
function addToCart(productId, quantity) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "add_to_cart.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onload = function() {
      if (xhr.status == 200) {
        alert(xhr.responseText);  // Show success message
        let cartCount = document.querySelector('.icon span');
        cartCount.innerHTML = parseInt(cartCount.innerHTML) + quantity;
      }
    };
  
    // Sending product_id and quantity to the server
    xhr.send(`product_id=${productId}&quantity=${quantity}`);
  }
  
  // Function to add item to favorites
  function addToFavorites(productId) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "add_to_favorites.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onload = function() {
      if (xhr.status == 200) {
        alert(xhr.responseText);  // Show success message
      }
    };
  
    // Sending product_id to the server
    xhr.send(`product_id=${productId}`);
  }
  
  // Event listeners for the "Add to Cart" and "Add to Favorites" buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
      const productId = this.dataset.productId;
      const quantity = 1;  // You can customize this based on user input
      addToCart(productId, quantity);
    });
  });
  
  document.querySelectorAll('.add-to-favorites-btn').forEach(button => {
    button.addEventListener('click', function() {
      const productId = this.dataset.productId;
      addToFavorites(productId);
    });
  });
  