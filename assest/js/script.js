let container = document.querySelector('.container');
async function getData() {

    try{

        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
       let finalData = data.recipes;
       console.log(finalData);
       
      finalData.forEach((val) => {

        console.log(val.name);
        

      });
       

    }catch(error){
        console.log(error);
    }
    
}

getData();

function sendToDataLocalStorage(){
alert("Data has been sent to local storage");
}