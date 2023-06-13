let smoothieOrder = [];

makeSmoothie = () =>{

    let smoothieTotal = 0;

    let smoothie = document.getElementById("smoothie").value;
    

    let size = document.getElementsByName("baseRadio");
    let sizeValue; 
    for(let i = 0; i < size.length; i++){
        if(size[i].checked){
            sizeValue = size[i].value
            smoothieTotal = smoothieTotal + +size[i].dataset.cost
        }
    }

    let ingredients = document.getElementsByName("ingredients");
    let topArray = [];
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked){
            topArray.push(ingredients[i].value);
            smoothieTotal = smoothieTotal + +ingredients[i].dataset.cost
        }
    }

    smoothieOrder.push({
        smoothie: smoothie,
        size: sizeValue,
        ingredients: topArray,
        smoothiePrice: smoothieTotal
    });

    console.log(smoothieOrder)

    document.getElementById("smoothieForm").reset();


}


displayOrder= () => {
    let area = document.getElementById("studentOut");
   
    
    area.innerHTML= "";

let overallTotal = 0;

for( let i=0; i< smoothieOrder.length; i++) {
    let name = smoothieOrder[i].smoothie;
    let size = smoothieOrder[i].size;
    let ingredients = smoothieOrder[i].ingredients;
    let price = smoothieOrder[i].smoothiePrice;

    overallTotal += price;

            area.innerHTML += `
            
           
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p>Size: ${size}</p>
                <p>Ingredients: ${ingredients}</p>
                <p>Total Cost: R${price}.00</p>
              </div>
            </div>
         

              `

    

}


}
