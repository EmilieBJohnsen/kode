let erPaaPause = true;

let observer = new IntersectionObserver((entries, observer) => {
    for (const videosted of entries){ 
        if (videosted.isIntersecting && erPaaPause===true) { 
            video.play();
            erPaaPause = false;
        } else {
            video.pause();
            erPaaPause = true;
        }
    };

}, {threshold:1}); //1 = artikel skal være 100% synlig for at tælle med

// Hovedprogram
const video = document.getElementById("video"); //Observer kun på sted med id = video
observer.observe(video);

// Javascript for progressbar

const side2 = document.getElementById("side2");
const jordbaer = document.getElementById("2");
const side3 = document.getElementById("side3");
const peach = document.getElementById("3");
const bob2 = document.getElementById("bob2");
const bob3 = document.getElementById("bob3");

side2.addEventListener("mouseover", function(){
    jordbaer.classList.add("scale")
    bob2.classList.add("shake-top")

})

side2.addEventListener("mouseout", function(){
    jordbaer.classList.remove("scale")
})

side3.addEventListener("mouseover", function(){
    peach.classList.add("scale")
    bob3.classList.add("shake-bottom")
})

side3.addEventListener("mouseout", function(){
    peach.classList.remove("scale")
})

// Javascript for side 3 "Vælg en ret" 

const gris = document.getElementById("gris");
const fisk = document.getElementById("fisk");
const ko = document.getElementById("ko");
const kylling = document.getElementById("kylling");
const vegetar = document.getElementById("vegetar");

gris.addEventListener("click", function(){
    const output = document.getElementById("output");
    output.innerHTML = "Godt valg! <br> Så laver vi stegt flæsk med persillesovs!";
    gris.classList.add("valg");
    fisk.classList.remove("valg");
    ko.classList.remove("valg");
    kylling.classList.remove("valg");
    vegetar.classList.remove("valg");
});

fisk.addEventListener("click", function(){
    const output = document.getElementById("output");
    output.innerHTML = `Godt valg! <br> Så laver vi laks med salat og pasta!`;
    gris.classList.remove("valg");
    fisk.classList.add("valg");
    ko.classList.remove("valg");
    kylling.classList.remove("valg");
    vegetar.classList.remove("valg");
});

