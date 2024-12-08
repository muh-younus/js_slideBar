let featureButton = document.querySelector(".featureBtn");
let featureShow = document.querySelector(".feat-show");

let count=1;


featureButton.addEventListener("click", () => {
    
   
    if(count == 1){

        featureShow.style = "display: block";

        count=0;


    }
    else{

        featureShow.style = "display: none";
        count=1;
    }

   

   


})

