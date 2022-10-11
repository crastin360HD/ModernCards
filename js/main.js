// Variables

let iconScroll = document.getElementById("iconScroll");
let loading = document.getElementById("containerCards");
let cartas = document.getElementById("containerPosts");
let container = document.querySelector(".container");

iconScroll.addEventListener("click", ()=>{

    loading.classList.toggle("loading")
    if(loading.classList.contains("loading")){
        // alert("Si esta puesta")
        cartas.style.opacity = "1";
        container.style.overflow = "visible";
    }else {
        // alert("Clase afuera")
        cartas.style.opacity = "0";
    }
/*     cartas.classList.toggle("showConainerPost")
    loading.style.opacity = "0" */
})

// Dark mode

let iconMoon = document.querySelector(".modeMoon");
const iconSun = document.querySelector(".modeSun");

iconMoon.addEventListener("click", ()=>{

    document.body.classList.add("activeDark");
    iconSun.style.transform = "translateY(-45px)";
    if(iconSun.style.transform = "translateY(-45px)"){
        iconMoon.style.transform = "translateY(-80px)";
    }
})

iconSun.addEventListener("click", ()=>{
    iconSun.style.transform = "translateY(-4px)";
    if(iconSun.style.transform = "translateY(-4px)"){
        iconMoon.style.transform = "translateY(0)"
    }
    document.body.classList.remove("activeDark");
})



