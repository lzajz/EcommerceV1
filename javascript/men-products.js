document.addEventListener('DOMContentLoaded', () => {
    fetch('men-products.json')
      .then(response => response.json())
      .then(data => {
        const menProducts = data.menProducts; 
        const jsonElement = document.getElementById('men-json');
        let html = '';
  
        
        menProducts.forEach(menProducts => {
          html += `
            <div>
              <img src="${menProducts.img}" alt="image of product">
              <h1>${menProducts.name}</h1>
              <h4>${menProducts.color}</h4>
              <h2>${menProducts.price}</h2>
              <h3>${menProducts.description}</h3>
              <button>${menProducts.buttonText}</button>
            </div>
          `;
        });
  
        jsonElement.innerHTML = html;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });