window.addEventListener("scroll",
    function(){
        const header = document.querySelector("header");
        header.classList.toggle("efe", window.scrollY > 3);

    }
)