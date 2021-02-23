// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changedevouredBtns = document.querySelectorAll('.change-devoured');
  
    // Set up the event listener for the create button
    if (changedevouredBtns) {
      changedevouredBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          console.log('test');
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newdevoured = e.target.getAttribute('data-newdevoured');
  
          const newdevouredState = {
            devoured: newdevoured,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'appliburgerion/json',
              'Content-Type': 'appliburgerion/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newdevouredState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed devoured to: ${newdevoured}`);
              loburgerion.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createburgerBtn = document.getElementById('create-form');
  
    if (createburgerBtn) {
      createburgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newburger = {
          name: document.getElementById('ca').value.trim(),
          devoured: document.getElementById('').checked,
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'appliburgerion/json',
            'Content-Type': 'appliburgerion/json',
          },
  
          // Make sure to serialize the JSON body
          body: JSON.stringify(newburger),
        }).then(() => {
          // Empty the form
          document.getElementById('ca').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Made a new burger!');
          loburgerion.reload();
        });
      });
    }
  });
  