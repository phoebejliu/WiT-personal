/**
 * Collapsible content box component
 * Provides content expand/collapse functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all collapsible boxes
    const collapsibleBoxes = document.querySelectorAll('[data-component="collapsible-box"]');
    
    // Add click event to each collapsible box
    collapsibleBoxes.forEach(function(box) {
      const toggleIcon = box.querySelector('.toggle-icon');
      const content = box.querySelector('.box-content');
      
      // Add click event listener
      toggleIcon.addEventListener('click', function() {
        // Toggle content expand/collapse state
        content.classList.toggle('collapsed');
        
        // Toggle icon rotation
        toggleIcon.classList.toggle('rotated');
        
        // Update data state attribute
        if (content.classList.contains('collapsed')) {
          box.setAttribute('data-state', 'collapsed');
        } else {
          box.setAttribute('data-state', 'expanded');
        }
      });
    });
  });