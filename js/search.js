// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the search button
    const searchButton = document.querySelector('.btn.btn-outline-success');
  
    // Add event listener to the search button
    searchButton.addEventListener('click', searchFunction);
  });
  
  function searchFunction() {
    // Get the search query from the input field
    var searchQuery = document.getElementById('search').value.toLowerCase();
    
    // Select all menu items to filter
    var menuItems = document.querySelectorAll('.menu li a');
    
    // Loop through menu items
    menuItems.forEach(function(item) {
      var text = item.textContent.toLowerCase(); // Get the text content of each item
      
      // Check if the item contains the search query
      if (text.includes(searchQuery)) {
        item.parentElement.style.display = ''; // Show the item if it matches
      } else {
        item.parentElement.style.display = 'none'; // Hide the item if it doesn't match
      }
    });
    
    // If you want to search through other sections, you can add similar logic here:
    var productItems = document.querySelectorAll('.products li a');
    productItems.forEach(function(item) {
      var text = item.textContent.toLowerCase();
      
      // Check if the product name contains the search query
      if (text.includes(searchQuery)) {
        item.parentElement.style.display = ''; // Show the item if it matches
      } else {
        item.parentElement.style.display = 'none'; // Hide the item if it doesn't match
      }
    });
  }
  