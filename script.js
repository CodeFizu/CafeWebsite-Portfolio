// Filter Menu
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item'); // Get all menu items
    const buttons = document.querySelectorAll('.menu-filters button'); // Get all filter buttons
  
    // Remove the "active" class from all buttons
    buttons.forEach(button => button.classList.remove('active'));
    
    // Add the "active" class to the clicked button
    event.target.classList.add('active');

    items.forEach(item => {
      // Show items that match the category or all items if "all" is selected
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block'; // Show the item
      } else {
        item.style.display = 'none'; // Hide the item
      }
    });
  }