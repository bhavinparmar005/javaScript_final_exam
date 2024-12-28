let container = document.querySelector('.container');

async function getData() {

    try{

        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
       let finalData = data.recipes;
       console.log(finalData);
       
      
       
      
      finalData.forEach((val) => {

        // val.ingredients = val.ingredients.split(',');
        
        

        container.innerHTML += `
        <div class="card_main">
        <div class="item_img_main">
          <img
            src="${val.image}"
            alt="item_image"
          />
        </div>
        <div class="recipe_details_main">
          <h4 class="recipe_name">${val.name}</h4>
          <p class="pre">ingredients</p>
          <ul class="ingredients">
        
          ${val.ingredients.map((val) => `<li>${val}</li>`).join('')}
          </ul>

          <p class="instructions_heading">instructions</p>
          <ol class="instructions">
            ${val.instructions.map((val) => `<li>${val}</li>`).join('')}
         
          </ol>
          <div class="timing_detalis_main">
            <div class="time">
              <div class="cooktime">${val.prepTimeMinutes} minutes</div>
              <p>cookTime</p>
            </div>
            <div class="rating_main">
              <div class="cooktime">${val.rating}</div>
              <p>Rating</p>
            </div>
          </div>

          <div class="add_to_cart_button_main">
            <button class="add_to_cart_button" onclick="sendToDataLocalStorage('${val.image}','${val.name}','${val.instructions}','${val.ingredients}','${val.prepTimeMinutes}','${val.rating}')">SAVE THE RECIPE</button>
          </div>
        </div>
      </div>
        `

        

      });
       

    }catch(error){
        console.log(error);
    }
    
}

getData();

let allRecipes =JSON.parse(localStorage.getItem('recipes')) || [];

function sendToDataLocalStorage(image,name,instructions,ingredients,prepTimeMinutes,rating){

  console.log(ingredients);
  

  let recipes = {image,name,instructions,ingredients,prepTimeMinutes,rating};
  allRecipes.push(recipes);
  //  alert("Data has been sent to local storage");
  localStorage.setItem('recipes',JSON.stringify(allRecipes));
  // window.location.reload();

// console.log(allRecipes);

}