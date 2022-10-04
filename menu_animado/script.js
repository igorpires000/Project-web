let icone = document.querySelectorAll(".icone");

icone.forEach((icone, index) => {
    icone.addEventListener("click", ()=>{
        document.querySelector(".active").classList.remove("active");
        icone.classList.add("active");

        let indicador = document.querySelector(".indicator");

        indicador.style.left = `${index * 93 + 48}px`

    })
})