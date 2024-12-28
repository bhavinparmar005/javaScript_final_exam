let container = document.querySelector(".container");

      let savedata = JSON.parse(localStorage.getItem("recipes"));
    //   console.log(savedata[0].ingredients);
      
        console.log(savedata);

      savedata.forEach((val, index) => {
        // console.log(val.ingredients);

        let ingredients = val.ingredients;
        console.log(ingredients.split(","));

        container.innerHTML += `
          <div class="card_main">
        <div class="item_img_main">
          <img src="${val.image}" alt="item_image" />
        </div>
        <div class="recipe_details_main">
          <h4 class="recipe_name">${val.name}</h4>
          <p class="pre">ingredients</p>
          <ul class="ingredients">
         
           <li>Pizza dough</li>
           <li>Tomato sauce</li>
           <li>Fresh mozzarella cheese</li>
           <li>Fresh basil leaves</li>
           <li>Olive oil</li>
           <li>Salt and pepper to taste</li>
          </ul>

          <p class="instructions_heading">instructions</p>
          <ol class="instructions">
          <li>Preheat the oven to 475°F (245°C).</li>
          <li>Roll out the pizza dough and spread tomato sauce evenly.</li>
          <li>Top with slices of fresh mozzarella and fresh basil leaves.</li>
          <li>Drizzle with olive oil and season with salt and pepper.</li>
          <li>Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.</li>
          <li>Slice and serve hot.</li>
          
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
            <button
              class="add_to_cart_button"
              onclick="removeToRacipe(${index})"
            >
              REMOVE THE RECIPE
            </button>
          </div>
        </div>
      </div>
    `;
      });
      function removeToRacipe(index) {
        savedata.splice(index, 1);
        localStorage.setItem("recipes", JSON.stringify(savedata));

        window.location.reload();
      }

      function clearAllData() {
        localStorage.clear();
        window.location.reload();
      }