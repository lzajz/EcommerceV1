


// displays after DOM(document object module)  is loaded

document.addEventListener('DOMContentLoaded', () => {
  
  // grabs JSON FILE
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        const products = data.products; // goes into the "products" array
        const jsonElement = document.getElementById('women-json');  
        let html = '';
  
        // Loops through each product to display it all onto the page
        products.forEach(product => {  
          html += `
            <div>
              <img src="${product.img}" alt="image of product">
              <h1>${product.name}</h1>
              <h4>${product.color}</h4>
              <h2>${product.price}</h2>
              <h3 class="description">${product.description}</h3>
              <button>${product.buttonText}</button>
            </div>
          `;
        });
  
        jsonElement.innerHTML = html;
        // if any error happens, it will log into the console 
      })      
      .catch(error => {
        console.log('Error:', error);
      });
  });
  