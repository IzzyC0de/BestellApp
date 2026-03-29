function renderDishes() {
    let contentRef = ['burgerList','pizzaList','saladList']
    contentRef.forEach(id =>{
        let element = document.getElementById(id);
        if (element) element.innerHTML = "";
    });
    
    
    for (let indexDishes = 0; indexDishes < myDishes.length; indexDishes++) {
        const dish = myDishes[indexDishes];
        let targetId = "";
        
        if (dish.category === 'Burger'){
            targetId = 'burgerList';
        } else if (dish.category === 'Pizza'){
            targetId = 'pizzaList';
        } else if (dish.category === 'Salad'){
            targetId = 'saladList';
        }


        if(targetId){
            document.getElementById(targetId).innerHTML += getDishTemplate(indexDishes);
        }
    }
}