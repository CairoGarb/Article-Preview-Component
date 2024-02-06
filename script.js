const shareButton = document.getElementById("share-btn")
const activeShare = document.querySelector(".active")
const profile = document.querySelector(".profile")
const shareButtonOff = document.querySelector(".share-active-icon")

shareButton.addEventListener("click", () =>{
    /* Remove/Add the hidden class */
    if (activeShare.classList.contains("hidden")) {
        activeShare.classList.remove("hidden");
    } else {
        activeShare.classList.add("hidden");
    }
    /* Analyzes the width/Change a few aspects */
    if (matchMedia('only screen and (max-width: 770px)').matches) {
        profile.style.display = "none";
    }
})

shareButtonOff.addEventListener("click", () => {
    if (activeShare.classList.contains("hidden")) {
        activeShare.classList.remove("hidden");
        
    } else {
        activeShare.classList.add("hidden");
        profile.style.display = "flex";
    }
})

