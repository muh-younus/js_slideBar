let featureButton = document.querySelector(".featureBtn");
let featureShow = document.querySelector(".feat-show");

let serviceButton = document.querySelector(".serviceBtn");
let serviceShow = document.querySelector(".service-show");

let barButton = document.querySelector(".list-button");
let sideBar = document.querySelector(".sider-bar");


barButton.addEventListener("click", () => {

    barButton.classList.toggle("click");
    sideBar.classList.toggle("show");
})


// Service-Button-section

serviceButton.addEventListener("click" ,() => {

    
    serviceShow.classList.toggle("service");

    
});
featureButton.addEventListener("click" ,() => {

    
    featureShow.classList.toggle("feature");

    
});


// Feature-Button-section
featureButton.addEventListener("click", () => {
    
   
    if(count == true){

        featureShow.style = "display: block";

        count=false;


    }
    else{

        featureShow.style = "display: none";
        count=true;
    }

});

