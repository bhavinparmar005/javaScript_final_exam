let container = document.querySelector('.container');

async function getData() {

    try{

        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
       let finalData = data.recipes;
       console.log(finalData);
       
      finalData.forEach((val) => {

        console.log(val.prepTimeMinutes);
        

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
            <li>${val.ingredients[0]}</li>
            <li>${val.ingredients[1]}</li>
            <li>${val.ingredients[2]}</li>
            <li>${val.ingredients[3]}</li>
            <li>${val.ingredients[4]}</li>
            <li>${val.ingredients[5]}</li>
          </ul>

          <p class="instructions_heading">instructions</p>
          <ol class="instructions">
            <li>${val.instructions[0]}</li>
            <li>${val.instructions[1]}</li>
            <li>${val.instructions[2]}</li>
            <li>${val.instructions[3]}</li>
            <li>${val.instructions[4]}</li>
            <li>${val.instructions[5]}</li>
         
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
            <button class="add_to_cart_button" onclick="sendToDataLocalStorage()">SAVE THE RECIPE</button>
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

function sendToDataLocalStorage(){
alert("Data has been sent to local storage");
}